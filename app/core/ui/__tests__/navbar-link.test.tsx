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

import NavbarLink, { type NavbarLinkProps } from "../navbar-link";
import { LinkWithPrefetch } from "../../../shared/ui/link-with-prefetch";

vi.mock("../../../shared/ui/link-with-prefetch");

describe("<NavbarLink />", () => {
  let MockedLinkWithPrefetch: MockInstance<typeof LinkWithPrefetch>;
  let MockedNavbarLinkProps: NavbarLinkProps;

  beforeEach(() => {
    MockedLinkWithPrefetch = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation((props) => (
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
    MockedLinkWithPrefetch.mockRestore();
  });

  test("should render", async () => {
    render(<NavbarLink {...MockedNavbarLinkProps} />);

    const link = await screen.findByTestId<HTMLAnchorElement>("link");

    expect(link.pathname).toBe(MockedNavbarLinkProps.to);

    expect(link.innerHTML).toBe(MockedNavbarLinkProps.children);
  });
});
