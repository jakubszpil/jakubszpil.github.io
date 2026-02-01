import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import ArticleDetail, { loader } from "../article-detail";
import {
  ArticleCategories,
  type ArticleCategoriesProps,
} from "../../components/article-categories";
import { type Article, getArticle } from "../../lib/articles";
import {
  EditResource,
  type EditResourceProps,
} from "../../components/ui/edit-resource";
import { Banner, type BannerProps } from "../../components/ui/banner";

vi.mock("../../components/ui/edit-resource");
vi.mock("../../components/ui/banner");
vi.mock("../../components/article-categories");
vi.mock("../../lib/articles");

describe("<ArticleDetail />", () => {
  const MockedArticleCategories = vi.mocked(ArticleCategories);
  const MockedEditResource = vi.mocked(EditResource);
  const MockedBanner = vi.mocked(Banner);
  const MockedGetArticle = vi.mocked(getArticle);

  const MOCKED_ARTICLE: Article = {
    slug: "test-example",
    content: "<p>Test content</p>",
    title: "Test title",
    description: "Test description",
    keywords: ["test", "example"],
    categories: ["test", "example"],
    createdAt: "2025-03-17",
    readingTime: "3 minuty",
  };

  beforeEach(() => {
    MockedGetArticle.mockImplementation(() => Promise.resolve(MOCKED_ARTICLE));
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
          generatePath("/blog/:slug", { slug: MOCKED_ARTICLE.slug }),
        ]}
      />,
    );

    await screen.findByText(MOCKED_ARTICLE.title);

    expect(MockedGetArticle).toHaveBeenCalledWith(MOCKED_ARTICLE.slug);

    expect(MockedArticleCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_ARTICLE.categories,
      } satisfies ArticleCategoriesProps,
      undefined,
    );

    expect(MockedEditResource).toHaveBeenCalledWith(
      {
        slug: MOCKED_ARTICLE.slug,
        resourceType: "articles",
      } satisfies EditResourceProps,
      undefined,
    );

    expect(MockedBanner).toHaveBeenCalledWith(
      {
        createdAt: MOCKED_ARTICLE.createdAt,
        readingTime: MOCKED_ARTICLE.readingTime,
        className: "my-6",
      } satisfies BannerProps,
      undefined,
    );
  });
});
