import { useCallback, useEffect, useRef } from "react";
import {
  Await,
  Form,
  useLoaderData,
  useLocation,
  type ClientLoaderFunctionArgs,
} from "react-router";
import { IconSearch } from "@tabler/icons-react";

import Articles from "~/components/blog/articles";
import Courses from "~/components/learning/courses";
import Projects from "~/components/portfolio/projects";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Seo } from "~/components/ui/seo";
import { getArticles, type Article } from "~/lib/articles";
import { getCourses, type Course } from "~/lib/courses";
import { getProjects, type Project } from "~/lib/projects";
import {
  getSearchResults,
  getSearchResultsLength,
  queryParamName,
  validateSearhQuery,
} from "~/lib/search";

export async function loader() {
  const articles = await getArticles({ minify: false });
  const courses = await getCourses({ minify: false });
  const projects = await getProjects({ minify: false });
  return { articles, courses, projects };
}

export async function clientLoader({
  request,
  serverLoader,
}: ClientLoaderFunctionArgs) {
  const response = serverLoader<typeof loader>();
  const query = validateSearhQuery(request.url);

  const results = response.then((results) => {
    const searchResults = getSearchResults(results, query);
    const count = getSearchResultsLength(searchResults);

    return {
      ...searchResults,
      count,
    };
  });

  return {
    results,
    initialResults: response,
    query,
  };
}

clientLoader.hydrate = true;

export default function Search() {
  const { query, results, initialResults } =
    useLoaderData<typeof clientLoader>();
  const ref = useRef<HTMLInputElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.focus) {
      ref.current?.focus();
    }
  }, [ref, location.state]);

  const renderResults = useCallback(
    (results: {
      count: number;
      articles: Article[];
      courses: Course[];
      projects: Project[];
    }) => {
      if (!query) {
        return null;
      }

      if (!results.count) {
        return <h2>Brak wyników wyszukiwania dla zapytania: {query}</h2>;
      }

      return (
        <>
          <h2>Wyniki wyszukiwania ({results.count})</h2>

          {results.articles.length > 0 && (
            <section>
              <h3>Artykuły ({results.articles.length})</h3>
              <Articles
                className="px-0 !grid-cols-1"
                articles={results.articles}
              />
            </section>
          )}

          {results.courses.length > 0 && (
            <section>
              <h3>Kursy ({results.courses.length})</h3>
              <Courses
                className="px-0 !grid-cols-1"
                courses={results.courses}
              />
            </section>
          )}

          {results.projects.length > 0 && (
            <section>
              <h3>Projekty ({results.projects.length})</h3>
              <Projects
                className="px-0 !grid-cols-1"
                projects={results.projects}
              />
            </section>
          )}
        </>
      );
    },
    [query, ref]
  );

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
    <Await resolve={results}>
      {(results) => (
        <section className="prose max-w-full">
          <Seo
            title={
              query
                ? `(${results.count}) Rezultaty wyszukiwania dla ${query}`
                : "Szukaj"
            }
          />

          <header className="container pb-0">
            <h1 className="mb-0">Szukaj</h1>
            <p>Wskazówka: Obszary po których możesz szukać:</p>
            <ul>
              <li>
                Artykuły: (tytuł, opis, słowa klucz, kategorie, zawartość)
              </li>
              <li>Kursy: (tytuł, opis, słowa klucz, kategorie, zawartość)</li>
              <li>
                Projekty: (tytuł, opis, słowa klucz, technologie, zawartość)
              </li>
            </ul>
            <p>
              Możesz też wkleić skopiowany link aby spróbować przejść do
              wskazanej strony
            </p>
          </header>

          <Form
            preventScrollReset={true}
            method="get"
            className="container py-0 bg-background flex gap-2"
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

            <Await resolve={initialResults}>
              {(data) => (
                <datalist id="search-datalist">
                  {renderDatalistOptions("📝 Artykuł", data?.articles)}
                  {renderDatalistOptions("🏫 Kurs", data?.courses)}
                  {renderDatalistOptions("🛠️ Projekt", data?.projects)}
                </datalist>
              )}
            </Await>

            <Button type="submit">
              <IconSearch className="h-5 w-5 mr-1" />
              Szukaj
            </Button>
          </Form>

          <div className="container pt-0">{renderResults(results)}</div>
        </section>
      )}
    </Await>
  );
}
