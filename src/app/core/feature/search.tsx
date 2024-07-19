import { useCallback } from "react";
import { Form, redirect } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";

import {
  defineLoader,
  useLoader,
  Button,
  Input,
  Seo,
  type Resource,
} from "@libs/shared";
import { getArticles, Articles } from "@libs/articles";
import { getProjects } from "@libs/projects";
import { Courses, getCourses } from "@libs/courses";

const isValidUrl = (url: unknown) => {
  try {
    new URL(url as URL);
    return true;
  } catch (e) {
    return false;
  }
};

export const loader = defineLoader(async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  if (query) {
    if (query === "") {
      url.searchParams.delete("q");
      throw redirect(url.toString());
    }

    const trimmed = query.trim().split(" ").filter(Boolean).join(" ");

    if (query !== trimmed) {
      if (trimmed) url.searchParams.set("q", trimmed);
      else url.searchParams.delete("q");
      throw redirect(url.toString());
    }
  }

  if (!query) {
    return {
      query,
      articles: [],
      courses: [],
      projects: [],
    };
  }

  if (isValidUrl(query)) {
    const requestUrl = new URL(request.url);
    const url = new URL(query);

    if (requestUrl.origin === url.origin) {
      throw redirect(url.pathname);
    }
  }

  const test = <T extends Resource>(i: T): boolean => {
    if (!query) return false;
    const s = JSON.stringify(i);
    const q = query.toLowerCase();

    return s.toLowerCase().includes(q);
  };

  const articles = (await getArticles()).filter(test);
  const courses = (await getCourses()).filter(test);
  const projects = (await getProjects()).filter(test);

  const resultsCount = articles.length + projects.length + courses.length;

  return { query, articles, courses, projects, resultsCount };
});

export default function Search() {
  const { query, articles, projects, courses, resultsCount } =
    useLoader<typeof loader>();

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

        {projects.length > 0 && (
          <section>
            <h3>Projekty ({projects.length})</h3>
          </section>
        )}

        {courses.length > 0 && (
          <section>
            <h3>Kursy ({courses.length})</h3>
            <Courses className="px-0 !grid-cols-1" courses={courses} />
          </section>
        )}
      </>
    );
  }, [articles, courses, projects.length, query, resultsCount]);

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
        <h1 className="mb-0">🔍 Wyszukaj</h1>
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

      <Form method="get" className="container py-0 bg-background flex gap-2">
        <Input
          key={query}
          type="text"
          name="q"
          placeholder="Treść zapytania"
          defaultValue={query ?? ""}
          required
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
