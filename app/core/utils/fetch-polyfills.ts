import type { QueryClient } from "@tanstack/react-query";

import { PrefetchCache, PrefetchCachePersister } from "./prefetch-cache";

const identifierValue = import.meta.env.BUILD_ID;
const identifierKey = "v";

function createRequestUrl(requestInfo: RequestInfo | URL) {
  if (requestInfo instanceof URL) {
    return requestInfo;
  }

  if (requestInfo instanceof Request) {
    return new URL(requestInfo.url);
  }

  return new URL(requestInfo, location.origin);
}

function createRequestInit(requestInit?: RequestInit) {
  const init = requestInit ?? {};
  init.cache = "force-cache";
  return init;
}

function createRequest(
  requestInfo: RequestInfo | URL,
  requestInit?: RequestInit,
) {
  const url = createRequestUrl(requestInfo);
  const init = createRequestInit(requestInit);

  url.searchParams.append(identifierKey, identifierValue);

  return new Request(url, init);
}

async function initializePrefetchCache(queryClient: QueryClient) {
  const prefetchCachePersister = new PrefetchCachePersister(identifierValue);

  const entries = await prefetchCachePersister.getEntries();

  const prefetchCache = new PrefetchCache({
    entries,
    queryClient,
    entriesPersister: (entries) => prefetchCachePersister.setEntries(entries),
  });

  return prefetchCache;
}

async function initializeFetchPolyfill(queryClient: QueryClient) {
  const _fetch = globalThis.fetch;

  type ResponseEntry = [string, ResponseInit];

  async function setCachedResponse(request: Request, response: Response) {
    const clone = response.clone();
    const data = await clone.text();

    queryClient.setQueryData<ResponseEntry>(
      [request.url],
      [
        data,
        {
          headers: Object.fromEntries(clone.headers.entries()),
          status: clone.status,
          statusText: clone.statusText,
        },
      ],
    );
  }

  function getCachedResponse(request: Request): Response | null {
    const cachedResponse = queryClient.getQueryData<ResponseEntry>([
      request.url,
    ]);

    if (!cachedResponse) return null;

    return new Response(...cachedResponse);
  }

  globalThis.fetch = async (input, init) => {
    const requestUrl = createRequestUrl(input);

    const isDifferentOrigin = requestUrl.origin !== location.origin;
    const isDataRequest = requestUrl.pathname.endsWith(".data");
    const isJsonRequest = requestUrl.pathname.endsWith(".json");

    if (isDifferentOrigin || !(isDataRequest || isJsonRequest)) {
      return _fetch(input, init);
    }

    const request = createRequest(input, init);

    const cachedResponse = getCachedResponse(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    const response = await _fetch(request);

    setCachedResponse(request, response);

    return response;
  };
}

async function initializePrefetchPolyfill(prefetchCache: PrefetchCache) {
  const _createElement = globalThis.document.createElement;

  globalThis.document.createElement = <K extends keyof HTMLElementTagNameMap>(
    tag: K,
    options?: ElementCreationOptions,
  ) => {
    const element = _createElement.bind(document)(tag, options);

    if (element instanceof HTMLLinkElement) {
      const setAttribute = element.setAttribute;

      element.setAttribute = (key, value) => {
        let pathname: string = value;

        if (element.rel === "prefetch" && key === "href") {
          pathname = `${value}?${identifierKey}=${identifierValue}`;

          const url = new URL(`${location.origin}${pathname}`);

          if (prefetchCache.has(url.href)) return;

          function addEntry() {
            prefetchCache.add(url.href);
            element.removeEventListener("load", addEntry);
          }

          element.addEventListener("load", addEntry);
        }

        setAttribute.call(element, key, pathname);

        return element;
      };
    }

    return element;
  };
}

export async function initializeFetchPolyfills(queryClient: QueryClient) {
  const prefetchCache = await initializePrefetchCache(queryClient);

  await initializeFetchPolyfill(queryClient);
  await initializePrefetchPolyfill(prefetchCache);
}
