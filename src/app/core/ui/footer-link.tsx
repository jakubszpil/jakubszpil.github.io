import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Button } from "@libs/shared";

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
      <Link to={props.to}>{props.children}</Link>
    </Button>
  );
}
