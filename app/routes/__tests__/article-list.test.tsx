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

import Categories, { type CategoriesProps } from "../../components/categories";
import Posts, { type PostsProps } from "../../components/posts";
import Seo, { type SeoProps } from "../../components/seo";
import { ArticleService, type Article } from "../../lib/articles";
import ArticleList, { loader } from "../article-list";

vi.mock("../../components/posts");
vi.mock("../../components/categories");
vi.mock("../../components/seo");

describe("<ArticleList />", () => {
  let MockedPosts: MockInstance<typeof Posts>;
  let MockedCategories: MockInstance<typeof Categories>;
  let MockedSeo: MockInstance<typeof Seo>;

  let MOCKED_ARTICLES: Article[];
  let MOCKED_CATEGORIES: string[];

  let MockedGetArticleByCategory: MockInstance<
    typeof ArticleService.findAllByCategory
  >;
  let MockedGetArticlesCategories: MockInstance<
    typeof ArticleService.getCategories
  >;

  beforeEach(() => {
    MockedPosts = vi.mocked(Posts);
    MockedCategories = vi.mocked(Categories);
    MockedSeo = vi.mocked(Seo);

    MOCKED_ARTICLES = [
      {
        slug: "test-example-1",
        content: "<p>Test content 1</p>",
        title: "Test title 1",
        description: "Test description 1",
        keywords: ["test", "example"],
        categories: ["test"],
        createdAt: "2025-03-17",
        readingTime: "3 minuty",
      },
      {
        slug: "test-example-2",
        content: "<p>Test content 2</p>",
        title: "Test title 2",
        description: "Test description 2",
        keywords: ["example"],
        categories: ["test", "example"],
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
    MockedPosts.mockRestore();
    MockedCategories.mockRestore();
    MockedSeo.mockRestore();
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

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
        baseUrl: "/blog",
        categoryPrefixUrl: "/blog/kategorie",
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedPosts).toHaveBeenCalledWith(
      {
        posts: MOCKED_ARTICLES,
        pathPrefix: "/blog",
      } satisfies PostsProps,
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

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
        baseUrl: "/blog",
        categoryPrefixUrl: "/blog/kategorie",
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedPosts).toHaveBeenCalledWith(
      {
        posts: [MOCKED_ARTICLES[1]],
        pathPrefix: "/blog",
      } satisfies PostsProps,
      undefined
    );
  });
});
