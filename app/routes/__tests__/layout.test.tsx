import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { Navbar } from "../../core/ui/navbar";
import { NavbarMenu } from "../../core/ui/navbar-menu";
import { NavbarLink, type NavbarLinkProps } from "../../core/ui/navbar-link";
import { Footer } from "../../core/ui/footer";
import { FooterLink, type FooterLinkProps } from "../../core/ui/footer-link";
import { BusyIndicator } from "../../core/ui/busy-indicator";
import Layout from "../layout";

vi.mock("../../core/ui/navbar");
vi.mock("../../core/ui/navbar-menu");
vi.mock("../../core/ui/navbar-link");
vi.mock("../../core/ui/footer");
vi.mock("../../core/ui/footer-link");
vi.mock("../../core/ui/busy-indicator");

describe("<Layout />", () => {
  const MockedNavbar = vi.mocked(Navbar);
  const MockedNavbarMenu = vi.mocked(NavbarMenu);
  const MockedNavbarLink = vi.mocked(NavbarLink);
  const MockedFooter = vi.mocked(Footer);
  const MockedFooterLink = vi.mocked(FooterLink);
  const MockedBusyIndicator = vi.mocked(BusyIndicator);

  beforeEach(() => {
    MockedNavbar.mockImplementation((props) => (
      <div data-testid="Navbar">{props.children}</div>
    ));

    MockedNavbarMenu.mockImplementation((props) => (
      <div data-testid="NavbarMenu">{props.children}</div>
    ));

    MockedNavbarLink.mockImplementation((props) => (
      <div data-testid="NavbarLink">{props.children}</div>
    ));

    MockedFooter.mockImplementation((props) => (
      <div data-testid="Footer">{props.children}</div>
    ));

    MockedFooterLink.mockImplementation((props) => (
      <div data-testid="FooterLink">{props.children}</div>
    ));

    MockedBusyIndicator.mockImplementation(() => (
      <div data-testid="BusyIndicator"></div>
    ));
  });

  afterEach(() => {
    MockedNavbar.mockRestore();
    MockedNavbarMenu.mockRestore();
    MockedNavbarLink.mockRestore();
    MockedFooter.mockRestore();
    MockedFooterLink.mockRestore();
    MockedBusyIndicator.mockRestore();
  });

  test("should render components", async () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: Layout,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(<Stub initialEntries={["/"]} />);

    await screen.findByText(/jakubszpil/);

    expect(MockedNavbar).toHaveBeenCalled();

    expect(MockedNavbarMenu).toHaveBeenCalled();

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      1,
      {
        to: "/",
        children: "jakubszpil",
        className: "font-bold",
      } satisfies NavbarLinkProps,
      undefined,
    );

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      2,
      {
        to: "/",
        children: "🏠 Strona główna",
      } satisfies NavbarLinkProps,
      undefined,
    );

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      3,
      {
        to: "/blog",
        children: "📝 Blog",
      } satisfies NavbarLinkProps,
      undefined,
    );

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      4,
      {
        to: "/learning",
        children: "🏫 Learning",
      } satisfies NavbarLinkProps,
      undefined,
    );

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      5,
      {
        to: "/portfolio",
        children: "🛠️ Portfolio",
      } satisfies NavbarLinkProps,
      undefined,
    );

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      6,
      {
        to: "/me",
        children: "🙋‍♂️ O mnie",
      } satisfies NavbarLinkProps,
      undefined,
    );

    expect(MockedFooter).toHaveBeenCalled();

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      1,
      {
        to: "/",
        children: "🏠 Strona główna",
      } satisfies FooterLinkProps,
      undefined,
    );

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      2,
      {
        to: "/blog",
        children: "📝 Blog",
      } satisfies FooterLinkProps,
      undefined,
    );

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      3,
      {
        to: "/learning",
        children: "🏫 Learning",
      } satisfies FooterLinkProps,
      undefined,
    );

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      4,
      {
        to: "/portfolio",
        children: "🛠️ Portfolio",
      } satisfies FooterLinkProps,
      undefined,
    );

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      5,
      {
        to: "/me",
        children: "🙋‍♂️ O mnie",
      } satisfies FooterLinkProps,
      undefined,
    );

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      6,
      {
        to: "/search",
        children: "🔍 Szukaj",
      } satisfies FooterLinkProps,
      undefined,
    );

    expect(MockedBusyIndicator).toHaveBeenCalled();
  });
});
