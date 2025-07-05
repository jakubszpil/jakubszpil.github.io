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

import Articles, { type ArticlesProps } from "~/components/blog/articles";
import Categories, { type CategoriesProps } from "~/components/blog/categories";
import { Seo, type SeoProps } from "~/components/ui/seo";
import {
  getArticles,
  getArticlesByCategory,
  getArticlesCategories,
  type Article,
} from "~/lib/articles";

import ArticleList, { loader } from "../article-list";

vi.mock("~/components/blog/articles");
vi.mock("~/components/blog/categories");
vi.mock("~/components/ui/seo");
vi.mock("~/lib/articles");

describe("<ArticleList />", () => {
  let MockedArticles: MockInstance;
  let MockedCategories: MockInstance;
  let MockedSeo: MockInstance;

  let MOCKED_ARTICLES: Article[];
  let MOCKED_CATEGORIES: string[];

  let MockedGetArticles: MockInstance;
  let MockedGetArticleByCategory: MockInstance;
  let MockedGetArticlesCategories: MockInstance;

  beforeEach(() => {
    MockedArticles = vi.mocked(Articles);
    MockedCategories = vi.mocked(Categories);
    MockedSeo = vi.mocked(Seo);

    MOCKED_ARTICLES = [
      {
        id: "1",
        slug: "test-example-1",
        content: "<p>Test content 1</p>",
        title: "Test title 1",
        description: "Test description 1",
        keywords: ["test", "example"],
        categories: ["test"],
        createdAt: new Date("2025-03-17"),
        resourceUrl: "https://example.com",
        readingTime: "3 minuty",
      },
      {
        id: "2",
        slug: "test-example-2",
        content: "<p>Test content 2</p>",
        title: "Test title 2",
        description: "Test description 2",
        keywords: ["example"],
        categories: ["test", "example"],
        createdAt: new Date("2025-03-17"),
        resourceUrl: "https://example.com",
        readingTime: "3 minuty",
      },
    ];

    MOCKED_CATEGORIES = ["test", "example"];

    MockedGetArticles = vi
      .mocked(getArticles)
      .mockImplementation(() => Promise.resolve(MOCKED_ARTICLES));

    MockedGetArticleByCategory = vi
      .mocked(getArticlesByCategory)
      .mockImplementation(() => Promise.resolve([MOCKED_ARTICLES[1]]));

    MockedGetArticlesCategories = vi
      .mocked(getArticlesCategories)
      .mockImplementation(() => Promise.resolve(MOCKED_CATEGORIES));
  });

  afterEach(() => {
    MockedArticles.mockRestore();
    MockedCategories.mockRestore();
    MockedSeo.mockRestore();
    MockedGetArticles.mockRestore();
    MockedGetArticleByCategory.mockRestore();
  });

  test("should articles without category", async () => {
    const Stub = createRoutesStub([
      {
        path: "/blog",
        Component: ArticleList,
        loader,
      },
    ]);

    render(<Stub initialEntries={[generatePath("/blog")]} />);

    await screen.findByText("Artykuły");

    expect(MockedGetArticles).toHaveBeenCalled();
    expect(MockedGetArticleByCategory).not.toHaveBeenCalled();
    expect(MockedGetArticlesCategories).toHaveBeenCalled();

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: "Artykuły",
        description:
          "Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych.",
      } satisfies SeoProps,
      undefined
    );

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedArticles).toHaveBeenCalledWith(
      {
        articles: MOCKED_ARTICLES,
      } satisfies ArticlesProps,
      undefined
    );
  });

  test("should articles with category", async () => {
    const MOCKED_CATEGORY = "example";

    const Stub = createRoutesStub([
      {
        path: "/blog/kategorie/:category",
        Component: ArticleList,
        loader,
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

    expect(MockedGetArticles).not.toHaveBeenCalled();
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

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedArticles).toHaveBeenCalledWith(
      {
        articles: [MOCKED_ARTICLES[1]],
      } satisfies ArticlesProps,
      undefined
    );
  });
});
