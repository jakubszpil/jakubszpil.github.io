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

import {
  Banner,
  type BannerProps,
  EditResource,
  type EditResourceProps,
} from "@packages/shared";

import ArticleDetail, { loader } from "../article-detail";
import {
  ArticleCategories,
  type ArticleCategoriesProps,
} from "../../components/article-categories";
import type { Article } from "../../lib/article";
import { ArticleService } from "../../lib/article-service";

vi.mock("@packages/shared", async (importActual) => ({
  ...(await importActual()),
  Banner: vi.fn(),
  EditResource: vi.fn(),
}));
vi.mock("../../components/article-categories");

describe("<ArticleDetail />", () => {
  let MockedArticleCategories: MockInstance<typeof ArticleCategories>;
  let MockedEditResource: MockInstance<typeof EditResource>;
  let MockedBanner: MockInstance<typeof Banner>;

  let MockedArticle: Article;
  let MockedGetArticle: MockInstance<typeof ArticleService.findUnique>;

  beforeEach(() => {
    MockedArticleCategories = vi.mocked(ArticleCategories);
    MockedEditResource = vi.mocked(EditResource);
    MockedBanner = vi.mocked(Banner);

    MockedArticle = {
      slug: "test-example",
      content: "<p>Test content</p>",
      title: "Test title",
      description: "Test description",
      keywords: ["test", "example"],
      categories: ["test", "example"],
      createdAt: "2025-03-17",
      readingTime: "3 minuty",
    };

    MockedGetArticle = vi
      .spyOn(ArticleService, "findUnique")
      .mockImplementation(() => Promise.resolve(MockedArticle));
  });

  afterEach(() => {
    MockedArticleCategories.mockRestore();
    MockedEditResource.mockRestore();
    MockedBanner.mockRestore();
    MockedGetArticle.mockRestore();
  });

  test("should render component", async () => {
    const Stub = createRoutesStub([
      {
        path: "/blog/:slug",
        Component: ArticleDetail,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(
      <Stub
        initialEntries={[
          generatePath("/blog/:slug", { slug: MockedArticle.slug }),
        ]}
      />,
    );

    await screen.findByText(MockedArticle.title);

    expect(MockedGetArticle).toHaveBeenCalledWith(MockedArticle.slug);

    expect(MockedArticleCategories).toHaveBeenCalledWith(
      {
        categories: MockedArticle.categories,
      } satisfies ArticleCategoriesProps,
      undefined,
    );

    expect(MockedEditResource).toHaveBeenCalledWith(
      {
        slug: MockedArticle.slug,
        resourceType: "articles",
      } satisfies EditResourceProps,
      undefined,
    );

    expect(MockedBanner).toHaveBeenCalledWith(
      {
        createdAt: MockedArticle.createdAt,
        readingTime: MockedArticle.readingTime,
        className: "my-6",
      } satisfies BannerProps,
      undefined,
    );
  });
});
