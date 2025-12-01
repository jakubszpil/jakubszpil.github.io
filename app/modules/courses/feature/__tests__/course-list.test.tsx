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
} from "../../../../components/categories";
import Posts, { type PostsProps } from "../../../../components/posts";
import Seo, { type SeoProps } from "../../../../components/seo";
import { CourseService, type Course } from "../../../../lib/courses";
import CourseList, { loader } from "../course-list";

vi.mock("../../../../components/posts");
vi.mock("../../../../components/categories");
vi.mock("../../../../components/seo");

describe("<CourseList />", () => {
  let MockedPosts: MockInstance<typeof Posts>;
  let MockedCategories: MockInstance<typeof Categories>;
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
    MockedPosts = vi.mocked(Posts);
    MockedCategories = vi.mocked(Categories);
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
    MockedPosts.mockRestore();
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

    expect(MockedPosts).toHaveBeenCalledWith(
      {
        posts: MOCKED_COURSES,
        pathPrefix: "/learning",
      } satisfies PostsProps,
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

    expect(MockedPosts).toHaveBeenCalledWith(
      {
        posts: [MOCKED_COURSES[1]],
        pathPrefix: "/learning",
      } satisfies PostsProps,
      undefined
    );
  });
});
