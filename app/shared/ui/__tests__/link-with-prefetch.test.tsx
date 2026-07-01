import { act, render, screen } from "@testing-library/react";
import { forwardRef, type ComponentProps } from "react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { useForesight } from "@foresightjs/react";

import { useIsMobile } from "../../data-access/use-mobile";
import { LinkWithPrefetch } from "../link-with-prefetch";

type MockLinkProps = ComponentProps<"a"> & {
  prefetch?: string;
  to: string;
};

type UseForesightOptions = Parameters<typeof useForesight>[0];

type ForesightState = Omit<ReturnType<typeof useForesight>, "elementRef">;

vi.mock("@foresightjs/react", () => ({
  useForesight: vi.fn(),
}));

vi.mock("../../data-access/use-mobile", () => ({
  useIsMobile: vi.fn(),
}));

vi.mock("react-router", () => ({
  Link: forwardRef<HTMLAnchorElement, MockLinkProps>(
    ({ children, prefetch, to, ...props }, ref) => (
      <a {...props} data-prefetch={prefetch} href={to} ref={ref}>
        {children}
      </a>
    ),
  ),
}));

describe("<LinkWithPrefetch />", () => {
  const MOCKED_FORESIGN_STATE = {
    hitSlop: { bottom: 0, left: 0, right: 0, top: 0 },
    id: "foresight-1",
    name: "test-link",
  } as ForesightState satisfies ForesightState;

  const MockedUseForesight = vi.mocked(useForesight);
  const MockedUseIsMobile = vi.mocked(useIsMobile);
  const MockedRef = vi.fn();

  beforeEach(() => {
    MockedUseIsMobile.mockImplementation(() => false);
    MockedUseForesight.mockImplementation(() => ({
      elementRef: MockedRef,
      ...MOCKED_FORESIGN_STATE,
    }));
  });

  afterEach(() => {
    MockedRef.mockReset();
  });

  test("given desktop viewport expect intent prefetch by default", () => {
    render(<LinkWithPrefetch to="/blog">Blog</LinkWithPrefetch>);

    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "data-prefetch",
      "intent",
    );
  });

  test("given mobile viewport expect viewport prefetch by default", () => {
    MockedUseIsMobile.mockImplementation(() => true);

    render(<LinkWithPrefetch to="/blog">Blog</LinkWithPrefetch>);

    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "data-prefetch",
      "viewport",
    );
  });

  test("given prefetch=none expect to keep prefetch disabled", () => {
    render(
      <LinkWithPrefetch prefetch="none" to="/blog">
        Blog
      </LinkWithPrefetch>,
    );

    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "data-prefetch",
      "none",
    );
  });

  test("given foresight callback was called expect viewport prefetch", () => {
    const consoleLogSpy = vi
      .spyOn(console, "log")
      .mockImplementation(() => undefined);

    render(<LinkWithPrefetch to="/blog">Blog</LinkWithPrefetch>);

    const foresightOptions = MockedUseForesight.mock.calls[0]?.[0];

    act(() => {
      foresightOptions?.callback(MOCKED_FORESIGN_STATE);
    });

    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "data-prefetch",
      "viewport",
    );

    consoleLogSpy.mockRestore();
  });

  test("given foresight options expect to pass them to useForesight", () => {
    render(
      <LinkWithPrefetch
        enabled={false}
        hitSlop={80}
        meta={{ source: "test" }}
        name="test-link"
        reactivateAfter={500}
        to="/blog"
      >
        Blog
      </LinkWithPrefetch>,
    );

    expect(MockedUseForesight).toHaveBeenCalledWith(
      expect.objectContaining({
        enabled: false,
        hitSlop: 80,
        meta: { source: "test" },
        name: "test-link",
        reactivateAfter: 500,
      } satisfies Partial<UseForesightOptions>),
    );
  });

  test("given external ref expect to assign both refs", () => {
    const ref = vi.fn();

    render(
      <LinkWithPrefetch ref={ref} to="/blog">
        Blog
      </LinkWithPrefetch>,
    );

    const link = screen.getByRole("link", { name: "Blog" });

    expect(MockedRef).toHaveBeenCalledWith(link);
    expect(ref).toHaveBeenCalledWith(link);
  });
});
