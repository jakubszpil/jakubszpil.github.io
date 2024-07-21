import type { ReactNode } from "react";

import { Button, LinkWithPrefetch } from "@libs/shared";

export interface FooterLinkProps {
  to: string;
  children: ReactNode;
}

export default function FooterLink(props: FooterLinkProps) {
  return (
    <Button
      asChild
      variant="link"
      size="sm"
      className="no-underline hover:underline"
    >
      <LinkWithPrefetch to={props.to}>{props.children}</LinkWithPrefetch>
    </Button>
  );
}
