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

import { Seo, type SeoProps } from "../../../../shared/ui/seo";
import CourseList, { loader } from "../course-list";
import type { Course } from "../../data-access/course";
import { CourseService } from "../../data-access/course-service";
import { CourseCards, type CourseCardsProps } from "../../ui/course-cards";
import {
  CourseCategories,
  type CourseCategoriesProps,
} from "../../ui/course-categories";

vi.mock("../../ui/course-cards");
vi.mock("../../ui/course-categories");
vi.mock("../../../../shared/ui/seo");

describe("<CourseList />", () => {
  let MockedCourseCards: MockInstance<typeof CourseCards>;
  let MockedCourseCategories: MockInstance<typeof CourseCategories>;
  let MockedSeo: MockInstance<typeof Seo>;

  let MOCKED_COURSES: Course[];
  let MOCKED_CATEGORIES: string[];

  let MockedGetCourseByCategory: MockInstance<
    typeof CourseService.findAllByCategory
  >;
  let MockedGetCoursesCategories: MockInstance<
    typeof CourseService.getCategories
  >;

  beforeEach(() => {
    MockedCourseCards = vi.mocked(CourseCards);
    MockedCourseCategories = vi.mocked(CourseCategories);
    MockedSeo = vi.mocked(Seo);

    MOCKED_COURSES = [
      {
        slug: "test-example-1",
        content: "<p>Test content 1</p>",
        title: "Test title 1",
        description: "Test description 1",
        keywords: ["test", "example"],
        categories: ["test"],
        createdAt: "2025-03-17",
        readingTime: "3 minuty",
        quiz: {
          questions: [],
          title: "Example Quiz",
        },
      },
      {
        slug: "test-example-2",
        content: "<p>Test content 2</p>",
        title: "Test title 2",
        description: "Test description 2",
        keywords: ["example"],
        categories: ["test", "example"],
        createdAt: "2025-03-17",
        readingTime: "3 minuty",
        quiz: {
          questions: [],
          title: "Example Quiz",
        },
      },
    ];

    MOCKED_CATEGORIES = ["test", "example"];

    MockedGetCourseByCategory = vi
      .spyOn(CourseService, "findAllByCategory")
      .mockImplementation(() => Promise.resolve(MOCKED_COURSES));

    MockedGetCoursesCategories = vi
      .spyOn(CourseService, "getCategories")
      .mockImplementation(() => Promise.resolve(MOCKED_CATEGORIES));
  });

  afterEach(() => {
    MockedCourseCards.mockRestore();
    MockedCourseCategories.mockRestore();
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

    expect(MockedCourseCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
      } satisfies CourseCategoriesProps,
      undefined
    );

    expect(MockedCourseCards).toHaveBeenCalledWith(
      {
        courses: MOCKED_COURSES,
      } satisfies CourseCardsProps,
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

    expect(MockedCourseCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_CATEGORIES,
        showAllCategory: true,
      } satisfies CourseCategoriesProps,
      undefined
    );

    expect(MockedCourseCards).toHaveBeenCalledWith(
      {
        courses: [MOCKED_COURSES[1]],
      } satisfies CourseCardsProps,
      undefined
    );
  });
});
