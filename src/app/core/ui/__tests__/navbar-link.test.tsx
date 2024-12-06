import {
  afterEach,
  beforeEach,
  describe,
  type MockInstance,
  test,
  vi,
} from "vitest";
import { render, screen } from "@testing-library/react";

import { LinkWithPrefetch } from "@/shared/ui/link-with-prefetch";
import { Button } from "@/shared/ui/button";

import NavbarLink, { type NavbarLinkProps } from "../navbar-link";

vi.mock("@/shared/ui/button", async () => {
  return {
    Button: vi.fn(),
  };
});

vi.mock("@/shared/ui/link-with-prefetch", async () => {
  return {
    LinkWithPrefetch: vi.fn(),
  };
});

describe("NavbarLink", () => {
  let MOCKED_LINK_COMPONENT: MockInstance;
  let MOCKED_BUTTON_COMPONENT: MockInstance;

  beforeEach(() => {
    MOCKED_LINK_COMPONENT = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation((props) => (
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
  });
});
