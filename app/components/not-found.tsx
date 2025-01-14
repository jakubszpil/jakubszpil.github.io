import { Link, useLocation } from "react-router";

import { Button } from "./ui/button";
import { Seo } from "./ui/seo";

export default function NotFound() {
  const location = useLocation();

  return (
    <header className="container prose">
      <Seo title="404: Nie znaleziono strony" />
      <h1>Oops! Strona nie została znaleziona 🙁 (404)</h1>
      <p>
        Przepraszam, ale strona, której szukasz, nie istnieje. Może to być
        spowodowane jednym z poniższych powodów:
      </p>
      <ul>
        <li>Adres strony został wpisany niepoprawnie.</li>
        <li>Strona została przeniesiona lub usunięta.</li>
        <li>Link może być nieaktualny.</li>
      </ul>
      <p>
        <strong>Co możesz teraz zrobić?</strong>
      </p>
      <ul>
        <li>
          <Button asChild size="sm" variant="link" className="text-base">
            <Link prefetch="intent" replace to={location.pathname}>
              🤔 Sprawdź adres URL
            </Link>
          </Button>
          - Upewnij się, że wpisany adres jest poprawny.
        </li>
        <li>
          <Button asChild size="sm" variant="link" className="text-base">
            <Link prefetch="intent" replace to="/">
              🏠 Przejdź do strony głównej
            </Link>
          </Button>
          - Kliknij tutaj aby wrócić na stronę główną.
        </li>
        <li>
          <Button asChild size="sm" variant="link" className="text-base">
            <Link prefetch="intent" replace to="/search">
              🔍 Szukaj
            </Link>
          </Button>
          - Skorzystaj z wyszukiwarki, aby znaleźć potrzebne informacje.
        </li>
      </ul>
      <p>Dziękuję za zrozumienie i przepraszam za wszelkie niedogodności!</p>
    </header>
  );
}
