import { Button } from "@libs/shared";
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <>
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
          <Button
            asChild
            size="sm"
            variant="link"
            className="text-base no-underline hover:underline"
          >
            <Link to={location.pathname}>🤔 Sprawdź adres URL</Link>
          </Button>
          - Upewnij się, że wpisany adres jest poprawny.
        </li>
        <li>
          <Button
            asChild
            size="sm"
            variant="link"
            className="text-base no-underline hover:underline"
          >
            <Link to="/">🏠 Przejdź do strony głównej</Link>
          </Button>
          - Kliknij tutaj aby wrócić na stronę główną.
        </li>
        <li>
          <Button
            asChild
            size="sm"
            variant="link"
            className="text-base no-underline hover:underline"
          >
            <Link to="/szukaj">🔍 Szukaj</Link>
          </Button>
          - Skorzystaj z naszej wyszukiwarki, aby znaleźć potrzebne informacje.
        </li>
      </ul>
      <p>Dziękuję za zrozumienie i przepraszam za wszelkie niedogodności!</p>
    </>
  );
}
