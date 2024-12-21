import { createPath, redirect } from "react-router";

import { isValidUrl } from "./url";

export type SearchResults = Record<string, unknown[]>;

export const queryParamName = "query";

export function getSearchResults<TSearchResults extends SearchResults>(
  results: TSearchResults,
  query: string | null
): TSearchResults {
  const checkIfMatchesQuery = (i: unknown): boolean =>
    !query
      ? false
      : JSON.stringify(i).toLowerCase().includes(query.toLowerCase());

  return Object.fromEntries(
    Object.entries(results).map(([key, results]) => [
      key,
      results.filter(checkIfMatchesQuery),
    ])
  ) as TSearchResults;
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

    if (sourceUrl.origin === url.origin)
      throw redirect(createPath(url).replace("#/", ""));
  }

  return query;
}
