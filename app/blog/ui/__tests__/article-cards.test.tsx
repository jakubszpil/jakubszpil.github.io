import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { ArticleCard, type ArticleCardProps } from "../article-card";
import { ArticleCards } from "../article-cards";
import { MOCKED_ARTICLE_FEEDS } from "../../test-fixtures";

vi.mock("../article-card");

describe("<ArticleCards />", () => {
  const MockedArticleCard = vi.mocked(ArticleCard);

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
  });
});
