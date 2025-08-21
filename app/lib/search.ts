import { createPath, redirect } from "react-router";

import { isValidUrl } from "./url";
import type { Article } from "./articles";
import type { Course } from "./courses";
import type { Project } from "./projects";

export interface SearchResults {
  articles: Article[];
  courses: Course[];
  projects: Project[];
}

export const queryParamName = "query";

const searchResultsCache = new Map<string, SearchResults>();

export function getSearchResults<TSearchResults extends SearchResults>(
  results: TSearchResults,
  query: string | null
): TSearchResults {
  if (query && searchResultsCache.has(query)) {
    return searchResultsCache.get(query) as TSearchResults;
  }

  const checkIfMatchesQuery = (i: unknown): boolean =>
    !query
      ? false
      : JSON.stringify(i).toLowerCase().includes(query.toLowerCase());

  const searchResults = Object.fromEntries(
    Object.entries(results).map(([key, results]) => [
      key,
      results.filter(checkIfMatchesQuery),
    ])
  ) as TSearchResults;

  if (query) {
    searchResultsCache.set(query, searchResults);
  }

  return searchResults;
}

export function getSearchResultsLength<TSearchResults extends SearchResults>(
  searchResults: TSearchResults
): number {
  return Object.values(searchResults).reduce<number>(
    (count, { length }) => count + length,
    0
  );
}

export function validateSearhQuery(requestUrl: string) {
  const url = new URL(requestUrl);
  const query = url.searchParams.get(queryParamName);

  if (query) {
    if (query === "") {
      url.searchParams.delete(queryParamName);
      throw redirect(url.toString());
    }

    const trimmed = query.trim().split(" ").filter(Boolean).join(" ");

    if (query !== trimmed) {
      if (trimmed) url.searchParams.set(queryParamName, trimmed);
      else url.searchParams.delete(queryParamName);
      throw redirect(url.toString());
    }
  }

  if (query && isValidUrl(query)) {
    const sourceUrl = new URL(requestUrl);
    const url = new URL(query);

    if (sourceUrl.origin === url.origin) {
      throw redirect(createPath(url));
    }
  }

  return query;
}
