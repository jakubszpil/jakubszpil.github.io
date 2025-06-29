import { render, screen } from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";

import FooterLink, { type FooterLinkProps } from "../footer-link";
import { LinkWithPrefetch } from "../ui/link-with-prefetch";

vi.mock("../ui/link-with-prefetch");

describe("<FooterLink />", () => {
  let MockedLinkWithPrefetch: MockInstance;
  let MockedFooterLinkProps: FooterLinkProps;

  beforeEach(() => {
    MockedLinkWithPrefetch = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation((props) => (
        <a href={String(props.to)} data-testid="link">
          {props.children}
        </a>
      ));

    MockedFooterLinkProps = {
      children: "some text",
      to: "/test",
    };
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
