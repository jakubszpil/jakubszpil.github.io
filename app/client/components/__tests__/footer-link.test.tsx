import { render, screen } from "@testing-library/react";
import { Link } from "react-router";
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

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    Link: vi.fn(),
  };
});

describe("<FooterLink />", () => {
  let MockedLink: MockInstance;
  let MockedFooterLinkProps: FooterLinkProps;

  beforeEach(() => {
    MockedLink = vi.mocked(Link).mockImplementation((props) => (
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
    MockedLink.mockRestore();
  });

  test("should render", async () => {
    render(<FooterLink {...MockedFooterLinkProps} />);

    const link = await screen.findByTestId<HTMLAnchorElement>("link");

    expect(link.pathname).toBe(MockedFooterLinkProps.to);

    expect(link.innerHTML).toBe(MockedFooterLinkProps.children);
  });
});
