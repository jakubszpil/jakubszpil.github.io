import { Outlet, useLocation, useRouteError } from "react-router";

import Navbar from "../components/navbar";
import NavbarLink from "../components/navbar-link";
import NavbarMenu from "../components/navbar-menu";
import Footer from "../components/footer";
import FooterLink from "../components/footer-link";
import BusyIndicator from "../components/busy-indicator";
import LinkWithPrefetch from "../components/link-with-prefetch";
import { Button } from "../components/ui/button";
import { usePrefetchLinkForInitialLoad } from "../hooks/use-prefetch-link-for-initial-load";
import { useHydrated } from "../hooks/use-hydrated";
import { isRouteErrorResponse } from "../lib/routing";

export default function Layout() {
  const prefetchLink = usePrefetchLinkForInitialLoad();
  const hydrated = useHydrated();
  const location = useLocation();

  if (location.pathname === "/404" && !hydrated) return null;

  return (
    <>
      {prefetchLink}
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
        <FooterLink to="/handbook">📋 Handbook</FooterLink>
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
