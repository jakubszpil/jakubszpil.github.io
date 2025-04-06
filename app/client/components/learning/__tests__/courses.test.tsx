import { render, screen, waitFor } from "@testing-library/react";
import { Link, type LinkProps } from "react-router";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";

import Courses, { type CoursesProps } from "../courses";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    Link: vi.fn(),
  };
});

describe("<Courses />", () => {
  let MockedLink: MockInstance;
  let MockedCoursesProps: CoursesProps;

  beforeEach(() => {
    MockedLink = vi.mocked(Link).mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    MockedCoursesProps = {
      courses: [
        {
          id: "1",
          slug: "test-1",
          content: "test content 1",
          categories: ["test", "category"],
          title: "Test course 1",
          description: "Test course description 1",
          createdAt: "2025-03-01",
          keywords: [],
          resourceUrl: "",
        },
        {
          id: "2",
          slug: "test-2",
          content: "test content 2",
          categories: ["test", "category"],
          title: "Test course 2",
          description: "Test course description 2",
          createdAt: "2025-03-01",
          keywords: [],
          resourceUrl: "",
        },
      ],
    };
  });

  afterEach(() => {
    MockedLink.mockRestore();
  });

  test("should render", async () => {
    render(<Courses {...MockedCoursesProps} />);

    await waitFor(() => {
      expect(MockedLink).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          to: "/learning/test-1",
        } satisfies LinkProps),
        undefined
      );
    });

    expect(MockedLink).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/learning/test-2",
      } satisfies LinkProps),
      undefined
    );

    screen.getByText("Test course 1");
    screen.getByText("Test course description 1");

    screen.getByText("Test course 2");
    screen.getByText("Test course description 2");
  });
});
