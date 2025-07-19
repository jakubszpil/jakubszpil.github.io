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

import Courses, { type CoursesProps } from "~/components/learning/courses";
import Categories, {
  type CategoriesProps,
} from "~/components/learning/categories";
import { Seo, type SeoProps } from "~/components/ui/seo";
import {
  getCourses,
  getCoursesByCategory,
  getCoursesCategories,
  type Course,
} from "~/lib/courses";

import CourseList, { loader } from "../course-list";

vi.mock("~/components/learning/courses");
vi.mock("~/components/learning/categories");
vi.mock("~/components/ui/seo");
vi.mock("~/lib/courses");

describe("<CourseList />", () => {
  let MockedCourses: MockInstance;
  let MockedCategories: MockInstance;
  let MockedSeo: MockInstance;

  let MOCKED_ARTICLES: Course[];
  let MOCKED_CATEGORIES: string[];

  let MockedGetCourses: MockInstance;
  let MockedGetCourseByCategory: MockInstance;
  let MockedGetCoursesCategories: MockInstance;

  beforeEach(() => {
    MockedCourses = vi.mocked(Courses);
    MockedCategories = vi.mocked(Categories);
    MockedSeo = vi.mocked(Seo);

    MOCKED_ARTICLES = [
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

    MockedGetCourses = vi
      .mocked(getCourses)
      .mockImplementation(() => Promise.resolve(MOCKED_ARTICLES));

    MockedGetCourseByCategory = vi
      .mocked(getCoursesByCategory)
      .mockImplementation(() => Promise.resolve([MOCKED_ARTICLES[1]]));

    MockedGetCoursesCategories = vi
      .mocked(getCoursesCategories)
      .mockImplementation(() => Promise.resolve(MOCKED_CATEGORIES));
  });

  afterEach(() => {
    MockedCourses.mockRestore();
    MockedCategories.mockRestore();
    MockedSeo.mockRestore();
    MockedGetCourses.mockRestore();
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

    expect(MockedGetCourses).toHaveBeenCalled();
    expect(MockedGetCourseByCategory).not.toHaveBeenCalled();
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
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedCourses).toHaveBeenCalledWith(
      {
        courses: MOCKED_ARTICLES,
      } satisfies CoursesProps,
      undefined
    );
  });

  test("should courses with category", async () => {
    const MOCKED_CATEGORY = "example";

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

    expect(MockedGetCourses).not.toHaveBeenCalled();
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
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedCourses).toHaveBeenCalledWith(
      {
        courses: [MOCKED_ARTICLES[1]],
      } satisfies CoursesProps,
      undefined
    );
  });
});
