import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { CourseCard, type CourseCardProps } from "../course-card";
import { CourseCards } from "../course-cards";
import type { CourseFeed } from "../../lib/courses";

vi.mock("../course-card");

describe("<CourseCards />", () => {
  const MockedCourseCard = vi.mocked(CourseCard);

  const MOCKED_COURSE_FEEDS: CourseFeed[] = [
    {
      slug: "example 1",
      createdAt: "2025-12-12",
      description: "Example description 1",
      readingTime: "2 minuty",
      title: "Example title 1",
    },
    {
      slug: "example 2",
      createdAt: "2025-12-12",
      description: "Example description 2",
      readingTime: "2 minuty",
      title: "Example title 2",
    },
    {
      slug: "example 3",
      createdAt: "2025-12-12",
      description: "Example description 3",
      readingTime: "2 minuty",
      title: "Example title 3",
    },
  ];

  beforeEach(() => {
    MockedCourseCard.mockImplementation(() => <div>CourseCard</div>);
  });

  afterEach(() => {
    MockedCourseCard.mockRestore();
  });

  test("given courses expect to render CourseCard components with proper data", () => {
    render(<CourseCards courses={MOCKED_COURSE_FEEDS} variant="ghost" />);

    expect(MockedCourseCard).toHaveBeenNthCalledWith(
      1,
      {
        course: MOCKED_COURSE_FEEDS[0],
        variant: "ghost",
      } satisfies CourseCardProps,
      undefined,
    );

    expect(MockedCourseCard).toHaveBeenNthCalledWith(
      2,
      {
        course: MOCKED_COURSE_FEEDS[1],
        variant: "ghost",
      } satisfies CourseCardProps,
      undefined,
    );

    expect(MockedCourseCard).toHaveBeenNthCalledWith(
      3,
      {
        course: MOCKED_COURSE_FEEDS[2],
        variant: "ghost",
      } satisfies CourseCardProps,
      undefined,
    );
  });
});
