import { render } from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockedFunction,
} from "vitest";

import { ProjectCard, type ProjectCardProps } from "../project-card";
import { ProjectCards } from "../project-cards";
import { type ProjectFeed, ProjectStatus } from "../../lib/projects";

vi.mock("../project-card");

describe("<ProjectCards />", () => {
  let MockedProjectCard: MockedFunction<typeof ProjectCard>;

  const MOCKED_PROJECT_FEEDS: ProjectFeed[] = [
    {
      slug: "example 1",
      createdAt: "2025-12-12",
      description: "Example description 1",
      status: ProjectStatus.COMPLETED,
      title: "Example title 1",
    },
    {
      slug: "example 2",
      createdAt: "2025-12-12",
      description: "Example description 2",
      status: ProjectStatus.COMPLETED,
      title: "Example title 2",
    },
    {
      slug: "example 3",
      createdAt: "2025-12-12",
      description: "Example description 3",
      status: ProjectStatus.COMPLETED,
      title: "Example title 3",
    },
  ];

  beforeEach(() => {
    MockedProjectCard = vi
      .mocked(ProjectCard)
      .mockImplementation(() => <div>ProjectCard</div>);
  });

  afterEach(() => {
    MockedProjectCard.mockRestore();
  });

  test("given projects expect to render ProjectCard components with proper data", () => {
    render(<ProjectCards projects={MOCKED_PROJECT_FEEDS} variant="ghost" />);

    expect(MockedProjectCard).toHaveBeenNthCalledWith(
      1,
      {
        project: MOCKED_PROJECT_FEEDS[0],
        variant: "ghost",
      } satisfies ProjectCardProps,
      undefined,
    );

    expect(MockedProjectCard).toHaveBeenNthCalledWith(
      2,
      {
        project: MOCKED_PROJECT_FEEDS[1],
        variant: "ghost",
      } satisfies ProjectCardProps,
      undefined,
    );

    expect(MockedProjectCard).toHaveBeenNthCalledWith(
      3,
      {
        project: MOCKED_PROJECT_FEEDS[2],
        variant: "ghost",
      } satisfies ProjectCardProps,
      undefined,
    );
  });
});
