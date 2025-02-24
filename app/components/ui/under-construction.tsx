import { Link } from "react-router";

import { Button } from "./button";

export function UnderConstruction() {
  return (
    <header className="prose container">
      <h1>Strona, której szukasz, jest jeszcze niedostępna.</h1>
      <p>Wróć tutaj za jakiś czas 😜</p>
      <Button asChild variant="secondary" className="no-underline" size="sm">
        <Link prefetch="intent" to="/">
          Powrót do strony głównej
        </Link>
      </Button>
    </header>
  );
}
