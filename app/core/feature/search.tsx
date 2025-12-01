import { useCallback, useEffect, useRef } from "react";
import {
  Form,
  useLoaderData,
  useLocation,
  type ClientLoaderFunctionArgs,
  type Location,
} from "react-router";

import Posts from "../../components/posts";
import Projects from "../../components/projects";
import Seo from "../../components/seo";
import { Button } from "../../components/ui/button";
import { IconSearch } from "../../components/ui/icons";
import { Input } from "../../components/ui/input";
import { ArticleService } from "../../lib/articles";
import { CourseService } from "../../lib/courses";
import { ProjectService } from "../../lib/projects";
import {
  getSearchResults,
  getSearchResultsLength,
  queryParamName,
  validateSearhQuery,
} from "../../lib/search";

export async function loader() {
  const articles = await ArticleService.findAll();
  const courses = await CourseService.findAll();
  const projects = await ProjectService.findAll();
  return { articles, courses, projects };
}

export async function clientLoader({
  request,
  serverLoader,
}: ClientLoaderFunctionArgs) {
  const initialResults = await serverLoader<typeof loader>();

  const query = validateSearhQuery(request.url);
  const results = getSearchResults(initialResults, query);
  const count = getSearchResultsLength(results);

  return {
    results,
    initialResults,
    query,
    count,
  };
}

clientLoader.hydrate = true;

export default function Search() {
  const { query, results, initialResults, count } =
    useLoaderData<typeof clientLoader>();

  const ref = useRef<HTMLInputElement>(null);
  const location = useLocation() as Location<{ focus: boolean } | undefined>;

  useEffect(() => {
    if (location.state?.focus) ref.current?.focus();
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

        <div className="grid grid-cols-1">
          {results.articles.length > 0 && (
            <section>
              <h3>Artykuły ({results.articles.length})</h3>
              <Posts
                pathPrefix="/blog"
                className="p-0 grid-cols-subgrid"
                posts={results.articles}
              />
            </section>
          )}

          {results.courses.length > 0 && (
            <section>
              <h3>Kursy ({results.courses.length})</h3>
              <Posts
                pathPrefix="/learning"
                className="p-0 grid-cols-subgrid"
                posts={results.courses}
              />
            </section>
          )}

          {results.projects.length > 0 && (
            <section>
              <h3>Projekty ({results.projects.length})</h3>
              <Projects
                className="p-0 grid-cols-subgrid"
                projects={results.projects}
              />
            </section>
          )}
        </div>
      </>
    );
  }, [results, query, count, ref]);

  const renderDatalistOptions = useCallback(
    <T extends { title: string }>(label: string, group: string, items: T[]) => {
      return items?.map((item, idx) => (
        <option key={`${group}-${idx}`} value={item.title}>
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
          className="flex-1 relative text-sm"
          list="search-datalist"
        />

        <datalist id="search-datalist">
          {renderDatalistOptions(
            "📝 Artykuł",
            "articles",
            initialResults?.articles
          )}
          {renderDatalistOptions("🏫 Kurs", "courses", initialResults?.courses)}
          {renderDatalistOptions(
            "🛠️ Projekt",
            "projects",
            initialResults?.projects
          )}
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
