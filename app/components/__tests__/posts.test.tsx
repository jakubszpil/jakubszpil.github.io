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
import Posts, { type PostsProps } from "../posts";

vi.mock("../ui/link-with-prefetch");

describe("<Posts />", () => {
  let MockedLinkWithPrefetch: MockInstance;
  let MockedPostsProps: PostsProps;

  beforeEach(() => {
    MockedLinkWithPrefetch = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation((props) => (
        <a href={String(props.to)} data-testid="link">
          {props.children}
        </a>
      ));

    MockedPostsProps = {
      posts: [
        {
          slug: "test-1",
          title: "Test article 1",
          description: "Test article description 1",
          createdAt: "2025-03-17",
          readingTime: "3 minuty",
        },
        {
          slug: "test-2",
          title: "Test article 2",
          description: "Test article description 2",
          createdAt: "2025-03-17",
          readingTime: "3 minuty",
        },
      ],
      pathPrefix: "/blog",
    };
  });

  afterEach(() => {
    MockedLinkWithPrefetch.mockRestore();
  });

  test("should render", async () => {
    render(<Posts {...MockedPostsProps} />);

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
