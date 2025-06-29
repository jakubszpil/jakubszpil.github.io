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
} from "../../ui/link-with-prefetch";
import Articles, { type ArticlesProps } from "../articles";

vi.mock("../../ui/link-with-prefetch");

describe("<Articles />", () => {
  let MockedLinkWithPrefetch: MockInstance;
  let MockedArticlesProps: ArticlesProps;

  beforeEach(() => {
    MockedLinkWithPrefetch = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation((props) => (
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
          createdAt: "2025-03-01",
          keywords: [],
          resourceUrl: "",
        },
        {
          id: "2",
          slug: "test-2",
          content: "test content 2",
          categories: ["test", "category"],
          title: "Test article 2",
          description: "Test article description 2",
          createdAt: "2025-03-01",
          keywords: [],
          resourceUrl: "",
        },
      ],
    };
  });

  afterEach(() => {
    MockedLinkWithPrefetch.mockRestore();
  });

  test("should render", async () => {
    render(<Articles {...MockedArticlesProps} />);

    await waitFor(() => {
      expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          to: "/blog/test-1",
        } satisfies LinkWithPrefetchProps),
        undefined
      );
    });

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/blog/test-2",
      } satisfies LinkWithPrefetchProps),
      undefined
    );

    screen.getByText("Test article 1");
    screen.getByText("Test article description 1");

    screen.getByText("Test article 2");
    screen.getByText("Test article description 2");
  });
});
