import type { ReactElement } from "react";

import type { NavbarLinkProps } from "./navbar-link";
import type { NavbarMenuProps } from "./navbar-menu";

export interface NavbarProps {
  children: ReactElement<NavbarLinkProps | NavbarMenuProps>[];
}

export default function Navbar(props: NavbarProps) {
  return (
    <header className="sticky w-full bg-background top-0 left-0 z-50 lg:relative">
      <div className="container !pb-3 !pt-4 flex justify-between items-center !px-3 lg:!py-6">
        {props.children}
      </div>
    </header>
  );
}
