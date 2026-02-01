import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { LinkWithPrefetch } from "../ui/link-with-prefetch";
import { FooterLink, type FooterLinkProps } from "../footer-link";

vi.mock("../ui/link-with-prefetch");

describe("<FooterLink />", () => {
  const MockedLinkWithPrefetch = vi.mocked(LinkWithPrefetch);
  const MockedFooterLinkProps: FooterLinkProps = {
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
    render(<FooterLink {...MockedFooterLinkProps} />);

    const link = await screen.findByTestId<HTMLAnchorElement>("link");

    expect(link.pathname).toBe(MockedFooterLinkProps.to);

    expect(link.innerHTML).toBe(MockedFooterLinkProps.children);
  });
});
