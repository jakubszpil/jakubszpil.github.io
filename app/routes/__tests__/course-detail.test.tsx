import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { getCourse, type Course } from "../../lib/courses";
import {
  Categories,
  type CategoriesProps,
} from "../../components/ui/categories";
import {
  EditResource,
  type EditResourceProps,
} from "../../components/ui/edit-resource";
import { Banner, type BannerProps } from "../../components/ui/banner";
import CourseDetail, { loader } from "../course-detail";

vi.mock("../../components/ui/categories");
vi.mock("../../components/ui/edit-resource");
vi.mock("../../components/ui/banner");
vi.mock("../../lib/courses");

describe("<CourseDetail />", () => {
  const MockedCategories = vi.mocked(Categories);
  const MockedEditResource = vi.mocked(EditResource);
  const MockedBanner = vi.mocked(Banner);
  const MockedGetCourse = vi.mocked(getCourse);

  const MOCKED_COURSE: Course = {
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

  beforeEach(() => {
    MockedGetCourse.mockImplementation(() => Promise.resolve(MOCKED_COURSE));
  });

  afterEach(() => {
    MockedCategories.mockRestore();
    MockedEditResource.mockRestore();
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
          generatePath("/learning/:slug", { slug: MOCKED_COURSE.slug }),
        ]}
      />,
    );

    await screen.findByText(MOCKED_COURSE.title);

    expect(MockedGetCourse).toHaveBeenCalledWith(MOCKED_COURSE.slug);

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_COURSE.categories,
        baseUrl: "/learning",
        categoryPrefixUrl: "/learning/kategorie",
      } satisfies CategoriesProps,
      undefined,
    );

    expect(MockedEditResource).toHaveBeenCalledWith(
      {
        slug: MOCKED_COURSE.slug,
        resourceType: "courses",
      } satisfies EditResourceProps,
      undefined,
    );

    expect(MockedBanner).toHaveBeenCalledWith(
      {
        createdAt: MOCKED_COURSE.createdAt,
        readingTime: MOCKED_COURSE.readingTime,
        className: "my-6",
      } satisfies BannerProps,
      undefined,
    );
  });
});
