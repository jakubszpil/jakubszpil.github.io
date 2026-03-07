import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import ArticleDetail, { loader } from "../article-detail";
import {
  BreadcrumbWithCategory,
  type BreadcrumbWithCategoryProps,
} from "~/components/breadcrumb-with-category";
import { type Article, getArticle } from "~/lib/articles";
import {
  EditResource,
  type EditResourceProps,
} from "~/components/edit-resource";
import { Banner, type BannerProps } from "~/components/banner";

vi.mock("~/components/edit-resource");
vi.mock("~/components/banner");
vi.mock("~/components/breadcrumb-with-category");
vi.mock("~/lib/articles");

describe("<ArticleDetail />", () => {
  const MockedBreadcrumbWithCategory = vi.mocked(BreadcrumbWithCategory);
  const MockedEditResource = vi.mocked(EditResource);
  const MockedBanner = vi.mocked(Banner);
  const MockedGetArticle = vi.mocked(getArticle);

  const MOCKED_ARTICLE: Article = {
    slug: "test-example",
    content: "<p>Test content</p>",
    title: "Test title",
    description: "Test description",
    keywords: ["test", "example"],
    category: "test",
    createdAt: "2025-03-17",
    readingTime: "3 minuty",
  };

  beforeEach(() => {
    MockedGetArticle.mockImplementation(() => Promise.resolve(MOCKED_ARTICLE));
  });

  afterEach(() => {
    MockedBreadcrumbWithCategory.mockRestore();
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

    expect(MockedBreadcrumbWithCategory).toHaveBeenCalledWith(
      {
        category: MOCKED_ARTICLE.category,
        baseLabel: "Artykuły",
        baseUrl: "/blog",
        categoryPrefixUrl: "/blog/kategorie",
      } satisfies BreadcrumbWithCategoryProps,
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
