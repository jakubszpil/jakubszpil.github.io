import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { ProjectCard, type ProjectCardProps } from "../project-card";
import { ProjectCards } from "../project-cards";
import { MOCKED_PROJECT_FEEDS } from "../../test-fixtures";

vi.mock("../project-card");

describe("<ProjectCards />", () => {
  const MockedProjectCard = vi.mocked(ProjectCard);

  beforeEach(() => {
    MockedProjectCard.mockImplementation(() => <div>ProjectCard</div>);
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
  });
});
