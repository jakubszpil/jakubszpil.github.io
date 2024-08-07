import { createPath, redirect } from "react-router-dom";

import type { Article } from "@/modules/articles/data-access/articles";
import type { Course } from "@/modules/courses/data-access/courses";
import { fetch } from "@/shared/utils/fetch";
import { isValidUrl } from "@/shared/utils/url";

export type SearchResults = {
  articles: Article[];
  courses: Course[];
};

export async function getSearchResults(
  request: Request,
  query: string | null
): Promise<SearchResults> {
  const response = await fetch("/content/search.json", {
    cache: "force-cache",
    signal: request.signal,
  });

  const checkIfMatchesQuery = (i: unknown): boolean =>
    !query
      ? false
      : JSON.stringify(i).toLowerCase().includes(query.toLowerCase());

  const results: SearchResults = await response.json();

  return {
    articles: results.articles.filter(checkIfMatchesQuery),
    courses: results.courses.filter(checkIfMatchesQuery),
  };
}

export async function validateSearhQuery(request: Request) {
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

  if (query && isValidUrl(query)) {
    const requestUrl = new URL(request.url);
    const url = new URL(query);

    if (requestUrl.origin === url.origin)
      throw redirect(createPath(url).replace("#/", ""));
  }

  return query;
}
