import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";

import { Seo, type SeoProps } from "@packages/shared";

import ArticleList, { loader } from "../article-list";
import { ArticleCards, type ArticleCardsProps } from "../../ui/article-cards";
import {
  ArticleCategories,
  type ArticleCategoriesProps,
} from "../../ui/article-categories";
import type { ArticleFeed } from "../../data-access/article-feed";
import { ArticleService } from "../../data-access/article-service";

vi.mock("../../ui/article-cards");
vi.mock("../../ui/article-categories");
vi.mock("@packages/shared", async (importActual) => ({
  ...(await importActual()),
  Seo: vi.fn(),
}));

describe("<ArticleList />", () => {
  let MockedArticleCards: MockInstance<typeof ArticleCards>;
  let MockedArticleCategories: MockInstance<typeof ArticleCategories>;
  let MockedSeo: MockInstance<typeof Seo>;

  let MOCKED_ARTICLES: ArticleFeed[];
  let MOCKED_CATEGORIES: string[];

  let MockedGetArticleByCategory: MockInstance<
    typeof ArticleService.findAllByCategory
  >;
  let MockedGetArticlesCategories: MockInstance<
    typeof ArticleService.getCategories
  >;

  beforeEach(() => {
    MockedArticleCards = vi.mocked(ArticleCards);
    MockedArticleCategories = vi.mocked(ArticleCategories);
    MockedSeo = vi.mocked(Seo);

    MOCKED_ARTICLES = [
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

    MOCKED_CATEGORIES = ["test", "example"];

    MockedGetArticleByCategory = vi
      .spyOn(ArticleService, "findAllByCategory")
      .mockImplementation(() => Promise.resolve(MOCKED_ARTICLES));

    MockedGetArticlesCategories = vi
      .spyOn(ArticleService, "getCategories")
      .mockImplementation(() => Promise.resolve(MOCKED_CATEGORIES));
  });

  afterEach(() => {
    MockedArticleCards.mockRestore();
    MockedArticleCategories.mockRestore();
    MockedSeo.mockRestore();
    MockedGetArticleByCategory.mockRestore();
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

    expect(MockedGetArticleByCategory).toHaveBeenCalledWith(undefined);
    expect(MockedGetArticlesCategories).toHaveBeenCalled();

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: "Artykuły",
        description:
          "Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych.",
      } satisfies SeoProps,
      undefined
    );

    expect(MockedArticleCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
      } satisfies ArticleCategoriesProps,
      undefined
    );

    expect(MockedArticleCards).toHaveBeenCalledWith(
      {
        articles: MOCKED_ARTICLES,
      } satisfies ArticleCardsProps,
      undefined
    );
  });

  test("should articles with category", async () => {
    const MOCKED_CATEGORY = "example";

    MockedGetArticleByCategory.mockImplementationOnce(() =>
      Promise.resolve([MOCKED_ARTICLES[1]])
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
      />
    );

    await screen.findByText("Example");

    expect(MockedGetArticleByCategory).toHaveBeenCalledWith(MOCKED_CATEGORY);
    expect(MockedGetArticlesCategories).toHaveBeenCalled();

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: "Artykuły / Example",
        description:
          "Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych.",
      } satisfies SeoProps,
      undefined
    );

    expect(MockedArticleCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
      } satisfies ArticleCategoriesProps,
      undefined
    );

    expect(MockedArticleCards).toHaveBeenCalledWith(
      {
        articles: [MOCKED_ARTICLES[1]],
      } satisfies ArticleCardsProps,
      undefined
    );
  });
});
