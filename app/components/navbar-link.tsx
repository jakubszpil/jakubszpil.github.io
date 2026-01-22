import type { ReactNode } from "react";

import { Button, type ButtonProps } from "./ui/button";
import { LinkWithPrefetch } from "./ui/link-with-prefetch";

export interface NavbarLinkProps {
  to: string;
  children: ReactNode;
  onClick?: ButtonProps["onClick"];
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}

export function NavbarLink({
  className,
  onClick,
  variant = "ghost",
  size = "sm",
  to,
  children,
}: NavbarLinkProps) {
  return (
    <Button
      asChild
      className={className}
      onClick={onClick}
      variant={variant}
      size={size}
    >
      <LinkWithPrefetch to={to}>{children}</LinkWithPrefetch>
    </Button>
  );
}
