import type { ReactNode } from "react";
import { Link } from "react-router";

import { Button, type ButtonProps } from "./ui/button";

export interface NavbarLinkProps {
  to: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}

export default function NavbarLink(props: NavbarLinkProps) {
  return (
    <Button
      asChild
      className={props.className}
      onClick={props.onClick}
      variant={props.variant ?? "ghost"}
      size={props.size ?? "sm"}
    >
      <Link to={props.to}>{props.children}</Link>
    </Button>
  );
}
