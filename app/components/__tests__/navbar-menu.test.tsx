import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { LinkWithPrefetch } from "../ui/link-with-prefetch";
import { NavbarMenu } from "../navbar-menu";
import { NavbarLink } from "../navbar-link";
import { SearchButton } from "../search-button";
import { ThemeSwitcher } from "../theme-switcher";

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
  const MockedLinkWithPrefetch = vi.mocked(LinkWithPrefetch);
  const MockedSearchButton = vi.mocked(SearchButton);
  const MockedThemeSwitcher = vi.mocked(ThemeSwitcher);

  beforeEach(() => {
    MockedLinkWithPrefetch.mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    MockedSearchButton.mockImplementation(() => <div>SearchButton</div>);

    MockedThemeSwitcher.mockImplementation(() => <div>ThemeSwitcher</div>);
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
      </NavbarMenu>,
    );

    await screen.findAllByText(/About/);

    await screen.findAllByText(/Search/);

    expect(MockedSearchButton).toHaveBeenCalled();

    expect(MockedThemeSwitcher).toHaveBeenCalled();
  });
});
