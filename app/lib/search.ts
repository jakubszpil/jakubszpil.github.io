import { createPath, redirect } from "react-router";

import { isValidUrl } from "../shared/utils/url";

export const queryParamName = "query";

const searchResultsCache = new Map<string, unknown>();

export function getSearchResults<T extends Record<string, unknown[]>>(
  results: T,
  query: string | null
): T {
  if (query && searchResultsCache.has(query)) {
    return searchResultsCache.get(query) as T;
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
  ) as T;

  if (query) {
    searchResultsCache.set(query, searchResults);
  }

  return searchResults;
}

export function getSearchResultsLength<T extends Record<string, unknown[]>>(
  searchResults: T
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
