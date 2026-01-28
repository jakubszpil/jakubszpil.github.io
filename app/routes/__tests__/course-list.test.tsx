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

import CourseList, { loader } from "../course-list";
import {
  type CourseFeed,
  getCoursesByCategory,
  getCourseCategories,
} from "../../lib/courses";
import {
  CourseCards,
  type CourseCardsProps,
} from "../../components/course-cards";
import {
  CourseCategories,
  type CourseCategoriesProps,
} from "../../components/course-categories";

vi.mock("../../components/course-cards");
vi.mock("../../components/course-categories");
vi.mock("../../lib/courses");

describe("<CourseList />", () => {
  let MockedCourseCards: MockInstance<typeof CourseCards>;
  let MockedCourseCategories: MockInstance<typeof CourseCategories>;

  let MOCKED_COURSES: CourseFeed[];
  let MOCKED_CATEGORIES: string[];

  let MockedGetCourseByCategory: MockInstance<typeof getCoursesByCategory>;
  let MockedGetCoursesCategories: MockInstance<typeof getCourseCategories>;

  beforeEach(() => {
    MockedCourseCards = vi.mocked(CourseCards);
    MockedCourseCategories = vi.mocked(CourseCategories);

    MOCKED_COURSES = [
      {
        slug: "test-example-1",
        title: "Test title 1",
        description: "Test description 1",
        createdAt: "2025-03-17",
        readingTime: "3 minuty",
      },
      {
        slug: "test-example-2",
        title: "Test title 2",
        description: "Test description 2",
        createdAt: "2025-03-17",
        readingTime: "3 minuty",
      },
    ];

    MOCKED_CATEGORIES = ["test", "example"];

    MockedGetCourseByCategory = vi
      .mocked(getCoursesByCategory)
      .mockImplementation(() => Promise.resolve(MOCKED_COURSES));

    MockedGetCoursesCategories = vi
      .mocked(getCourseCategories)
      .mockImplementation(() => Promise.resolve(MOCKED_CATEGORIES));
  });

  afterEach(() => {
    MockedCourseCards.mockRestore();
    MockedCourseCategories.mockRestore();
    MockedGetCourseByCategory.mockRestore();
  });

  test("should courses without category", async () => {
    const Stub = createRoutesStub([
      {
        path: "/learning",
        Component: CourseList,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(<Stub initialEntries={[generatePath("/learning")]} />);

    await screen.findByText("Learning");

    expect(MockedGetCourseByCategory).toHaveBeenCalledWith(undefined);
    expect(MockedGetCoursesCategories).toHaveBeenCalled();

    expect(MockedCourseCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
      } satisfies CourseCategoriesProps,
      undefined,
    );

    expect(MockedCourseCards).toHaveBeenCalledWith(
      {
        courses: MOCKED_COURSES,
      } satisfies CourseCardsProps,
      undefined,
    );
  });

  test("should courses with category", async () => {
    const MOCKED_CATEGORY = "example";

    MockedGetCourseByCategory.mockImplementationOnce(() =>
      Promise.resolve([MOCKED_COURSES[1]]),
    );

    const Stub = createRoutesStub([
      {
        path: "/learning/kategorie/:category",
        Component: CourseList,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(
      <Stub
        initialEntries={[
          generatePath("/learning/kategorie/:category", {
            category: MOCKED_CATEGORY,
          }),
        ]}
      />,
    );

    await screen.findByText("Example");

    expect(MockedGetCourseByCategory).toHaveBeenCalledWith(MOCKED_CATEGORY);
    expect(MockedGetCoursesCategories).toHaveBeenCalled();

    expect(MockedCourseCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
      } satisfies CourseCategoriesProps,
      undefined,
    );

    expect(MockedCourseCards).toHaveBeenCalledWith(
      {
        courses: [MOCKED_COURSES[1]],
      } satisfies CourseCardsProps,
      undefined,
    );
  });
});
