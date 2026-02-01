import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import {
  LinkWithPrefetch,
  type LinkWithPrefetchProps,
} from "../ui/link-with-prefetch";
import { Banner, type BannerProps } from "../ui/banner";
import type { ArticleFeed } from "../../lib/articles";
import { ArticleCard } from "../article-card";

vi.mock("../ui/link-with-prefetch");
vi.mock("../ui/banner");

describe("<ArticleCard />", () => {
  const MockedLinkWithPrefetch = vi.mocked(LinkWithPrefetch);
  const MockedBanner = vi.mocked(Banner);

  const MOCKED_ARTICLE_FEED: ArticleFeed = {
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

  test("given article feed expect to render proper data", async () => {
    render(<ArticleCard article={MOCKED_ARTICLE_FEED} />);

    await screen.getByText(MOCKED_ARTICLE_FEED.title);

    await screen.getByText(MOCKED_ARTICLE_FEED.description);

    expect(MockedLinkWithPrefetch).toHaveBeenCalledWith(
      expect.objectContaining({
        to: `/blog/${MOCKED_ARTICLE_FEED.slug}`,
      } satisfies LinkWithPrefetchProps),
      undefined,
    );

    expect(MockedBanner).toHaveBeenCalledWith(
      expect.objectContaining({
        createdAt: MOCKED_ARTICLE_FEED.createdAt,
        readingTime: MOCKED_ARTICLE_FEED.readingTime,
      } satisfies BannerProps),
      undefined,
    );
  });
});
