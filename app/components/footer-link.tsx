import type { ReactNode } from "react";

import { Button } from "./ui/button";
import { LinkWithPrefetch } from "./ui/link-with-prefetch";

export interface FooterLinkProps {
  to: string;
  children: ReactNode;
}

export function FooterLink({ to, children }: FooterLinkProps) {
  return (
    <Button asChild variant="link" size="sm">
      <LinkWithPrefetch to={to}>{children}</LinkWithPrefetch>
    </Button>
  );
}
