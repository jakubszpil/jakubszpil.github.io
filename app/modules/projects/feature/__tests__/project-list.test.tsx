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

import { Seo, type SeoProps } from "../../../../shared/ui/seo";
import ProjectList, { loader } from "../project-list";
import { ProjectStatus, type Project } from "../../data-access/project";
import { ProjectService } from "../../data-access/project-service";
import { ProjectCards, type ProjectCardsProps } from "../../ui/project-cards";
import {
  ProjectTechnologies,
  type ProjectTechnologiesProps,
} from "../../ui/project-technologies";

vi.mock("../../ui/project-cards");
vi.mock("../../ui/project-technologies");
vi.mock("../../../../shared/ui/seo");

describe("<ProjectList />", () => {
  let MockedProjectCards: MockInstance<typeof ProjectCards>;
  let MockedProjectTechnologies: MockInstance<typeof ProjectTechnologies>;
  let MockedSeo: MockInstance<typeof Seo>;

  let MOCKED_PROJECTS: Project[];
  let MOCKED_TECHNOLOGIES: string[];

  let MockedGetProjectByTechnology: MockInstance<
    typeof ProjectService.findAllByCategory
  >;
  let MockedGetProjectCardsTechnologies: MockInstance<
    typeof ProjectService.getCategories
  >;

  beforeEach(() => {
    MockedProjectCards = vi.mocked(ProjectCards);
    MockedProjectTechnologies = vi.mocked(ProjectTechnologies);
    MockedSeo = vi.mocked(Seo);

    MOCKED_PROJECTS = [
      {
        slug: "test-example-1",
        title: "Test title 1",
        description: "Test description 1",
        categories: ["test"],
        createdAt: "2025-03-17",
        status: ProjectStatus.COMPLETED,
      },
      {
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
      .spyOn(ProjectService, "findAllByCategory")
      .mockImplementation(() => Promise.resolve(MOCKED_PROJECTS));

    MockedGetProjectCardsTechnologies = vi
      .spyOn(ProjectService, "getCategories")
      .mockImplementation(() => Promise.resolve(MOCKED_TECHNOLOGIES));
  });

  afterEach(() => {
    MockedProjectCards.mockRestore();
    MockedProjectTechnologies.mockRestore();
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
    expect(MockedGetProjectCardsTechnologies).toHaveBeenCalled();

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: "Portfolio",
        description:
          "Projekty frontendowe wykonane przeze mnie w wolnym czasie obrazujące dotychczasowe zdobyte doświadczenie i umiejętności",
      } satisfies SeoProps,
      undefined
    );

    expect(MockedProjectTechnologies).toHaveBeenCalledWith(
      {
        technologies: MOCKED_TECHNOLOGIES,
        showAllCategory: true,
      } satisfies ProjectTechnologiesProps,
      undefined
    );

    expect(MockedProjectCards).toHaveBeenCalledWith(
      {
        projects: MOCKED_PROJECTS,
      } satisfies ProjectCardsProps,
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
    expect(MockedGetProjectCardsTechnologies).toHaveBeenCalled();

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: "Portfolio / Example",
        description:
          "Projekty frontendowe wykonane przeze mnie w wolnym czasie obrazujące dotychczasowe zdobyte doświadczenie i umiejętności",
      } satisfies SeoProps,
      undefined
    );

    expect(MockedProjectTechnologies).toHaveBeenCalledWith(
      {
        technologies: MOCKED_TECHNOLOGIES,
        showAllCategory: true,
      } satisfies ProjectTechnologiesProps,
      undefined
    );

    expect(MockedProjectCards).toHaveBeenCalledWith(
      {
        projects: [MOCKED_PROJECTS[1]],
      } satisfies ProjectCardsProps,
      undefined
    );
  });
});
