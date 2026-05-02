import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { getCourse } from "../../data-access/courses";
import {
  BreadcrumbWithCategory,
  type BreadcrumbWithCategoryProps,
} from "../../../shared/ui/breadcrumb-with-category";
import {
  TableOfContents,
  type TableOfContentsProps,
} from "../../../shared/ui/table-of-contents";
import { Banner, type BannerProps } from "../../../shared/ui/banner";
import CourseDetail, { loader } from "../course-detail";
import { MOCKED_COURSE } from "../../test-fixtures";

vi.mock("../../../shared/ui/banner");
vi.mock("../../../shared/ui/table-of-contents");
vi.mock("../../../shared/ui/breadcrumb-with-category");
vi.mock("../../data-access/courses");

describe("<CourseDetail />", () => {
  const MockedBreadcrumbWithCategory = vi.mocked(BreadcrumbWithCategory);
  const MockedTableOfContents = vi.mocked(TableOfContents);
  const MockedBanner = vi.mocked(Banner);
  const MockedGetCourse = vi.mocked(getCourse);

  beforeEach(() => {
    MockedGetCourse.mockImplementation(() => Promise.resolve(MOCKED_COURSE));
  });

  afterEach(() => {
    MockedBreadcrumbWithCategory.mockRestore();
    MockedTableOfContents.mockRestore();
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

    expect(MockedBreadcrumbWithCategory).toHaveBeenCalledWith(
      {
        category: MOCKED_COURSE.category,
        baseUrl: "/learning",
        baseLabel: "Learning",
        categoryPrefixUrl: "/learning/kategorie",
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
        createdAt: MOCKED_COURSE.createdAt,
        readingTime: MOCKED_COURSE.readingTime,
        className: "my-6",
      } satisfies BannerProps,
      undefined,
    );
  });
});
