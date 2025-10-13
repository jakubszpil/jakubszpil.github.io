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

import Categories, { type CategoriesProps } from "~/components/categories";
import { Banner, type BannerProps } from "~/components/ui/banner";
import EditResource, {
  type EditResourceProps,
} from "~/components/edit-resource";
import Seo, { type SeoProps } from "~/components/seo";
import { ArticleService, type Article } from "~/lib/articles";

import ArticleDetails, { loader } from "../article-details";

vi.mock("~/components/categories");
vi.mock("~/components/edit-resource");
vi.mock("~/components/seo");
vi.mock("~/components/ui/banner");

describe("<ArticleDetails />", () => {
  let MockedCategories: MockInstance<typeof Categories>;
  let MockedEditResource: MockInstance<typeof EditResource>;
  let MockedSeo: MockInstance<typeof Seo>;
  let MockedBanner: MockInstance<typeof Banner>;

  let MockedArticle: Article;
  let MockedGetArticle: MockInstance<typeof ArticleService.findUnique>;

  beforeEach(() => {
    MockedCategories = vi.mocked(Categories);
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
    MockedCategories.mockRestore();
    MockedEditResource.mockRestore();
    MockedSeo.mockRestore();
    MockedBanner.mockRestore();
    MockedGetArticle.mockRestore();
  });

  test("should render component", async () => {
    const Stub = createRoutesStub([
      {
        path: "/blog/:slug",
        Component: ArticleDetails,
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

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MockedArticle.categories,
        baseUrl: "/blog",
        categoryPrefixUrl: "/blog/kategorie",
      } satisfies CategoriesProps,
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
