import { Form, redirect } from "react-router-dom";

import {
  defineLoader,
  useLoader,
  Button,
  Input,
  Seo,
  Resource,
  ResourceFrontmatter,
} from "@libs/shared";
import { Article, getArticles, Articles } from "@libs/articles";
import { Project, getProjects } from "@libs/projects";
import { Course, Courses, getCourses } from "@libs/courses";
import { IconSearch } from "@tabler/icons-react";

export const loader = defineLoader(({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  if (query) {
    if (query === "") {
      url.searchParams.delete("q");
      throw redirect(url.toString());
    }

    const trimmed = query.trim().split(" ").filter(Boolean).join(" ");

    if (query !== trimmed) {
      url.searchParams.set("q", trimmed);
      throw redirect(url.toString());
    }
  }

  const test = <T extends ResourceFrontmatter<Record<string, unknown>>>(
    i: Resource<T>
  ): boolean => {
    if (!query) return false;
    const s = JSON.stringify(i);
    const q = query.toLowerCase();

    return s.toLowerCase().includes(q);
  };

  const articles = getArticles().filter(test);
  const projects = getProjects().filter(test);
  const courses = getCourses().filter(test);

  return { query, articles, projects, courses };
});

export default function Search() {
  const { query, articles, projects, courses } = useLoader<typeof loader>();

  const resultsCount = articles.length + projects.length + courses.length;

  const renderResults = (
    query: string | null,
    resultsCount: number,
    articles: Article[],
    projects: Project[],
    courses: Course[]
  ) => {
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
  };

  return (
    <section className="prose max-w-full">
      <Seo title={`Szukaj${query ? `: ${query}` : ""}`} />

      <header className="container pb-0">
        <h1 className="mb-0">Wyszukaj</h1>
        <p>Wskazówka: Obszary po których możesz szukać:</p>
        <ul>
          <li>Artykuły: (tytuł, opis, słowa klucz, kategorie, zawartość)</li>
          <li>Kursy: (tytuł, opis, słowa klucz, kategorie, zawartość)</li>
          <li>Projekty: (tytuł, opis, słowa klucz, technologie, zawartość)</li>
        </ul>
      </header>

      <Form method="get" className="container pb-0 flex gap-2">
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

      <div className="container pt-0">
        {renderResults(query, resultsCount, articles, projects, courses)}
      </div>
    </section>
  );
}
