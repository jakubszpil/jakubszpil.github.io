import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import ArticleList, { loader } from "../article-list";
import {
  getArticlesByCategory,
  getArticlesCategories,
} from "../../data-access/articles";
import { ArticleCards, type ArticleCardsProps } from "../../ui/article-cards";
import {
  Categories,
  type CategoriesProps,
} from "../../../shared/ui/categories";
import { MOCKED_ARTICLE_FEEDS } from "../../test-fixtures";

vi.mock("../../ui/article-cards");
vi.mock("../../data-access/articles");
vi.mock("../../../shared/ui/categories");

describe("<ArticleList />", () => {
  const MockedArticleCards = vi.mocked(ArticleCards);
  const MockedCategories = vi.mocked(Categories);
  const MockedGetArticlesByCategory = vi.mocked(getArticlesByCategory);
  const MockedGetArticlesCategories = vi.mocked(getArticlesCategories);

  const MOCKED_CATEGORIES: string[] = ["test", "example"];

  beforeEach(() => {
    MockedGetArticlesByCategory.mockImplementation(() =>
      Promise.resolve(MOCKED_ARTICLE_FEEDS),
    );

    MockedGetArticlesCategories.mockImplementation(() =>
      Promise.resolve(MOCKED_CATEGORIES),
    );
  });

  afterEach(() => {
    MockedArticleCards.mockRestore();
    MockedCategories.mockRestore();
    MockedGetArticlesByCategory.mockRestore();
    MockedGetArticlesCategories.mockRestore();
  });

  test("should articles without category", async () => {
    const Stub = createRoutesStub([
      {
        path: "/blog",
        Component: ArticleList,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(<Stub initialEntries={[generatePath("/blog")]} />);

    await screen.findByText("Artykuły");

    expect(MockedGetArticlesByCategory).toHaveBeenCalledWith(undefined);
    expect(MockedGetArticlesCategories).toHaveBeenCalled();

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
        baseUrl: "/blog",
        categoryPrefixUrl: "/blog/kategorie",
      } satisfies CategoriesProps,
      undefined,
    );

    expect(MockedArticleCards).toHaveBeenCalledWith(
      {
        articles: MOCKED_ARTICLE_FEEDS,
      } satisfies ArticleCardsProps,
      undefined,
    );
  });

  test("should articles with category", async () => {
    const MOCKED_CATEGORY = "example";

    MockedGetArticlesByCategory.mockImplementationOnce(() =>
      Promise.resolve([MOCKED_ARTICLE_FEEDS[1]]),
    );

    const Stub = createRoutesStub([
      {
        path: "/blog/kategorie/:category",
        Component: ArticleList,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(
      <Stub
        initialEntries={[
          generatePath("/blog/kategorie/:category", {
            category: MOCKED_CATEGORY,
          }),
        ]}
      />,
    );

    await screen.findByText("Example");

    expect(MockedGetArticlesByCategory).toHaveBeenCalledWith(MOCKED_CATEGORY);
    expect(MockedGetArticlesCategories).toHaveBeenCalled();

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
        baseUrl: "/blog",
        categoryPrefixUrl: "/blog/kategorie",
      } satisfies CategoriesProps,
      undefined,
    );

    expect(MockedArticleCards).toHaveBeenCalledWith(
      {
        articles: [MOCKED_ARTICLE_FEEDS[1]],
      } satisfies ArticleCardsProps,
      undefined,
    );
  });
});
