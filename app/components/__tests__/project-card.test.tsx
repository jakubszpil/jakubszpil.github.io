import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { CreationDate, type CreationDateProps } from "../ui/creation-date";
import { type ProjectFeed, ProjectStatus } from "../../lib/projects";
import { ProjectCard } from "../project-card";

vi.mock("../ui/creation-date");

describe("<ProjectCard />", () => {
  const MockedCreationDate = vi.mocked(CreationDate);

  const MOCKED_PROJECT_FEED: ProjectFeed = {
    slug: "example",
    createdAt: "2025-12-12",
    description: "Example description",
    title: "Example title",
    status: ProjectStatus.COMPLETED,
  };

  beforeEach(() => {
    MockedCreationDate.mockImplementation(() => <div>CreationDate</div>);
  });

  afterEach(() => {
    MockedCreationDate.mockRestore();
  });

  test("given project feed expect to render proper data", async () => {
    render(<ProjectCard project={MOCKED_PROJECT_FEED} />);

    await screen.getByText(MOCKED_PROJECT_FEED.title);

    await screen.getByText(MOCKED_PROJECT_FEED.description);

    await screen.getByText("Status: Ukończony");

    expect(MockedCreationDate).toHaveBeenCalledWith(
      expect.objectContaining({
        date: MOCKED_PROJECT_FEED.createdAt,
      } satisfies CreationDateProps),
      undefined,
    );
  });
});
