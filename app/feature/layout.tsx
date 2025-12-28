import { Outlet, useRouteError } from "react-router";

import {
  Button,
  LinkWithPrefetch,
  isRouteErrorResponse,
} from "@packages/shared";

import { usePrerender } from "../data-access/use-prerender";
import { Navbar } from "../ui/navbar";
import { NavbarLink } from "../ui/navbar-link";
import { NavbarMenu } from "../ui/navbar-menu";
import { Footer } from "../ui/footer";
import { FooterLink } from "../ui/footer-link";
import { BusyIndicator } from "../ui/busy-indicator";
import { ScrollRestoration } from "../ui/scroll-restoration";

export default function Layout() {
  const prerender = usePrerender();

  if (!prerender) {
    return null;
  }

  return (
    <>
      <ScrollRestoration />
      <Navbar>
        <NavbarLink className="font-bold" to="/">
          jakubszpil
        </NavbarLink>
        <BusyIndicator />
        <NavbarMenu>
          <NavbarLink to="/">🏠 Strona główna</NavbarLink>
          <NavbarLink to="/blog">📝 Blog</NavbarLink>
          <NavbarLink to="/learning">🏫 Learning</NavbarLink>
          <NavbarLink to="/portfolio">🛠️ Portfolio</NavbarLink>
          <NavbarLink to="/me">🙋‍♂️ O mnie</NavbarLink>
        </NavbarMenu>
      </Navbar>
      <main>
        <Outlet />
      </main>
      <Footer>
        <FooterLink to="/">🏠 Strona główna</FooterLink>
        <FooterLink to="/blog">📝 Blog</FooterLink>
        <FooterLink to="/learning">🏫 Learning</FooterLink>
        <FooterLink to="/portfolio">🛠️ Portfolio</FooterLink>
        <FooterLink to="/me">🙋‍♂️ O mnie</FooterLink>
        <FooterLink to="/search">🔍 Szukaj</FooterLink>
      </Footer>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  const renderError = (title: string) => {
    return (
      <div className="bg-background">
        <div className="prose container min-h-dvh text-center justify-center items-center flex flex-col">
          <h1>{title}</h1>
          <Button asChild size="sm" className="no-underline">
            <LinkWithPrefetch to="/">Powrót do strony głównej</LinkWithPrefetch>
          </Button>
        </div>
      </div>
    );
  };

  if (isRouteErrorResponse(error)) {
    return renderError(`${error.status}: ${error.statusText}`);
  }

  if (error instanceof Error) {
    return renderError(`${error.name}: ${error.message}`);
  }

  return renderError("Oops... Wystąpił błąd");
}
