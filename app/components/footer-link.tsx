import type { ReactNode } from "react";

import { Button } from "./ui/button";
import LinkWithPrefetch from "./link-with-prefetch";

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
