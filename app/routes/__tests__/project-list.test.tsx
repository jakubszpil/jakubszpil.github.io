import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";

import Projects, { type ProjectsProps } from "~/components/portfolio/projects";
import Technologies, {
  type TechnologiesProps,
} from "~/components/portfolio/technologies";
import { Seo, type SeoProps } from "~/components/ui/seo";
import {
  getProjects,
  getProjectsByTechnology,
  getProjectsTechnologies,
  ProjectStatus,
  type Project,
} from "~/lib/projects";

import ProjectList, { loader } from "../project-list";

vi.mock("~/components/portfolio/projects");
vi.mock("~/components/portfolio/technologies");
vi.mock("~/components/ui/seo");
vi.mock("~/lib/projects");

describe("<ProjectList />", () => {
  let MockedProjects: MockInstance;
  let MockedTechnologies: MockInstance;
  let MockedSeo: MockInstance;

  let MOCKED_PROJECTS: Project[];
  let MOCKED_TECHNOLOGIES: string[];

  let MockedGetProjectByTechnology: MockInstance;
  let MockedGetProjectsTechnologies: MockInstance;

  beforeEach(() => {
    MockedProjects = vi.mocked(Projects);
    MockedTechnologies = vi.mocked(Technologies);
    MockedSeo = vi.mocked(Seo);

    MOCKED_PROJECTS = [
      {
        id: "1",
        slug: "test-example-1",
        title: "Test title 1",
        description: "Test description 1",
        categories: ["test"],
        createdAt: "2025-03-17",
        status: ProjectStatus.COMPLETED,
      },
      {
        id: "2",
        slug: "test-example-2",
        title: "Test title 2",
        description: "Test description 2",
        categories: ["test", "example"],
        createdAt: "2025-03-17",
        status: ProjectStatus.COMPLETED,
      },
    ];

    MOCKED_TECHNOLOGIES = ["test", "example"];

    MockedGetProjectByTechnology = vi
      .mocked(getProjectsByTechnology)
      .mockImplementation(() => Promise.resolve(MOCKED_PROJECTS));

    MockedGetProjectsTechnologies = vi
      .mocked(getProjectsTechnologies)
      .mockImplementation(() => Promise.resolve(MOCKED_TECHNOLOGIES));
  });

  afterEach(() => {
    MockedProjects.mockRestore();
    MockedTechnologies.mockRestore();
    MockedSeo.mockRestore();
    MockedGetProjectByTechnology.mockRestore();
  });

  test("should projects without technology", async () => {
    const Stub = createRoutesStub([
      {
        path: "/portfolio",
        Component: ProjectList,
        loader,
      },
    ]);

    render(<Stub initialEntries={[generatePath("/portfolio")]} />);

    await screen.findByText("Portfolio");

    expect(MockedGetProjectByTechnology).toHaveBeenCalledWith(undefined);
    expect(MockedGetProjectsTechnologies).toHaveBeenCalled();

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: "Portfolio",
        description:
          "Projekty frontendowe wykonane przeze mnie w wolnym czasie obrazujące dotychczasowe zdobyte doświadczenie i umiejętności",
      } satisfies SeoProps,
      undefined
    );

    expect(MockedTechnologies).toHaveBeenCalledWith(
      {
        technologies: MOCKED_TECHNOLOGIES,
        showAllTechnology: true,
      } satisfies TechnologiesProps,
      undefined
    );

    expect(MockedProjects).toHaveBeenCalledWith(
      {
        projects: MOCKED_PROJECTS,
      } satisfies ProjectsProps,
      undefined
    );
  });

  test("should projects with technology", async () => {
    const MOCKED_TECHNOLOGY = "example";

    MockedGetProjectByTechnology.mockImplementationOnce(() =>
      Promise.resolve([MOCKED_PROJECTS[1]])
    );

    const Stub = createRoutesStub([
      {
        path: "/portfolio/kategorie/:technology",
        Component: ProjectList,
        loader,
      },
    ]);

    render(
      <Stub
        initialEntries={[
          generatePath("/portfolio/kategorie/:technology", {
            technology: MOCKED_TECHNOLOGY,
          }),
        ]}
      />
    );

    await screen.findByText("Example");

    expect(MockedGetProjectByTechnology).toHaveBeenCalledWith(
      MOCKED_TECHNOLOGY
    );
    expect(MockedGetProjectsTechnologies).toHaveBeenCalled();

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: "Portfolio / Example",
        description:
          "Projekty frontendowe wykonane przeze mnie w wolnym czasie obrazujące dotychczasowe zdobyte doświadczenie i umiejętności",
      } satisfies SeoProps,
      undefined
    );

    expect(MockedTechnologies).toHaveBeenCalledWith(
      {
        technologies: MOCKED_TECHNOLOGIES,
        showAllTechnology: true,
      } satisfies TechnologiesProps,
      undefined
    );

    expect(MockedProjects).toHaveBeenCalledWith(
      {
        projects: [MOCKED_PROJECTS[1]],
      } satisfies ProjectsProps,
      undefined
    );
  });
});
