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
import ThemeSwitcher from "../theme-switcher";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    Link: vi.fn(),
    useNavigate: vi.fn(),
  };
});

vi.mock("../search-button");
vi.mock("../theme-switcher");

describe("<NavbarMenu />", () => {
  let MockedLink: MockInstance;
  let MockedSearchButton: MockInstance;
  let MockedThemeSwitcher: MockInstance;

  beforeEach(() => {
    MockedLink = vi.mocked(Link).mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    MockedSearchButton = vi
      .mocked(SearchButton)
      .mockImplementation(() => <div>SearchButton</div>);

    MockedThemeSwitcher = vi
      .mocked(ThemeSwitcher)
      .mockImplementation(() => <div>ThemeSwitcher</div>);
  });

  afterEach(() => {
    MockedLink.mockRestore();
    MockedSearchButton.mockRestore();
    MockedThemeSwitcher.mockRestore();
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

    expect(MockedThemeSwitcher).toHaveBeenCalled();
  });
});
