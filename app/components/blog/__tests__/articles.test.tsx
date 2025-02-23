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

import Articles, { type ArticlesProps } from "../articles";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    Link: vi.fn(),
  };
});

describe("<Articles />", () => {
  let MockedLink: MockInstance;
  let MockedArticlesProps: ArticlesProps;

  beforeEach(() => {
    MockedLink = vi.mocked(Link).mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    MockedArticlesProps = {
      articles: [
        {
          id: "1",
          slug: "test-1",
          content: "test content 1",
          categories: ["test", "category"],
          title: "Test article 1",
          description: "Test article description 1",
        },
        {
          id: "2",
          slug: "test-2",
          content: "test content 2",
          categories: ["test", "category"],
          title: "Test article 2",
          description: "Test article description 2",
        },
      ],
    };
  });

  afterEach(() => {
    MockedLink.mockRestore();
  });

  test("should render", async () => {
    render(<Articles {...MockedArticlesProps} />);

    await waitFor(() => {
      expect(MockedLink).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          to: "/blog/test-1",
        } satisfies LinkProps),
        undefined
      );
    });

    expect(MockedLink).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/blog/test-2",
      } satisfies LinkProps),
      undefined
    );

    screen.getByText("Test article 1");
    screen.getByText("Test article description 1");

    screen.getByText("Test article 2");
    screen.getByText("Test article description 2");
  });
});
