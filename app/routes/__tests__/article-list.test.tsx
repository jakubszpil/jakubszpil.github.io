import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import ArticleList, { loader } from "../article-list";
import {
  type ArticleFeed,
  getArticlesByCategory,
  getArticlesCategories,
} from "../../lib/articles";
import {
  ArticleCards,
  type ArticleCardsProps,
} from "../../components/article-cards";
import {
  ArticleCategories,
  type ArticleCategoriesProps,
} from "../../components/article-categories";

vi.mock("../../components/article-cards");
vi.mock("../../components/article-categories");
vi.mock("../../lib/articles");

describe("<ArticleList />", () => {
  const MockedArticleCards = vi.mocked(ArticleCards);
  const MockedArticleCategories = vi.mocked(ArticleCategories);
  const MockedGetArticlesByCategory = vi.mocked(getArticlesByCategory);
  const MockedGetArticlesCategories = vi.mocked(getArticlesCategories);

  const MOCKED_ARTICLES: ArticleFeed[] = [
    {
      slug: "test-example-1",
      title: "Test title 1",
      description: "Test description 1",
      createdAt: "2025-03-17",
      readingTime: "3 minuty",
    },
    {
      slug: "test-example-2",
      title: "Test title 2",
      description: "Test description 2",
      createdAt: "2025-03-17",
      readingTime: "3 minuty",
    },
  ];

  const MOCKED_CATEGORIES: string[] = ["test", "example"];

  beforeEach(() => {
    MockedGetArticlesByCategory.mockImplementation(() =>
      Promise.resolve(MOCKED_ARTICLES),
    );

    MockedGetArticlesCategories.mockImplementation(() =>
      Promise.resolve(MOCKED_CATEGORIES),
    );
  });

  afterEach(() => {
    MockedArticleCards.mockRestore();
    MockedArticleCategories.mockRestore();
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

    expect(MockedArticleCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
      } satisfies ArticleCategoriesProps,
      undefined,
    );

    expect(MockedArticleCards).toHaveBeenCalledWith(
      {
        articles: MOCKED_ARTICLES,
      } satisfies ArticleCardsProps,
      undefined,
    );
  });

  test("should articles with category", async () => {
    const MOCKED_CATEGORY = "example";

    MockedGetArticlesByCategory.mockImplementationOnce(() =>
      Promise.resolve([MOCKED_ARTICLES[1]]),
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

    expect(MockedArticleCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
      } satisfies ArticleCategoriesProps,
      undefined,
    );

    expect(MockedArticleCards).toHaveBeenCalledWith(
      {
        articles: [MOCKED_ARTICLES[1]],
      } satisfies ArticleCardsProps,
      undefined,
    );
  });
});
