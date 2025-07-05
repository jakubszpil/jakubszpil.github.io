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

import Categories, {
  type CategoriesProps,
} from "~/components/learning/categories";
import { Banner, type BannerProps } from "~/components/ui/banner";
import {
  EditResource,
  type EditResourceProps,
} from "~/components/ui/edit-resource";
import { Seo, type SeoProps } from "~/components/ui/seo";
import { getCourse, type Course } from "~/lib/courses";

import CourseDetails, { loader } from "../course-details";

vi.mock("~/components/learning/categories");
vi.mock("~/components/ui/edit-resource");
vi.mock("~/components/ui/banner");
vi.mock("~/components/ui/seo");
vi.mock("~/lib/courses");

describe("<CourseDetails />", () => {
  let MockedCategories: MockInstance;
  let MockedEditResource: MockInstance;
  let MockedSeo: MockInstance;
  let MockedBanner: MockInstance;

  let MockedCourse: Course;
  let MockedGetCourse: MockInstance;

  beforeEach(() => {
    MockedCategories = vi.mocked(Categories);
    MockedEditResource = vi.mocked(EditResource);
    MockedSeo = vi.mocked(Seo);
    MockedBanner = vi.mocked(Banner);

    MockedCourse = {
      id: "123",
      slug: "test-example",
      content: "<p>Test content</p>",
      title: "Test title",
      description: "Test description",
      keywords: ["test", "example"],
      categories: ["test", "example"],
      resourceUrl: "https://example.com",
      createdAt: new Date("2025-03-17"),
      readingTime: "3 minuty",
    };

    MockedGetCourse = vi
      .mocked(getCourse)
      .mockImplementation(() => Promise.resolve(MockedCourse));
  });

  afterEach(() => {
    MockedCategories.mockRestore();
    MockedEditResource.mockRestore();
    MockedSeo.mockRestore();
    MockedBanner.mockRestore();
    MockedGetCourse.mockRestore();
  });

  test("should render component", async () => {
    const Stub = createRoutesStub([
      {
        path: "/learning/:slug",
        Component: CourseDetails,
        loader,
      },
    ]);

    render(
      <Stub
        initialEntries={[
          generatePath("/learning/:slug", { slug: MockedCourse.slug }),
        ]}
      />
    );

    await screen.findByText(MockedCourse.title);

    expect(MockedGetCourse).toHaveBeenCalledWith(MockedCourse.slug);

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: MockedCourse.title,
        description: MockedCourse.description,
        keywords: MockedCourse.keywords,
        publishedTime: MockedCourse.createdAt,
        type: "article",
      } satisfies SeoProps,
      undefined
    );

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MockedCourse.categories,
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedEditResource).toHaveBeenCalledWith(
      {
        resourceUrl: MockedCourse.resourceUrl,
      } satisfies EditResourceProps,
      undefined
    );

    expect(MockedBanner).toHaveBeenCalledWith(
      {
        createdAt: MockedCourse.createdAt,
        readingTime: MockedCourse.readingTime,
        className: "my-6",
      } satisfies BannerProps,
      undefined
    );
  });
});
