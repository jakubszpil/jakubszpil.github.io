import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import ArticleDetail, { loader } from "../article-detail";
import {
  BreadcrumbWithCategory,
  type BreadcrumbWithCategoryProps,
} from "../../../shared/ui/breadcrumb-with-category";
import { getArticle } from "../../data-access/articles";
import {
  TableOfContents,
  type TableOfContentsProps,
} from "../../../shared/ui/table-of-contents";
import { Banner, type BannerProps } from "../../../shared/ui/banner";
import { MOCKED_ARTICLE } from "../../test-fixtures";

vi.mock("../../../shared/ui/table-of-contents");
vi.mock("../../../shared/ui/banner");
vi.mock("../../../shared/ui/breadcrumb-with-category");
vi.mock("../../data-access/articles");

describe("<ArticleDetail />", () => {
  const MockedBreadcrumbWithCategory = vi.mocked(BreadcrumbWithCategory);
  const MockedTableOfContents = vi.mocked(TableOfContents);
  const MockedBanner = vi.mocked(Banner);
  const MockedGetArticle = vi.mocked(getArticle);

  beforeEach(() => {
    MockedGetArticle.mockImplementation(() => Promise.resolve(MOCKED_ARTICLE));
  });

  afterEach(() => {
    MockedBreadcrumbWithCategory.mockRestore();
    MockedTableOfContents.mockRestore();
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

    expect(MockedTableOfContents).toHaveBeenCalledWith(
      {
        ref: expect.any(Object),
        additionalActions: expect.any(Object),
      } satisfies TableOfContentsProps,
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
