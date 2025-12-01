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

import Banner, { type BannerProps } from "../../../../components/banner";
import EditResource, {
  type EditResourceProps,
} from "../../../../components/edit-resource";
import Seo, { type SeoProps } from "../../../../components/seo";
import ArticleDetail, { loader } from "../article-detail";
import type { Article } from "../../data-access/article";
import { ArticleService } from "../../data-access/article-service";
import {
  ArticleCategories,
  type ArticleCategoriesProps,
} from "../../ui/article-categories";

vi.mock("../../../../components/edit-resource");
vi.mock("../../../../components/seo");
vi.mock("../../../../components/banner");
vi.mock("../../ui/article-categories");

describe("<ArticleDetail />", () => {
  let MockedArticleCategories: MockInstance<typeof ArticleCategories>;
  let MockedEditResource: MockInstance<typeof EditResource>;
  let MockedSeo: MockInstance<typeof Seo>;
  let MockedBanner: MockInstance<typeof Banner>;

  let MockedArticle: Article;
  let MockedGetArticle: MockInstance<typeof ArticleService.findUnique>;

  beforeEach(() => {
    MockedArticleCategories = vi.mocked(ArticleCategories);
    MockedEditResource = vi.mocked(EditResource);
    MockedSeo = vi.mocked(Seo);
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
    MockedSeo.mockRestore();
    MockedBanner.mockRestore();
    MockedGetArticle.mockRestore();
  });

  test("should render component", async () => {
    const Stub = createRoutesStub([
      {
        path: "/blog/:slug",
        Component: ArticleDetail,
        loader,
      },
    ]);

    render(
      <Stub
        initialEntries={[
          generatePath("/blog/:slug", { slug: MockedArticle.slug }),
        ]}
      />
    );

    await screen.findByText(MockedArticle.title);

    expect(MockedGetArticle).toHaveBeenCalledWith(MockedArticle.slug);

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: MockedArticle.title,
        description: MockedArticle.description,
        keywords: MockedArticle.keywords,
        publishedTime: MockedArticle.createdAt,
        type: "article",
      } satisfies SeoProps,
      undefined
    );

    expect(MockedArticleCategories).toHaveBeenCalledWith(
      {
        categories: MockedArticle.categories,
      } satisfies ArticleCategoriesProps,
      undefined
    );

    expect(MockedEditResource).toHaveBeenCalledWith(
      {
        slug: MockedArticle.slug,
        resourceType: "articles",
      } satisfies EditResourceProps,
      undefined
    );

    expect(MockedBanner).toHaveBeenCalledWith(
      {
        createdAt: MockedArticle.createdAt,
        readingTime: MockedArticle.readingTime,
        className: "my-6",
      } satisfies BannerProps,
      undefined
    );
  });
});
