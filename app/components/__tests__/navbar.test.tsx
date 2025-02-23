import { Link } from "react-router";
import {
  afterEach,
  beforeEach,
  describe,
  test,
  vi,
  type MockInstance,
} from "vitest";
import { render, screen } from "@testing-library/react";

import Navbar from "../navbar";
import NavbarLink from "../navbar-link";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    Link: vi.fn(),
  };
});

describe("<Navbar />", () => {
  let MockedLink: MockInstance;

  beforeEach(() => {
    MockedLink = vi.mocked(Link).mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));
  });

  afterEach(() => {
    MockedLink.mockRestore();
  });

  test("should render", async () => {
    render(
      <Navbar>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/search">Search</NavbarLink>
      </Navbar>
    );

    await screen.findByText(/About/);

    await screen.findByText(/Search/);
  });
});
