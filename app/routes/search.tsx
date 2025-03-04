import { useCallback, useEffect, useRef } from "react";
import {
  Form,
  useLoaderData,
  type ClientLoaderFunctionArgs,
} from "react-router";
import { IconSearch } from "@tabler/icons-react";

import Articles from "~/components/blog/articles";
import Courses from "~/components/learning/courses";
import Projects from "~/components/portfolio/projects";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Seo } from "~/components/ui/seo";
import { getArticles } from "~/lib/articles";
import { getCourses } from "~/lib/courses";
import { getProjects } from "~/lib/projects";
import { cacheServerLoader } from "~/lib/cache";
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

  return {
    articles,
    courses,
    projects,
  };
}

export async function clientLoader({
  request,
  serverLoader,
}: ClientLoaderFunctionArgs) {
  const results = await cacheServerLoader(
    request.url,
    serverLoader<typeof loader>
  );
  const query = validateSearhQuery(request.url);

  const searchResults = getSearchResults(results, query);

  const resultsCount = getSearchResultsLength(searchResults);

  return {
    ...searchResults,
    resultsCount,
    query,
  };
}

clientLoader.hydrate = true;

export default function Search() {
  const { query, articles, courses, projects, resultsCount } =
    useLoaderData<typeof clientLoader>();

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [ref]);

  const renderResults = useCallback(() => {
    if (!query) {
      return null;
    }

    if (resultsCount === 0) {
      return <h2>Brak wyników wyszukiwania dla zapytania: {query}</h2>;
    }

    return (
      <>
        <h2>Wyniki wyszukiwania ({resultsCount})</h2>

        {articles.length > 0 && (
          <section>
            <h3>Artykuły ({articles.length})</h3>
            <Articles className="px-0 !grid-cols-1" articles={articles} />
          </section>
        )}

        {courses.length > 0 && (
          <section>
            <h3>Kursy ({courses.length})</h3>
            <Courses className="px-0 !grid-cols-1" courses={courses} />
          </section>
        )}

        {projects.length > 0 && (
          <section>
            <h3>Projekty ({projects.length})</h3>
            <Projects className="px-0 !grid-cols-1" projects={projects} />
          </section>
        )}
      </>
    );
  }, [articles, courses, query, resultsCount]);

  return (
    <section className="prose max-w-full">
      <Seo
        title={
          query
            ? `(${resultsCount}) Rezultaty wyszukiwania dla ${query}`
            : "Szukaj"
        }
      />

      <header className="container pb-0">
        <h1 className="mb-0">Szukaj</h1>
        <p>Wskazówka: Obszary po których możesz szukać:</p>
        <ul>
          <li>Artykuły: (tytuł, opis, słowa klucz, kategorie, zawartość)</li>
          <li>Kursy: (tytuł, opis, słowa klucz, kategorie, zawartość)</li>
          <li>Projekty: (tytuł, opis, słowa klucz, technologie, zawartość)</li>
        </ul>
        <p>
          Możesz też wkleić skopiowany link aby spróbować przejść do wskazanej
          strony
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
          type="text"
          name={queryParamName}
          placeholder="Treść zapytania"
          defaultValue={query ?? ""}
          required
          className="flex-1 relative"
        />

        <Button type="submit">
          <IconSearch className="h-5 w-5 mr-1" />
          Szukaj
        </Button>
      </Form>

      <div className="container pt-0">{renderResults()}</div>
    </section>
  );
}
