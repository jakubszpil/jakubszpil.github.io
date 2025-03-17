import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";

import Navbar from "@/components/navbar";
import NavbarMenu from "@/components/navbar-menu";
import NavbarLink, { type NavbarLinkProps } from "@/components/navbar-link";
import Footer from "@/components/footer";
import FooterLink, { type FooterLinkProps } from "@/components/footer-link";
import BusyIndicator from "@/components/busy-indicator";

import Layout from "../layout";

vi.mock("@/components/navbar");
vi.mock("@/components/navbar-menu");
vi.mock("@/components/navbar-link");
vi.mock("@/components/footer");
vi.mock("@/components/footer-link");
vi.mock("@/components/busy-indicator");

describe("<Layout />", () => {
  let MockedNavbar: MockInstance;
  let MockedNavbarMenu: MockInstance;
  let MockedNavbarLink: MockInstance;
  let MockedFooter: MockInstance;
  let MockedFooterLink: MockInstance;
  let MockedBusyIndicator: MockInstance;

  beforeEach(() => {
    MockedNavbar = vi
      .mocked(Navbar)
      .mockImplementation((props) => (
        <div data-testid="Navbar">{props.children}</div>
      ));

    MockedNavbarMenu = vi
      .mocked(NavbarMenu)
      .mockImplementation((props) => (
        <div data-testid="NavbarMenu">{props.children}</div>
      ));

    MockedNavbarLink = vi
      .mocked(NavbarLink)
      .mockImplementation((props) => (
        <div data-testid="NavbarLink">{props.children}</div>
      ));

    MockedFooter = vi
      .mocked(Footer)
      .mockImplementation((props) => (
        <div data-testid="Footer">{props.children}</div>
      ));

    MockedFooterLink = vi
      .mocked(FooterLink)
      .mockImplementation((props) => (
        <div data-testid="FooterLink">{props.children}</div>
      ));

    MockedBusyIndicator = vi
      .mocked(BusyIndicator)
      .mockImplementation(() => <div data-testid="BusyIndicator"></div>);
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
      },
    ]);

    render(<Stub initialEntries={["/"]} />);

    await screen.findByText(/jakubszpil/);

    expect(MockedNavbar).toHaveBeenCalled();

    expect(MockedNavbarMenu).toHaveBeenCalled();

    expect(MockedNavbarLink).toHaveBeenCalledTimes(6);

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      1,
      {
        to: "/",
        children: "jakubszpil",
        className: "font-bold",
      } satisfies NavbarLinkProps,
      undefined
    );

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      2,
      {
        to: "/",
        children: "🏠 Strona główna",
      } satisfies NavbarLinkProps,
      undefined
    );

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      3,
      {
        to: "/blog",
        children: "📝 Blog",
      } satisfies NavbarLinkProps,
      undefined
    );

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      4,
      {
        to: "/learning",
        children: "🏫 Learning",
      } satisfies NavbarLinkProps,
      undefined
    );

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      5,
      {
        to: "/portfolio",
        children: "🛠️ Portfolio",
      } satisfies NavbarLinkProps,
      undefined
    );

    expect(MockedNavbarLink).toHaveBeenNthCalledWith(
      6,
      {
        to: "/me",
        children: "🙋‍♂️ O mnie",
      } satisfies NavbarLinkProps,
      undefined
    );

    expect(MockedFooter).toHaveBeenCalled();

    expect(MockedFooterLink).toHaveBeenCalledTimes(7);

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      1,
      {
        to: "/",
        children: "🏠 Strona główna",
      } satisfies FooterLinkProps,
      undefined
    );

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      2,
      {
        to: "/blog",
        children: "📝 Blog",
      } satisfies FooterLinkProps,
      undefined
    );

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      3,
      {
        to: "/learning",
        children: "🏫 Learning",
      } satisfies FooterLinkProps,
      undefined
    );

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      4,
      {
        to: "/portfolio",
        children: "🛠️ Portfolio",
      } satisfies FooterLinkProps,
      undefined
    );

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      5,
      {
        to: "/me",
        children: "🙋‍♂️ O mnie",
      } satisfies FooterLinkProps,
      undefined
    );

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      6,
      {
        to: "/search",
        children: "🔍 Szukaj",
      } satisfies FooterLinkProps,
      undefined
    );

    expect(MockedFooterLink).toHaveBeenNthCalledWith(
      7,
      {
        to: "/handbook",
        children: "📋 Handbook",
      } satisfies FooterLinkProps,
      undefined
    );

    expect(MockedBusyIndicator).toHaveBeenCalled();
  });
});
