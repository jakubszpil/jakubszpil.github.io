import type { ReactNode } from "react";

import { Button, type ButtonProps } from "./ui/button";
import LinkWithPrefetch from "./link-with-prefetch";

export interface NavbarLinkProps {
  to: string;
  children: ReactNode;
  onClick?: ButtonProps["onClick"];
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
      <LinkWithPrefetch to={props.to}>{props.children}</LinkWithPrefetch>
    </Button>
  );
}
