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

  let MOCKED_ARTICLES: Project[];
  let MOCKED_CATEGORIES: string[];

  let MockedGetProjects: MockInstance;
  let MockedGetProjectByTechnology: MockInstance;
  let MockedGetProjectsTechnologies: MockInstance;

  beforeEach(() => {
    MockedProjects = vi.mocked(Projects);
    MockedTechnologies = vi.mocked(Technologies);
    MockedSeo = vi.mocked(Seo);

    MOCKED_ARTICLES = [
      {
        id: "1",
        slug: "test-example-1",
        content: "<p>Test content 1</p>",
        title: "Test title 1",
        description: "Test description 1",
        keywords: ["test", "example"],
        technologies: ["test"],
        createdAt: "2025-03-17",
        resourceUrl: "https://example.com",
        status: ProjectStatus.COMPLETED,
        readingTime: "0 minut",
      },
      {
        id: "2",
        slug: "test-example-2",
        content: "<p>Test content 2</p>",
        title: "Test title 2",
        description: "Test description 2",
        keywords: ["example"],
        technologies: ["test", "example"],
        createdAt: "2025-03-17",
        resourceUrl: "https://example.com",
        status: ProjectStatus.COMPLETED,
        readingTime: "0 minut",
      },
    ];

    MOCKED_CATEGORIES = ["test", "example"];

    MockedGetProjects = vi
      .mocked(getProjects)
      .mockImplementation(() => Promise.resolve(MOCKED_ARTICLES));

    MockedGetProjectByTechnology = vi
      .mocked(getProjectsByTechnology)
      .mockImplementation(() => Promise.resolve([MOCKED_ARTICLES[1]]));

    MockedGetProjectsTechnologies = vi
      .mocked(getProjectsTechnologies)
      .mockImplementation(() => Promise.resolve(MOCKED_CATEGORIES));
  });

  afterEach(() => {
    MockedProjects.mockRestore();
    MockedTechnologies.mockRestore();
    MockedSeo.mockRestore();
    MockedGetProjects.mockRestore();
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

    expect(MockedGetProjects).toHaveBeenCalled();
    expect(MockedGetProjectByTechnology).not.toHaveBeenCalled();
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
        technologies: MOCKED_CATEGORIES,
        showAllTechnology: true,
      } satisfies TechnologiesProps,
      undefined
    );

    expect(MockedProjects).toHaveBeenCalledWith(
      {
        projects: MOCKED_ARTICLES,
      } satisfies ProjectsProps,
      undefined
    );
  });

  test("should projects with technology", async () => {
    const MOCKED_CATEGORY = "example";

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
            technology: MOCKED_CATEGORY,
          }),
        ]}
      />
    );

    await screen.findByText("Example");

    expect(MockedGetProjects).not.toHaveBeenCalled();
    expect(MockedGetProjectByTechnology).toHaveBeenCalledWith(MOCKED_CATEGORY);
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
        technologies: MOCKED_CATEGORIES,
        showAllTechnology: true,
      } satisfies TechnologiesProps,
      undefined
    );

    expect(MockedProjects).toHaveBeenCalledWith(
      {
        projects: [MOCKED_ARTICLES[1]],
      } satisfies ProjectsProps,
      undefined
    );
  });
});
