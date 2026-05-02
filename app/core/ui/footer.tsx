import type { ReactElement } from "react";

import { FooterLink, type FooterLinkProps } from "./footer-link";
import { getCurrentYear } from "../../shared/utils/date";

export interface FooterProps {
  children: ReactElement<FooterLinkProps>[];
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="prose max-w-full border-t">
      <div className="container flex items-center gap-3 justify-start flex-wrap-reverse lg:justify-between">
        <p className="lg:text-sm! my-0!">
          &copy; {getCurrentYear()}
          <FooterLink to="/">jakubszpil</FooterLink>
        </p>

        <nav className="flex items-center flex-wrap -ml-3">{children}</nav>
      </div>
    </footer>
  );
}
