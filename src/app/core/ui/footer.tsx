import { ReactElement } from "react";

import FooterLink, { FooterLinkProps } from "./footer-link";

export interface FooterProps {
  children: ReactElement<FooterLinkProps>[];
}

export default function Footer(props: FooterProps) {
  return (
    <footer className="prose max-w-full border-t">
      <div className="container flex items-center gap-3 justify-start flex-wrap-reverse lg:justify-between">
        <p className="xl:text-sm">
          &copy; {new Date().getFullYear()} jakubszpil
        </p>

        <nav className="flex items-center flex-wrap -ml-3">
          {props.children}
        </nav>
      </div>
    </footer>
  );
}

Footer.Link = FooterLink;
