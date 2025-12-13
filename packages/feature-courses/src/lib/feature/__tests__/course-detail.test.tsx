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
  Categories,
  type CategoriesProps,
  Banner,
  type BannerProps,
  EditResource,
  type EditResourceProps,
  Seo,
  type SeoProps,
} from "@packages/shared";

import CourseDetail, { loader } from "../course-detail";
import type { Course } from "../../data-access/course";
import { CourseService } from "../../data-access/course-service";

vi.mock("@packages/shared", async (importActual) => ({
  ...(await importActual()),
  Categories: vi.fn(),
  Banner: vi.fn(),
  EditResource: vi.fn(),
  Seo: vi.fn(),
}));

describe("<CourseDetail />", () => {
  let MockedCategories: MockInstance<typeof Categories>;
  let MockedEditResource: MockInstance<typeof EditResource>;
  let MockedSeo: MockInstance<typeof Seo>;
  let MockedBanner: MockInstance<typeof Banner>;

  let MockedCourse: Course;
  let MockedGetCourse: MockInstance<typeof CourseService.findUnique>;

  beforeEach(() => {
    MockedCategories = vi.mocked(Categories);
    MockedEditResource = vi.mocked(EditResource);
    MockedSeo = vi.mocked(Seo);
    MockedBanner = vi.mocked(Banner);

    MockedCourse = {
      slug: "test-example",
      content: "<p>Test content</p>",
      title: "Test title",
      description: "Test description",
      keywords: ["test", "example"],
      categories: ["test", "example"],
      createdAt: "2025-03-17",
      readingTime: "3 minuty",
      quiz: {
        questions: [],
        title: "Example Quiz",
      },
    };

    MockedGetCourse = vi
      .spyOn(CourseService, "findUnique")
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
        Component: CourseDetail,
        loader,
        HydrateFallback: () => <div></div>,
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
        baseUrl: "/learning",
        categoryPrefixUrl: "/learning/kategorie",
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedEditResource).toHaveBeenCalledWith(
      {
        slug: MockedCourse.slug,
        resourceType: "courses",
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
