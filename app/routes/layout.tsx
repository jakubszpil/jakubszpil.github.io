import {
  isRouteErrorResponse,
  Link,
  Outlet,
  useRouteError,
} from "react-router";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import NavbarLink from "@/components/navbar-link";
import NavbarMenu from "@/components/navbar-menu";
import Footer from "@/components/footer";
import FooterLink from "@/components/footer-link";
import BusyIndicator from "@/components/busy-indicator";
import NotFound from "@/components/not-found";

export default function Layout() {
  return (
    <>
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

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound />;
    }

    return (
      <header className="container prose">
        <h1>
          {error.status}: {error.statusText}
        </h1>
        <p>{error.data}</p>
        <Button asChild className="no-underline" variant="outline" size="sm">
          <Link prefetch="intent" to="/">
            Powrót do strony głównej
          </Link>
        </Button>
      </header>
    );
  }

  console.error(error);

  return (
    <header className="container prose">
      <h1>Wystąpił nieoczekiwany błąd</h1>
    </header>
  );
}
