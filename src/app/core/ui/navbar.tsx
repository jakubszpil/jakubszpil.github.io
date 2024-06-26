import { type ReactElement } from "react";

import NavbarLink, { type NavbarLinkProps } from "./navbar-link";
import NavbarMenu, { type NavbarMenuProps } from "./navbar-menu";

export type NavbarProps = {
  children: ReactElement<NavbarLinkProps | NavbarMenuProps>[];
};

export default function Navbar(props: NavbarProps) {
  return (
    <header className="sticky top-0 left-0 z-50 md:relative">
      <div className="backdrop-blur-lg bg-background/80 absolute inset-0 md:hidden"></div>
      <div className="container pb-3 pt-4 flex justify-between items-center px-3 md:py-6">
        {props.children}
      </div>
    </header>
  );
}

Navbar.Link = NavbarLink;
Navbar.Menu = NavbarMenu;
