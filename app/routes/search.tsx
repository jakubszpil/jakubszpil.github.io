import { useCallback } from "react";
import { useLoaderData, type ClientLoaderFunctionArgs } from "react-router";

import { ArticleCards } from "../components/article-cards";
import { CourseCards } from "../components/course-cards";
import { ProjectCards } from "../components/project-cards";
import { SearchForm } from "../components/search-form";
import { getArticles, type ArticleFeed } from "../lib/articles";
import { getCourses, type CourseFeed } from "../lib/courses";
import { createMetaTags } from "../lib/meta";
import { getProjects, type ProjectFeed } from "../lib/projects";
import {
  getSearchResults,
  getSearchResultsLength,
  validateSearhQuery,
} from "../lib/search";

export async function loader() {
  const articles = await getArticles();
  const courses = await getCourses();
  const projects = await getProjects();
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
  const { query, results, initialResults, count } =
    useLoaderData<typeof clientLoader>();

  const renderArticles = useCallback((articles: ArticleFeed[]) => {
    if (!articles.length) {
      return null;
    }

    return (
      <section>
        <h3>Artykuły ({articles.length})</h3>
        <ArticleCards className="p-0 grid-cols-subgrid" articles={articles} />
      </section>
    );
  }, []);

  const renderCourses = useCallback((courses: CourseFeed[]) => {
    if (!courses.length) {
      return null;
    }

    return (
      <section>
        <h3>Kursy ({courses.length})</h3>
        <CourseCards className="p-0 grid-cols-subgrid" courses={courses} />
      </section>
    );
  }, []);

  const renderProjects = useCallback((projects: ProjectFeed[]) => {
    if (!projects.length) {
      return null;
    }

    return (
      <section>
        <h3>Projekty ({projects.length})</h3>
        <ProjectCards className="p-0 grid-cols-subgrid" projects={projects} />
      </section>
    );
  }, []);

  const renderResults = useCallback(() => {
    if (!query) {
      return null;
    }

    if (!count) {
      return <h2>Brak wyników wyszukiwania dla zapytania: {query}</h2>;
    }

    const { articles, courses, projects } = results;

    return (
      <>
        <h2>Wyniki wyszukiwania ({count})</h2>

        <div className="grid grid-cols-1">
          {renderArticles(articles)}
          {renderCourses(courses)}
          {renderProjects(projects)}
        </div>
      </>
    );
  }, [query, count, results, renderArticles, renderCourses, renderProjects]);

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

      <SearchForm
        action="/search"
        query={query}
        articles={initialResults?.articles ?? []}
        courses={initialResults?.courses ?? []}
        projects={initialResults?.projects ?? []}
      />

      <div className="container pt-0!">{renderResults()}</div>
    </section>
  );
}
