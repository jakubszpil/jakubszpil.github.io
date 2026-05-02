import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { CourseCard, type CourseCardProps } from "../course-card";
import { CourseCards } from "../course-cards";
import { MOCKED_COURSE_FEEDS } from "../../test-fixtures";

vi.mock("../course-card");

describe("<CourseCards />", () => {
  const MockedCourseCard = vi.mocked(CourseCard);

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
  });
});
