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

import {
  Banner,
  type BannerProps,
  LinkWithPrefetch,
  type LinkWithPrefetchProps,
} from "@packages/shared";

import type { CourseFeed } from "../../lib/course-feed";
import { CourseCard } from "../course-card";

vi.mock("@packages/shared", async (importActual) => ({
  ...(await importActual()),
  LinkWithPrefetch: vi.fn(),
  Banner: vi.fn(),
}));

describe("<CourseCard />", () => {
  let MockedLinkWithPrefetch: MockedFunction<typeof LinkWithPrefetch>;
  let MockedBanner: MockedFunction<typeof Banner>;

  const MOCKED_COURSE_FEED: CourseFeed = {
    slug: "example",
    createdAt: "2025-12-12",
    description: "Example description",
    readingTime: "2 minuty",
    title: "Example title",
  };

  beforeEach(() => {
    MockedLinkWithPrefetch = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation(({ children }) => <>{children}</>);

    MockedBanner = vi
      .mocked(Banner)
      .mockImplementation(() => <div>Banner</div>);
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
