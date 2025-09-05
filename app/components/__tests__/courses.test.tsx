import { render, screen, waitFor } from "@testing-library/react";
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
  LinkWithPrefetch,
  type LinkWithPrefetchProps,
} from "../ui/link-with-prefetch";
import Courses, { type CoursesProps } from "../courses";

vi.mock("../ui/link-with-prefetch");

describe("<Courses />", () => {
  let MockedLinkWithPrefetch: MockInstance;
  let MockedCoursesProps: CoursesProps;

  beforeEach(() => {
    MockedLinkWithPrefetch = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation((props) => (
        <a href={String(props.to)} data-testid="link">
          {props.children}
        </a>
      ));

    MockedCoursesProps = {
      courses: [
        {
          slug: "test-1",
          content: "test content 1",
          categories: ["test", "category"],
          title: "Test course 1",
          description: "Test course description 1",
          createdAt: "2025-03-17",
          readingTime: "3 minuty",
          keywords: [],
        },
        {
          slug: "test-2",
          content: "test content 2",
          categories: ["test", "category"],
          title: "Test course 2",
          description: "Test course description 2",
          createdAt: "2025-03-17",
          readingTime: "3 minuty",
          keywords: [],
        },
      ],
    };
  });

  afterEach(() => {
    MockedLinkWithPrefetch.mockRestore();
  });

  test("should render", async () => {
    render(<Courses {...MockedCoursesProps} />);

    await waitFor(() => {
      expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          to: "/learning/test-1",
        } satisfies LinkWithPrefetchProps),
        undefined
      );
    });

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/learning/test-2",
      } satisfies LinkWithPrefetchProps),
      undefined
    );

    screen.getByText("Test course 1");
    screen.getByText("Test course description 1");

    screen.getByText("Test course 2");
    screen.getByText("Test course description 2");
  });
});
