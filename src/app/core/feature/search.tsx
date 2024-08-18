import { useCallback } from "react";
import { Form, type LoaderFunctionArgs as LFA } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";

import type { Article } from "@/modules/articles/data-access/articles";
import Articles from "@/modules/articles/ui/articles";
import type { Course } from "@/modules/courses/data-access/courses";
import Courses from "@/modules/courses/ui/courses";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { type LinkWithPrefetchLocationState } from "@/shared/ui/link-with-prefetch";
import { Seo } from "@/shared/ui/seo";
import { json, useLoader } from "@/shared/utils/routing";

import {
  getSearchResults,
  getSearchResultsLength,
  validateSearhQuery,
} from "../data-access/search";

export async function loader({ request }: LFA) {
  const query = await validateSearhQuery(request);

  const searchResults = await getSearchResults<{
    articles: Article[];
    courses: Course[];
  }>(request, query);

  const resultsCount = await getSearchResultsLength(searchResults);

  return json({
    ...searchResults,
    query,
    resultsCount,
  });
}

export default function Search() {
  const { query, articles, courses, resultsCount } = useLoader<typeof loader>();

  const renderResults = useCallback(() => {
    if (!query) {
      return null;
    }

    if (resultsCount === 0) {
      return <h2>Brak wyników wyszukiwania dla zapytania: {query}</h2>;
    }

    const locationState: LinkWithPrefetchLocationState = {
      pathname: `/search?q=${query}`,
      label: "Powrót do wyników wyszukiwania",
    };

    return (
      <>
        <h2>Wyniki wyszukiwania ({resultsCount})</h2>

        {articles.length > 0 && (
          <section>
            <h3>Artykuły ({articles.length})</h3>
            <Articles
              className="px-0 !grid-cols-1"
              articles={articles}
              locationState={locationState}
            />
          </section>
        )}

        {courses.length > 0 && (
          <section>
            <h3>Kursy ({courses.length})</h3>
            <Courses
              className="px-0 !grid-cols-1"
              courses={courses}
              locationState={locationState}
            />
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
      >
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
