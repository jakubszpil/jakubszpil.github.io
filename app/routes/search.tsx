import { useCallback, useEffect, useRef } from "react";
import {
  Form,
  useLoaderData,
  useLocation,
  type ClientLoaderFunctionArgs,
} from "react-router";
import { IconSearch } from "@tabler/icons-react";

import Articles from "~/components/articles";
import Courses from "~/components/courses";
import Projects from "~/components/projects";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Seo } from "~/components/ui/seo";
import { getArticles } from "~/lib/articles";
import { decode, encode } from "~/lib/compress";
import { getCourses } from "~/lib/courses";
import { getProjects } from "~/lib/projects";
import {
  getSearchResults,
  getSearchResultsLength,
  queryParamName,
  validateSearhQuery,
} from "~/lib/search";

export async function loader() {
  const articles = await getArticles({ minify: true });
  const courses = await getCourses({ minify: true });
  const projects = await getProjects({ minify: true });
  return encode({ articles, courses, projects });
}

export async function clientLoader({
  request,
  serverLoader,
}: ClientLoaderFunctionArgs) {
  const searchData = await serverLoader<typeof loader>();
  const data = decode(searchData);

  const query = validateSearhQuery(request.url);
  const results = getSearchResults(data, query);
  const count = getSearchResultsLength(results);

  return {
    results,
    initialResults: data,
    query,
    count,
  };
}

clientLoader.hydrate = true;

export default function Search() {
  const { query, results, initialResults, count } =
    useLoaderData<typeof clientLoader>();

  const ref = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.focus) {
      ref.current?.focus();
    }
  }, [ref, location.state]);

  const renderResults = useCallback(() => {
    if (!query) {
      return null;
    }

    if (!count) {
      return <h2>Brak wyników wyszukiwania dla zapytania: {query}</h2>;
    }

    return (
      <>
        <h2>Wyniki wyszukiwania ({count})</h2>

        {results.articles.length > 0 && (
          <section>
            <h3>Artykuły ({results.articles.length})</h3>
            <Articles
              className="p-0! grid-cols-1!"
              articles={results.articles}
            />
          </section>
        )}

        {results.courses.length > 0 && (
          <section>
            <h3>Kursy ({results.courses.length})</h3>
            <Courses className="p-0! grid-cols-1!" courses={results.courses} />
          </section>
        )}

        {results.projects.length > 0 && (
          <section>
            <h3>Projekty ({results.projects.length})</h3>
            <Projects
              className="p-0! grid-cols-1!"
              projects={results.projects}
            />
          </section>
        )}
      </>
    );
  }, [results, query, count, ref]);

  const renderDatalistOptions = useCallback(
    <T extends { title: string; id: string }>(label: string, items: T[]) => {
      return items?.map((item) => (
        <option key={`datalist-item-${item.id}`} value={item.title}>
          {label}
        </option>
      ));
    },
    []
  );

  return (
    <section className="prose max-w-full">
      <Seo
        title={
          query ? `(${count}) Rezultaty wyszukiwania dla ${query}` : "Szukaj"
        }
      />

      <header className="container pb-0!">
        <h1 className="mb-0">Szukaj</h1>
        <p>Wskazówka: Obszary po których możesz szukać:</p>
        <ul>
          <li>
            Artykuły: (tytuł, opis, słowa klucz, kategorie, długość czytania)
          </li>
          <li>
            Kursy: (tytuł, opis, słowa klucz, kategorie, długość czytania)
          </li>
          <li>Projekty: (tytuł, opis, słowa klucz, technologie)</li>
        </ul>
        <p>
          Możesz też wkleić skopiowany link aby spróbować przejść do wskazanej
          strony
        </p>
      </header>

      <Form
        preventScrollReset={true}
        method="get"
        className="container py-0! bg-background flex gap-2"
        action="/search"
      >
        <Input
          ref={ref}
          key={query}
          type="search"
          name={queryParamName}
          placeholder="Treść zapytania"
          defaultValue={query ?? ""}
          required
          className="flex-1 relative"
          list="search-datalist"
        />

        <datalist id="search-datalist">
          {renderDatalistOptions("📝 Artykuł", initialResults?.articles)}
          {renderDatalistOptions("🏫 Kurs", initialResults?.courses)}
          {renderDatalistOptions("🛠️ Projekt", initialResults?.projects)}
        </datalist>

        <Button type="submit">
          <IconSearch className="size-5" />
          Szukaj
        </Button>
      </Form>

      <div className="container pt-0!">{renderResults()}</div>
    </section>
  );
}
