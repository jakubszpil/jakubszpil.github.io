import { useCallback } from "react";
import {
  isRouteErrorResponse,
  Outlet,
  useLocation,
  useRouteError,
} from "react-router";

import Navbar from "~/components/navbar";
import NavbarLink from "~/components/navbar-link";
import NavbarMenu from "~/components/navbar-menu";
import Footer from "~/components/footer";
import FooterLink from "~/components/footer-link";
import BusyIndicator from "~/components/busy-indicator";
import NotFound from "~/components/not-found";
import { Button } from "~/components/ui/button";
import { LinkWithPrefetch } from "~/components/ui/link-with-prefetch";
import { usePrefetchLinkForInitialLoad } from "~/hooks/use-prefetch-link-for-initial-load";

export default function Layout() {
  const prefetchLink = usePrefetchLinkForInitialLoad();

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
  const location = useLocation();

  const renderError = useCallback(() => {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return <NotFound />;
      }

      return (
        <>
          <h1>
            {error.status}: {error.statusText}
          </h1>
          <p>{error.data}</p>
          <Button asChild className="no-underline" variant="outline" size="sm">
            <LinkWithPrefetch to="/">Powrót do strony głównej</LinkWithPrefetch>
          </Button>
        </>
      );
    }

    console.error(error);

    if (error instanceof Error) {
      return (
        <>
          <h1>
            {error.name}: {error.message}
          </h1>
          <pre>{error.stack}</pre>
          <Button asChild className="no-underline" variant="outline" size="sm">
            <LinkWithPrefetch replace to={location.pathname}>
              Odśwież stronę
            </LinkWithPrefetch>
          </Button>
        </>
      );
    }

    return <h1>Wystąpił nieoczekiwany błąd</h1>;
  }, [error]);

  return <header className="container prose mt-36">{renderError()}</header>;
}
