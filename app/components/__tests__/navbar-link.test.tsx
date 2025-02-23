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

import NavbarLink, { type NavbarLinkProps } from "../navbar-link";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    Link: vi.fn(),
  };
});

describe("<NavbarLink />", () => {
  let MockedLink: MockInstance;
  let MockedNavbarLinkProps: NavbarLinkProps;

  beforeEach(() => {
    MockedLink = vi.mocked(Link).mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    MockedNavbarLinkProps = {
      children: "some text",
      to: "/test",
    };
  });

  afterEach(() => {
    MockedLink.mockRestore();
  });

  test("should render", async () => {
    render(<NavbarLink {...MockedNavbarLinkProps} />);

    const link = await screen.findByTestId<HTMLAnchorElement>("link");

    expect(link.pathname).toBe(MockedNavbarLinkProps.to);

    expect(link.innerHTML).toBe(MockedNavbarLinkProps.children);
  });
});
