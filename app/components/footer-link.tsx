import type { ReactNode } from "react";

import { Button } from "../shared/ui/button";
import { LinkWithPrefetch } from "../shared/ui/link-with-prefetch";

export interface FooterLinkProps {
  to: string;
  children: ReactNode;
}

export default function FooterLink(props: FooterLinkProps) {
  return (
    <Button asChild variant="link" size="sm">
      <LinkWithPrefetch to={props.to}>{props.children}</LinkWithPrefetch>
    </Button>
  );
}
