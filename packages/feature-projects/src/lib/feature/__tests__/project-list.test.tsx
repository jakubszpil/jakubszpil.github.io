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

import ProjectList, { loader } from "../project-list";
import { ProjectStatus } from "../../data-access/project";
import type { ProjectFeed } from "../../data-access/project-feed";
import {
  findAllProjectsByTechnology,
  getProjectTechnologies,
} from "../../data-access/project-service";
import { ProjectCards, type ProjectCardsProps } from "../../ui/project-cards";
import {
  ProjectTechnologies,
  type ProjectTechnologiesProps,
} from "../../ui/project-technologies";

vi.mock("../../data-access/project-service");
vi.mock("../../ui/project-cards");
vi.mock("../../ui/project-technologies");

describe("<ProjectList />", () => {
  let MockedProjectCards: MockInstance<typeof ProjectCards>;
  let MockedProjectTechnologies: MockInstance<typeof ProjectTechnologies>;

  let MOCKED_PROJECTS: ProjectFeed[];
  let MOCKED_TECHNOLOGIES: string[];

  let MockedGetProjectByTechnology: MockInstance<
    typeof findAllProjectsByTechnology
  >;
  let MockedGetProjectCardsTechnologies: MockInstance<
    typeof getProjectTechnologies
  >;

  beforeEach(() => {
    MockedProjectCards = vi.mocked(ProjectCards);
    MockedProjectTechnologies = vi.mocked(ProjectTechnologies);

    MOCKED_PROJECTS = [
      {
        slug: "test-example-1",
        title: "Test title 1",
        description: "Test description 1",
        createdAt: "2025-03-17",
        status: ProjectStatus.COMPLETED,
      },
      {
        slug: "test-example-2",
        title: "Test title 2",
        description: "Test description 2",
        createdAt: "2025-03-17",
        status: ProjectStatus.COMPLETED,
      },
    ];

    MOCKED_TECHNOLOGIES = ["test", "example"];

    MockedGetProjectByTechnology = vi
      .mocked(findAllProjectsByTechnology)
      .mockImplementation(() => Promise.resolve(MOCKED_PROJECTS));

    MockedGetProjectCardsTechnologies = vi
      .mocked(getProjectTechnologies)
      .mockImplementation(() => Promise.resolve(MOCKED_TECHNOLOGIES));
  });

  afterEach(() => {
    MockedProjectCards.mockRestore();
    MockedProjectTechnologies.mockRestore();
    MockedGetProjectByTechnology.mockRestore();
  });

  test("should projects without technology", async () => {
    const Stub = createRoutesStub([
      {
        path: "/portfolio",
        Component: ProjectList,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(<Stub initialEntries={[generatePath("/portfolio")]} />);

    await screen.findByText("Portfolio");

    expect(MockedGetProjectByTechnology).toHaveBeenCalledWith(undefined);
    expect(MockedGetProjectCardsTechnologies).toHaveBeenCalled();

    expect(MockedProjectTechnologies).toHaveBeenCalledWith(
      {
        technologies: MOCKED_TECHNOLOGIES,
        showAllTechnology: true,
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
        HydrateFallback: () => <div></div>,
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

    expect(MockedProjectTechnologies).toHaveBeenCalledWith(
      {
        technologies: MOCKED_TECHNOLOGIES,
        showAllTechnology: true,
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
