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

import Categories, { type CategoriesProps } from "~/components/blog/categories";
import { Banner, type BannerProps } from "~/components/ui/banner";
import {
  EditResource,
  type EditResourceProps,
} from "~/components/ui/edit-resource";
import { Seo, type SeoProps } from "~/components/ui/seo";
import { getArticle, type Article } from "~/lib/articles";

import ArticleDetails, { loader } from "../article-details";

vi.mock("~/components/blog/categories");
vi.mock("~/components/ui/edit-resource");
vi.mock("~/components/ui/banner");
vi.mock("~/components/ui/seo");
vi.mock("~/lib/articles");

describe("<ArticleDetails />", () => {
  let MockedCategories: MockInstance;
  let MockedEditResource: MockInstance;
  let MockedSeo: MockInstance;
  let MockedBanner: MockInstance;

  let MockedArticle: Article;
  let MockedGetArticle: MockInstance;

  beforeEach(() => {
    MockedCategories = vi.mocked(Categories);
    MockedEditResource = vi.mocked(EditResource);
    MockedSeo = vi.mocked(Seo);
    MockedBanner = vi.mocked(Banner);

    MockedArticle = {
      id: "123",
      slug: "test-example",
      content: "<p>Test content</p>",
      title: "Test title",
      description: "Test description",
      keywords: ["test", "example"],
      categories: ["test", "example"],
      createdAt: new Date("2025-03-17"),
      resourceUrl: "https://example.com",
      readingTime: "3 minuty",
    };

    MockedGetArticle = vi
      .mocked(getArticle)
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
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedEditResource).toHaveBeenCalledWith(
      {
        resourceUrl: MockedArticle.resourceUrl,
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
