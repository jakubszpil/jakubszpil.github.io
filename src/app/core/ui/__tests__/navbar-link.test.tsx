import {
  afterEach,
  beforeEach,
  describe,
  expect,
  type MockInstance,
  test,
  vi,
} from "vitest";
import { Link, type LinkProps } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { Button, type ButtonProps } from "@libs/shared";

import NavbarLink, { type NavbarLinkProps } from "../navbar-link";

vi.mock("@libs/shared", async (importActual) => {
  const actual = await importActual<typeof import("@libs/shared")>();
  return {
    ...actual,
    Button: vi.fn(),
  };
});

vi.mock("react-router-dom", async (importActual) => {
  const actual = await importActual<typeof import("react-router-dom")>();
  return {
    ...actual,
    Link: vi.fn(),
  };
});

describe("NavbarLink", () => {
  let MOCKED_LINK_COMPONENT: MockInstance;
  let MOCKED_BUTTON_COMPONENT: MockInstance;

  beforeEach(() => {
    MOCKED_LINK_COMPONENT = vi.mocked(Link).mockImplementation((props) => (
      <div>
        <div>Link</div>
        <div>{props.children}</div>
      </div>
    ));

    MOCKED_BUTTON_COMPONENT = vi.mocked(Button).mockImplementation((props) => (
      <div>
        <div>Button</div>
        <div>{props.children}</div>
      </div>
    ));
  });

  afterEach(() => {
    MOCKED_LINK_COMPONENT.mockRestore();
    MOCKED_BUTTON_COMPONENT.mockRestore();
  });

  test("should render Link and Button with proper values", async () => {
    const MOCKED_PROPS: NavbarLinkProps = {
      children: "Click",
      to: "/",
      className: "test",
      onClick: vi.fn(),
      size: "lg",
      variant: "outline",
    };

    render(<NavbarLink {...MOCKED_PROPS} />);

    await screen.findByText(MOCKED_PROPS.children as string);

    expect(MOCKED_BUTTON_COMPONENT).toHaveBeenCalledWith(
      expect.objectContaining({
        onClick: MOCKED_PROPS.onClick,
        className: MOCKED_PROPS.className,
        size: MOCKED_PROPS.size,
        variant: MOCKED_PROPS.variant,
        asChild: true,
      } satisfies ButtonProps),
      {}
    );

    expect(MOCKED_LINK_COMPONENT).toHaveBeenCalledWith(
      expect.objectContaining({
        to: MOCKED_PROPS.to,
        children: MOCKED_PROPS.children,
      } satisfies LinkProps),
      {}
    );
  });
});
