import { useLoaderData } from "react-router";

import { Seo } from "~/components/ui/seo";
import Socials from "~/components/socials";

export async function loader() {
  const currentDate = new Date().getFullYear();
  const startDate = new Date(2021, 6, 1).getFullYear();
  return currentDate - startDate;
}

export default function About() {
  const years = useLoaderData<typeof loader>();

  return (
    <div className="container prose">
      <Seo
        title="O mnie"
        description="Cześć! Nazywam się Kuba i jestem frontend developerem z 3-letnim doświadczeniem w tworzeniu nowoczesnych, responsywnych i przyjaznych użytkownikowi aplikacji internetowych. Moja przygoda z programowaniem zaczęła się od fascynacji technologią i chęci tworzenia rzeczy, które naprawdę mają wpływ na codzienne życie ludzi."
      />
      <h1>O mnie</h1>
      <p>
        Cześć! Nazywam się Kuba i jestem frontend developerem z {years}-letnim
        doświadczeniem w tworzeniu nowoczesnych, responsywnych i przyjaznych
        użytkownikowi aplikacji internetowych. Moja przygoda z programowaniem
        zaczęła się od fascynacji technologią i chęci tworzenia rzeczy, które
        naprawdę mają wpływ na codzienne życie ludzi.
      </p>
      <p>
        Specjalizuję się w pracy w Typescript z React, gdzie przez ostatnie lata
        rozwijałem swoje umiejętności, tworząc zaawansowane interfejsy
        użytkownika oraz dynamiczne aplikacje internetowe dla sektoru
        lotniczego. Nie są mi również obce inne popularne frameworki JavaScript,
        takie jak Angular i Vue.
      </p>
      <p>
        Z radością podchodzę do wyzwań związanych z każdym z nich, dostosowując
        się do wymagań projektu i technologii, które najlepiej odpowiadają
        potrzebom użytkowników.
      </p>
      <p>
        Poza technologią, cenię sobie współpracę w zespole oraz możliwość
        ciągłego rozwoju i nauki nowych rzeczy. Każdy projekt traktuję jako
        okazję do doskonalenia swoich umiejętności i dostarczania wartościowych
        rozwiązań dla użytkowników.
      </p>
      <p>
        W wolnym czasie lubię śledzić najnowsze trendy w branży, uczestniczyć w
        konferencjach i meet-upach oraz eksperymentować z nowymi narzędziami i
        technologiami.
      </p>
      <p>
        Zapraszam do kontaktu, jeśli szukasz doświadczonego frontend developera,
        który z pasją i zaangażowaniem podejdzie do Twojego projektu.
      </p>

      <nav className="flex items-center gap-1">
        <Socials variant="outline" />
      </nav>
    </div>
  );
}
