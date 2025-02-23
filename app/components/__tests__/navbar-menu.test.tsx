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
import { render, screen } from "@testing-library/react";

import NavbarMenu from "../navbar-menu";
import NavbarLink from "../navbar-link";
import SearchButton from "../search-button";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    Link: vi.fn(),
  };
});

vi.mock("../search-button");

describe("<NavbarMenu />", () => {
  let MockedLink: MockInstance;
  let MockedSearchButton: MockInstance;

  beforeEach(() => {
    MockedLink = vi.mocked(Link).mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    MockedSearchButton = vi
      .mocked(SearchButton)
      .mockImplementation(() => <div>SearchButton</div>);
  });

  afterEach(() => {
    MockedLink.mockRestore();
    MockedSearchButton.mockRestore();
  });

  test("should render", async () => {
    render(
      <NavbarMenu>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/search">Search</NavbarLink>
      </NavbarMenu>
    );

    await screen.findAllByText(/About/);

    await screen.findAllByText(/Search/);

    expect(MockedSearchButton).toHaveBeenCalled();
  });
});
