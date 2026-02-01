import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { ArticleCard, type ArticleCardProps } from "../article-card";
import { ArticleCards } from "../article-cards";
import type { ArticleFeed } from "../../lib/articles";

vi.mock("../article-card");

describe("<ArticleCards />", () => {
  const MockedArticleCard = vi.mocked(ArticleCard);

  const MOCKED_ARTICLE_FEEDS: ArticleFeed[] = [
    {
      slug: "example 1",
      createdAt: "2025-12-12",
      description: "Example description 1",
      readingTime: "2 minuty",
      title: "Example title 1",
    },
    {
      slug: "example 2",
      createdAt: "2025-12-12",
      description: "Example description 2",
      readingTime: "2 minuty",
      title: "Example title 2",
    },
    {
      slug: "example 3",
      createdAt: "2025-12-12",
      description: "Example description 3",
      readingTime: "2 minuty",
      title: "Example title 3",
    },
  ];

  beforeEach(() => {
    MockedArticleCard.mockImplementation(() => <div>ArticleCard</div>);
  });

  afterEach(() => {
    MockedArticleCard.mockRestore();
  });

  test("given articles expect to render ArticleCard components with proper data", () => {
    render(<ArticleCards articles={MOCKED_ARTICLE_FEEDS} variant="ghost" />);

    expect(MockedArticleCard).toHaveBeenNthCalledWith(
      1,
      {
        article: MOCKED_ARTICLE_FEEDS[0],
        variant: "ghost",
      } satisfies ArticleCardProps,
      undefined,
    );

    expect(MockedArticleCard).toHaveBeenNthCalledWith(
      2,
      {
        article: MOCKED_ARTICLE_FEEDS[1],
        variant: "ghost",
      } satisfies ArticleCardProps,
      undefined,
    );

    expect(MockedArticleCard).toHaveBeenNthCalledWith(
      3,
      {
        article: MOCKED_ARTICLE_FEEDS[2],
        variant: "ghost",
      } satisfies ArticleCardProps,
      undefined,
    );
  });
});
