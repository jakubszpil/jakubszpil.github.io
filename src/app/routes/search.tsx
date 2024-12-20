import { useCallback } from "react";
import {
  Form,
  useLoaderData,
  useLocation,
  type LoaderFunctionArgs,
} from "react-router";
import { IconSearch } from "@tabler/icons-react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { type LinkWithPrefetchLocationState } from "~/components/ui/link-with-prefetch";
import { Seo } from "~/components/ui/seo";
import {
  getSearchResults,
  getSearchResultsLength,
  queryParamName,
  validateSearhQuery,
} from "~/lib/search";
import type { Article } from "~/modules/articles/lib/articles";
import Articles from "~/modules/articles/components/articles";
import type { Course } from "~/modules/courses/lib/courses";
import Courses from "~/modules/courses/components/courses";

export async function loader({ request }: LoaderFunctionArgs) {
  const query = await validateSearhQuery(request);

  const searchResults = await getSearchResults<{
    articles: Article[];
    courses: Course[];
  }>(request, query);

  const resultsCount = await getSearchResultsLength(searchResults);

  return {
    ...searchResults,
    query,
    resultsCount,
  };
}

export default function Search() {
  const { query, articles, courses, resultsCount } =
    useLoaderData<typeof loader>();

  const { pathname } = useLocation();

  const renderResults = useCallback(() => {
    if (!query) {
      return null;
    }

    if (resultsCount === 0) {
      return <h2>Brak wyników wyszukiwania dla zapytania: {query}</h2>;
    }

    const locationState: LinkWithPrefetchLocationState = {
      pathname,
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
              prefix="/blog"
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
              prefix="/learning"
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
          name={queryParamName}
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
