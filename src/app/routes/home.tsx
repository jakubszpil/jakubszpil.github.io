import { Link, useLoaderData } from "react-router";

import { getArticles } from "~/modules/articles/lib/articles";
import Articles from "~/modules/articles/components/articles";
import { getCourses } from "~/modules/courses/lib/courses";
import Courses from "~/modules/courses/components/courses";
import { Button } from "~/components/ui/button";
import { Seo } from "~/components/ui/seo";

export async function loader() {
  const articles = await getArticles(3);
  const courses = await getCourses(3);

  return {
    articles,
    courses,
  };
}

export default function Home() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Seo
        title="Strona główna"
        description="Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢"
        keywords={[
          "blog",
          "portfolio",
          "kursy",
          "artykuły",
          "frontend",
          "web development",
          "learning",
        ]}
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
            <Link prefetch="intent" to="/blog">
              📝 Najnowsze artykuły
            </Link>
          </Button>
          <Button size="sm" variant="outline" asChild className="!no-underline">
            <Link prefetch="intent" to="/learning">
              🏫 Lista kursów
            </Link>
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
            <Link prefetch="intent" to="/blog">
              Zobacz wszystkie artykuły
            </Link>
          </Button>
        </nav>
      </section>

      <section className="prose max-w-full bg-neutral-50 border-t border-b border-t-neutral-200 border-b-neutral-200 dark:bg-neutral-900 dark:border-t-neutral-800 dark:border-b-neutral-800">
        <header className="container pt-12 pb-0">
          <h2 className="mt-0">Kursy 🏫 (a.k.a Learning)</h2>
          <p>
            Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne
            frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony
            oraz aplikacje internetowe.
          </p>
        </header>
        <Courses variant="outline" className="" courses={data.courses} />
        <nav className="container pt-0 pb-12">
          <Button asChild size="sm" className="!no-underline">
            <Link prefetch="intent" to="/learning">
              Zobacz wszystkie kursy
            </Link>
          </Button>
        </nav>
      </section>

      <section className="prose max-w-full bg-background">
        <header className="container">
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
