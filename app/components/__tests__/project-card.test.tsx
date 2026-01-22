import { render, screen } from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockedFunction,
} from "vitest";

import { CreationDate, type CreationDateProps } from "@packages/shared";

import type { ProjectFeed } from "../../lib/project-feed";
import { ProjectCard } from "../project-card";
import { ProjectStatus } from "../../lib/project";

vi.mock("@packages/shared", async (importActual) => ({
  ...(await importActual()),
  CreationDate: vi.fn(),
}));

describe("<ProjectCard />", () => {
  let MockedCreationDate: MockedFunction<typeof CreationDate>;

  const MOCKED_PROJECT_FEED: ProjectFeed = {
    slug: "example",
    createdAt: "2025-12-12",
    description: "Example description",
    title: "Example title",
    status: ProjectStatus.COMPLETED,
  };

  beforeEach(() => {
    MockedCreationDate = vi
      .mocked(CreationDate)
      .mockImplementation(() => <div>CreationDate</div>);
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
