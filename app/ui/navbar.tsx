import type { ReactElement } from "react";

import type { NavbarLinkProps } from "./navbar-link";
import type { NavbarMenuProps } from "./navbar-menu";

export interface NavbarProps {
  children: ReactElement<NavbarLinkProps | NavbarMenuProps>[];
}

export function Navbar(props: NavbarProps) {
  return (
    <header className="sticky w-full bg-background top-0 left-0 z-50 border-b">
      <div className="container pb-3! pt-4! px-3! flex justify-between items-center">
        {props.children}
      </div>
    </header>
  );
}
