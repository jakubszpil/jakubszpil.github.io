import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { LinkWithPrefetch } from "../../../shared/ui/link-with-prefetch";
import { NavbarMenu } from "../navbar-menu";
import { NavbarLink } from "../navbar-link";
import { ThemeSwitcher } from "../theme-switcher";

vi.mock("../../../shared/ui/link-with-prefetch");
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
  const MockedThemeSwitcher = vi.mocked(ThemeSwitcher);

  beforeEach(() => {
    MockedLinkWithPrefetch.mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    MockedThemeSwitcher.mockImplementation(() => <div>ThemeSwitcher</div>);
  });

  afterEach(() => {
    MockedLinkWithPrefetch.mockRestore();
    MockedThemeSwitcher.mockRestore();
  });

  test("should render", async () => {
    render(
      <NavbarMenu search={<>Search</>}>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/blog">Blog</NavbarLink>
      </NavbarMenu>,
    );

    await screen.findByText(/About/);

    await screen.findByText(/Blog/);

    await screen.findByText(/Search/);

    expect(MockedThemeSwitcher).toHaveBeenCalled();
  });
});
