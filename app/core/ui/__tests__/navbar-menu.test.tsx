import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { LinkWithPrefetch } from "../../../shared/ui/link-with-prefetch";
import { NavbarMenu } from "../navbar-menu";
import { NavbarLink } from "../navbar-link";
import { SearchDialog } from "../search-dialog";
import { ThemeSwitcher } from "../theme-switcher";

vi.mock("../../../shared/ui/link-with-prefetch");
vi.mock("../search-dialog");
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
  const MockedSearchDialog = vi.mocked(SearchDialog);
  const MockedThemeSwitcher = vi.mocked(ThemeSwitcher);

  beforeEach(() => {
    MockedLinkWithPrefetch.mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    MockedSearchDialog.mockImplementation(() => <div>SearchDialog</div>);

    MockedThemeSwitcher.mockImplementation(() => <div>ThemeSwitcher</div>);
  });

  afterEach(() => {
    MockedLinkWithPrefetch.mockRestore();
    MockedSearchDialog.mockRestore();
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

    expect(MockedSearchDialog).toHaveBeenCalled();

    expect(MockedThemeSwitcher).toHaveBeenCalled();
  });
});
