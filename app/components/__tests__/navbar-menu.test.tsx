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

import { LinkWithPrefetch } from "../ui/link-with-prefetch";
import NavbarMenu from "../navbar-menu";
import NavbarLink from "../navbar-link";
import SearchButton from "../search-button";
import ThemeSwitcher from "../theme-switcher";

vi.mock("../ui/link-with-prefetch");
vi.mock("../search-button");
vi.mock("../theme-switcher");
vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("<NavbarMenu />", () => {
  let MockedLinkWithPrefetch: MockInstance;
  let MockedSearchButton: MockInstance;
  let MockedThemeSwitcher: MockInstance;

  beforeEach(() => {
    MockedLinkWithPrefetch = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation((props) => (
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
    MockedLinkWithPrefetch.mockRestore();
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
