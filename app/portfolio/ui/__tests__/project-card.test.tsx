import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import {
  CreationDate,
  type CreationDateProps,
} from "../../../shared/ui/creation-date";
import { ProjectCard } from "../project-card";
import { MOCKED_PROJECT_FEED } from "../../test-fixtures";

vi.mock("../../../shared/ui/creation-date");

describe("<ProjectCard />", () => {
  const MockedCreationDate = vi.mocked(CreationDate);

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
