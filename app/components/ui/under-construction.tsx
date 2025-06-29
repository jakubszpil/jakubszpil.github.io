import { Button } from "./button";
import { LinkWithPrefetch } from "./link-with-prefetch";

export function UnderConstruction() {
  return (
    <header className="prose container">
      <h1>Strona, której szukasz, jest jeszcze niedostępna.</h1>
      <p>Wróć tutaj za jakiś czas 😜</p>
      <Button asChild variant="secondary" className="no-underline" size="sm">
        <LinkWithPrefetch to="/">Powrót do strony głównej</LinkWithPrefetch>
      </Button>
    </header>
  );
}
