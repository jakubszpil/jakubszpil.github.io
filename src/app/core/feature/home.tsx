import { Link } from "react-router-dom";

import { defineLoader, useLoader, Button, Seo } from "@libs/shared";
import { getArticles, Articles } from "@libs/articles";
import { getProjects } from "@libs/projects";

export const loader = defineLoader(() => {
  const articles = getArticles(3);
  const projects = getProjects(3);

  return {
    articles,
    projects,
  };
});

export default function Home() {
  const data = useLoader<typeof loader>();

  return (
    <>
      <Seo
        title="Strona główna"
        description="Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢"
      />

      <header className="container prose">
        <h1 className="mt-8">Cześć, jestem Kuba! 🙋‍♂️</h1>
        <p className="max-w-2xl">
          Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o
          tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz
          wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię
          moimi ostatnimi projektami. Bon vojage! 🚢
        </p>
        <nav className="grid grid-flow-row sm:grid-flow-col sm:w-max gap-2">
          <Button size="sm" asChild className="!no-underline">
            <Link to="/blog">📝 Najnowsze artykuły</Link>
          </Button>
          <Button size="sm" variant="outline" asChild className="!no-underline">
            <Link to="/learning">🏫 Lista kursów</Link>
          </Button>
        </nav>
      </header>

      <section className="prose max-w-full bg-background">
        <header className="container pb-0">
          <h2>Artykuły 📝</h2>
          <p>
            Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML,
            CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki
            w tworzeniu stron oraz aplikacji internetowych.
          </p>
          <p>
            Czytaj, ucz się i bądź na bieżąco z najnowszymi trendami w świecie
            frontend developmentu!
          </p>
        </header>
        <Articles variant="outline" className="" articles={data.articles} />
        <nav className="container pt-0">
          <Button asChild size="sm" className="!no-underline">
            <Link to="/blog">Zobacz wszystkie artykuły</Link>
          </Button>
        </nav>
      </section>

      <section className="prose max-w-full bg-background">
        <header className="container pb-0">
          <h2>Kursy 🏫 (a.k.a Learning)</h2>
          <p>
            Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne
            frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony
            oraz aplikacje internetowe.
          </p>
        </header>
      </section>

      <section className="prose max-w-full bg-background">
        <header className="container pb-0">
          <h2>Portfolio 🛠️</h2>
          <p>
            Oto moje portfolio frontendowe z projektami nowoczesnych stron i
            aplikacji internetowych. Sprawdź moje realizacje i zobacz, co
            potrafię!
          </p>
        </header>
      </section>
    </>
  );
}
