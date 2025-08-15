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

import Courses, { type CoursesProps } from "~/components/courses";
import Categories, { type CategoriesProps } from "~/components/categories";
import { Seo, type SeoProps } from "~/components/ui/seo";
import {
  getCoursesByCategory,
  getCoursesCategories,
  type Course,
} from "~/lib/courses";

import CourseList, { loader } from "../course-list";

vi.mock("~/components/courses");
vi.mock("~/components/categories");
vi.mock("~/components/ui/seo");
vi.mock("~/lib/courses");

describe("<CourseList />", () => {
  let MockedCourses: MockInstance;
  let MockedCategories: MockInstance;
  let MockedSeo: MockInstance;

  let MOCKED_COURSES: Course[];
  let MOCKED_CATEGORIES: string[];

  let MockedGetCourseByCategory: MockInstance;
  let MockedGetCoursesCategories: MockInstance;

  beforeEach(() => {
    MockedCourses = vi.mocked(Courses);
    MockedCategories = vi.mocked(Categories);
    MockedSeo = vi.mocked(Seo);

    MOCKED_COURSES = [
      {
        id: "1",
        slug: "test-example-1",
        content: "<p>Test content 1</p>",
        title: "Test title 1",
        description: "Test description 1",
        keywords: ["test", "example"],
        categories: ["test"],
        createdAt: "2025-03-17",
        readingTime: "3 minuty",
        resourceUrl: "https://example.com",
      },
      {
        id: "2",
        slug: "test-example-2",
        content: "<p>Test content 2</p>",
        title: "Test title 2",
        description: "Test description 2",
        keywords: ["example"],
        categories: ["test", "example"],
        createdAt: "2025-03-17",
        readingTime: "3 minuty",
        resourceUrl: "https://example.com",
      },
    ];

    MOCKED_CATEGORIES = ["test", "example"];

    MockedGetCourseByCategory = vi
      .mocked(getCoursesByCategory)
      .mockImplementation(() => Promise.resolve(MOCKED_COURSES));

    MockedGetCoursesCategories = vi
      .mocked(getCoursesCategories)
      .mockImplementation(() => Promise.resolve(MOCKED_CATEGORIES));
  });

  afterEach(() => {
    MockedCourses.mockRestore();
    MockedCategories.mockRestore();
    MockedSeo.mockRestore();
    MockedGetCourseByCategory.mockRestore();
  });

  test("should courses without category", async () => {
    const Stub = createRoutesStub([
      {
        path: "/learning",
        Component: CourseList,
        loader,
      },
    ]);

    render(<Stub initialEntries={[generatePath("/learning")]} />);

    await screen.findByText("Learning");

    expect(MockedGetCourseByCategory).toHaveBeenCalledWith(undefined);
    expect(MockedGetCoursesCategories).toHaveBeenCalled();

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: "Learning",
        description:
          "Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe.",
      } satisfies SeoProps,
      undefined
    );

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
        baseUrl: "/learning",
        categoryPrefixUrl: "/learning/kategorie",
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedCourses).toHaveBeenCalledWith(
      {
        courses: MOCKED_COURSES,
      } satisfies CoursesProps,
      undefined
    );
  });

  test("should courses with category", async () => {
    const MOCKED_CATEGORY = "example";

    MockedGetCourseByCategory.mockImplementationOnce(() =>
      Promise.resolve([MOCKED_COURSES[1]])
    );

    const Stub = createRoutesStub([
      {
        path: "/learning/kategorie/:category",
        Component: CourseList,
        loader,
      },
    ]);

    render(
      <Stub
        initialEntries={[
          generatePath("/learning/kategorie/:category", {
            category: MOCKED_CATEGORY,
          }),
        ]}
      />
    );

    await screen.findByText("Example");

    expect(MockedGetCourseByCategory).toHaveBeenCalledWith(MOCKED_CATEGORY);
    expect(MockedGetCoursesCategories).toHaveBeenCalled();

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: "Learning / Example",
        description:
          "Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe.",
      } satisfies SeoProps,
      undefined
    );

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
        baseUrl: "/learning",
        categoryPrefixUrl: "/learning/kategorie",
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedCourses).toHaveBeenCalledWith(
      {
        courses: [MOCKED_COURSES[1]],
      } satisfies CoursesProps,
      undefined
    );
  });
});
