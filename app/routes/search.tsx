import { useCallback, useEffect, useRef } from "react";
import {
  Form,
  useLoaderData,
  useLocation,
  type ClientLoaderFunctionArgs,
  type Location,
} from "react-router";

import { ArticleCards } from "@packages/feature-articles";
import { ArticleService } from "@packages/feature-articles/server";
import { CourseCards } from "@packages/feature-courses";
import { CourseService } from "@packages/feature-courses/server";
import { ProjectCards } from "@packages/feature-projects";
import { ProjectService } from "@packages/feature-projects/server";
import { Input, Button, IconSearch, createMetaTags } from "@packages/shared";

import {
  getSearchResults,
  getSearchResultsLength,
  queryParamName,
  validateSearhQuery,
} from "../lib/search";

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

export const meta = createMetaTags<typeof clientLoader>(({ loaderData }) => ({
  title: loaderData?.query
    ? `(${loaderData.count}) Rezultaty wyszukiwania dla ${loaderData.query}`
    : "Szukaj",
}));

export default function Search() {
  const {
    query,
    results: { articles, courses, projects },
    initialResults,
    count,
  } = useLoaderData<typeof clientLoader>();

  const ref = useRef<HTMLInputElement>(null);
  const location = useLocation() as Location<{ focus: boolean } | undefined>;

  useEffect(() => {
    if (location.state?.focus) ref.current?.focus();
  }, [ref, location.state]);

  const renderArticles = useCallback(() => {
    if (!articles.length) {
      return null;
    }

    return (
      <section>
        <h3>Artykuły ({articles.length})</h3>
        <ArticleCards className="p-0 grid-cols-subgrid" articles={articles} />
      </section>
    );
  }, [articles]);

  const renderCourses = useCallback(() => {
    if (!courses.length) {
      return null;
    }

    return (
      <section>
        <h3>Kursy ({courses.length})</h3>
        <CourseCards className="p-0 grid-cols-subgrid" courses={courses} />
      </section>
    );
  }, [courses]);

  const renderProjects = useCallback(() => {
    if (!projects.length) {
      return null;
    }

    return (
      <section>
        <h3>Projekty ({projects.length})</h3>
        <ProjectCards className="p-0 grid-cols-subgrid" projects={projects} />
      </section>
    );
  }, [projects]);

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
          {renderArticles()}
          {renderCourses()}
          {renderProjects()}
        </div>
      </>
    );
  }, [query, count, ref, renderArticles, renderCourses, renderProjects]);

  const renderDatalistOptions = useCallback(
    <T extends { title: string }>(label: string, group: string, items: T[]) => {
      return items?.map((item, idx) => (
        <option key={`${group}-${idx}`} value={item.title}>
          {label}
        </option>
      ));
    },
    [],
  );

  const renderOptions = useCallback(() => {
    const { articles, courses, projects } = initialResults;

    return (
      <>
        {renderDatalistOptions("📝 Artykuł", "articles", articles)}
        {renderDatalistOptions("🏫 Kurs", "courses", courses)}
        {renderDatalistOptions("🛠️ Projekt", "projects", projects)}
      </>
    );
  }, [initialResults, renderDatalistOptions]);

  return (
    <section className="prose max-w-full">
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

        <datalist id="search-datalist">{renderOptions()}</datalist>

        <Button type="submit">
          <IconSearch className="size-5" />
          Szukaj
        </Button>
      </Form>

      <div className="container pt-0!">{renderResults()}</div>
    </section>
  );
}
