import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, test, vi } from "vitest";

import { LinkWithPrefetch } from "../ui/link-with-prefetch";
import { Navbar } from "../navbar";
import { NavbarLink } from "../navbar-link";

vi.mock("../ui/link-with-prefetch");

describe("<Navbar />", () => {
  const MockedLinkWithPrefetch = vi.mocked(LinkWithPrefetch);

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
    render(
      <Navbar>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/search">Search</NavbarLink>
      </Navbar>,
    );

    await screen.findByText(/About/);

    await screen.findByText(/Search/);
  });
});
