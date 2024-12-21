import type { ReactElement } from "react";
import { Link } from "react-router";

import { getCurrentYear } from "~/lib/date";

import { Button } from "./ui/button";
import type { FooterLinkProps } from "./footer-link";

export interface FooterProps {
  children: ReactElement<FooterLinkProps>[];
}

export default function Footer(props: FooterProps) {
  return (
    <footer className="prose max-w-full border-t">
      <div className="container flex items-center gap-3 justify-start flex-wrap-reverse lg:justify-between">
        <p className="xl:text-sm">
          &copy; {getCurrentYear()}
          <Button asChild variant="link" size="sm">
            <Link to="/">jakubszpil</Link>
          </Button>
        </p>

        <nav className="flex items-center flex-wrap -ml-3">
          {props.children}
        </nav>
      </div>
    </footer>
  );
}