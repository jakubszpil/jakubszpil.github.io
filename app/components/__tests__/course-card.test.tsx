import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import {
  LinkWithPrefetch,
  type LinkWithPrefetchProps,
} from "../ui/link-with-prefetch";
import { Banner, type BannerProps } from "../ui/banner";
import type { CourseFeed } from "../../lib/courses";
import { CourseCard } from "../course-card";

vi.mock("../ui/link-with-prefetch");
vi.mock("../ui/banner");

describe("<CourseCard />", () => {
  const MockedLinkWithPrefetch = vi.mocked(LinkWithPrefetch);
  const MockedBanner = vi.mocked(Banner);

  const MOCKED_COURSE_FEED: CourseFeed = {
    slug: "example",
    createdAt: "2025-12-12",
    description: "Example description",
    readingTime: "2 minuty",
    title: "Example title",
  };

  beforeEach(() => {
    MockedLinkWithPrefetch.mockImplementation(({ children }) => (
      <>{children}</>
    ));

    MockedBanner.mockImplementation(() => <div>Banner</div>);
  });

  afterEach(() => {
    MockedLinkWithPrefetch.mockRestore();
    MockedBanner.mockRestore();
  });

  test("given course feed expect to render proper data", async () => {
    render(<CourseCard course={MOCKED_COURSE_FEED} />);

    await screen.getByText(MOCKED_COURSE_FEED.title);

    await screen.getByText(MOCKED_COURSE_FEED.description);

    expect(MockedLinkWithPrefetch).toHaveBeenCalledWith(
      expect.objectContaining({
        to: `/learning/${MOCKED_COURSE_FEED.slug}`,
      } satisfies LinkWithPrefetchProps),
      undefined,
    );

    expect(MockedBanner).toHaveBeenCalledWith(
      expect.objectContaining({
        createdAt: MOCKED_COURSE_FEED.createdAt,
        readingTime: MOCKED_COURSE_FEED.readingTime,
      } satisfies BannerProps),
      undefined,
    );
  });
});
