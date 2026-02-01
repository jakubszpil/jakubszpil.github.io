import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { LinkWithPrefetch } from "../ui/link-with-prefetch";
import { NavbarLink, type NavbarLinkProps } from "../navbar-link";

vi.mock("../ui/link-with-prefetch");

describe("<NavbarLink />", () => {
  const MockedLinkWithPrefetch = vi.mocked(LinkWithPrefetch);
  const MockedNavbarLinkProps: NavbarLinkProps = {
    children: "some text",
    to: "/test",
  };

  beforeEach(() => {
    MockedLinkWithPrefetch.mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));
  });

  afterEach(() => {
    MockedLinkWithPrefetch.mockRestore();
  });

  test("should render", async () => {
    render(<NavbarLink {...MockedNavbarLinkProps} />);

    const link = await screen.findByTestId<HTMLAnchorElement>("link");

    expect(link.pathname).toBe(MockedNavbarLinkProps.to);

    expect(link.innerHTML).toBe(MockedNavbarLinkProps.children);
  });
});
