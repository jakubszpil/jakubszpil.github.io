import { createPath, redirect } from "react-router";

import { fetch } from "@/shared/utils/fetch";
import { isValidUrl } from "@/shared/utils/url";

export type SearchResults = Record<string, unknown[]>;

export async function getSearchResults<TSearchResults extends SearchResults>(
  request: Request,
  query: string | null
): Promise<TSearchResults> {
  const response = await fetch("/content/search.json", {
    cache: "force-cache",
    signal: request.signal,
  });

  const checkIfMatchesQuery = (i: unknown): boolean =>
    !query
      ? false
      : JSON.stringify(i).toLowerCase().includes(query.toLowerCase());

  const results: TSearchResults = await response.json();

  return Object.fromEntries(
    Object.entries(results).map(([key, results]) => [
      key,
      results.filter(checkIfMatchesQuery),
    ])
  ) as TSearchResults;
}

export async function getSearchResultsLength<
  TSearchResults extends SearchResults
>(searchResults: TSearchResults): Promise<number> {
  return Object.values(searchResults).reduce<number>(
    (count, { length }) => count + length,
    0
  );
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
