import type { ReactNode } from "react";
import { Link } from "react-router";

import { Button } from "./ui/button";

export interface FooterLinkProps {
  to: string;
  children: ReactNode;
}

export default function FooterLink(props: FooterLinkProps) {
  return (
    <Button asChild variant="link" size="sm">
      <Link prefetch="intent" to={props.to}>
        {props.children}
      </Link>
    </Button>
  );
}
