import { queryClient } from "./query-client";

const identifierValue = import.meta.env.BUILD_ID;
const identifierKey = "v";

class PrefetchCache {
  key = "prefetch-cache";

  entries = new Set(JSON.parse(sessionStorage.getItem(this.key) || "[]"));

  constructor(cache: Cache) {
    const keys = cache.keys();

    keys.then((keys) => {
      keys.forEach((request) => {
        this.entries.add(request.url);
      });
    });

    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem(
        this.key,
        JSON.stringify([...this.entries.values()]),
      );
    });
  }

  has(url: string) {
    return this.entries.has(url);
  }

  add(url: string) {
    this.entries.add(url);
  }
}

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

function createPrefetchCache(cache: Cache) {
  return new PrefetchCache(cache);
}

async function initializePrefetchCache() {
  const storedIdentifierValue = localStorage.getItem(identifierKey);

  if (String(identifierValue) !== String(storedIdentifierValue)) {
    if (storedIdentifierValue) {
      if (await caches.has(storedIdentifierValue)) {
        await caches.delete(storedIdentifierValue);
      }
    }

    localStorage.setItem(identifierKey, identifierValue);
  }

  const cache = await caches.open(identifierValue);
  const prefetchCache = createPrefetchCache(cache);

  return prefetchCache;
}

async function initializeFetchPolyfill() {
  const _fetch = globalThis.fetch;

  type ResponseEntry = [string, ResponseInit];

  async function setCachedResponse(response: Response) {
    const clone = response.clone();
    const data = await clone.text();

    queryClient.setQueryData<ResponseEntry>(
      [response.url],
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

    setCachedResponse(response);

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

export async function initializeFetchPolyfills() {
  const prefetchCache = await initializePrefetchCache();

  await initializeFetchPolyfill();
  await initializePrefetchPolyfill(prefetchCache);
}
