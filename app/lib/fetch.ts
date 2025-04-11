const _fetch = globalThis.fetch;
const _createElement = globalThis.document.createElement;
const _timestamp = import.meta.env.TIMESTAMP;
const _storedTimestamp = localStorage.getItem("timestamp");

function createRequestUrl(requestInfo: RequestInfo | URL) {
  if (requestInfo instanceof URL) {
    return requestInfo;
  }

  if (requestInfo instanceof Request) {
    return new URL(requestInfo.url);
  }

  return new URL(requestInfo);
}

function createRequestInit(requestInit?: RequestInit) {
  const init = requestInit ?? {};
  init.cache = "force-cache";
  return init;
}

function createRequest(
  requestInfo: RequestInfo | URL,
  requestInit?: RequestInit
) {
  const url = createRequestUrl(requestInfo);
  const init = createRequestInit(requestInit);

  url.search = "";
  url.searchParams.set("timestamp", _timestamp);

  return new Request(url, init);
}

export async function injectFetchCache() {
  if (Number(_timestamp) !== Number(_storedTimestamp)) {
    if (_storedTimestamp) {
      if (await window.caches.has(_storedTimestamp)) {
        await window.caches.delete(_storedTimestamp);
      }
    }

    localStorage.setItem("timestamp", _timestamp);
  }

  const cache = await window.caches.open(_timestamp);

  globalThis.fetch = async (input, init) => {
    const requestUrl = createRequestUrl(input);

    if (requestUrl.origin !== location.origin) {
      return _fetch(input, init);
    }

    const request = createRequest(input, init);

    const cached = await cache.match(request);

    if (cached) {
      return cached.clone();
    }

    const response = await _fetch(request);

    await cache.put(request, response.clone());

    return response.clone();
  };

  globalThis.document.createElement = <T extends keyof HTMLElementTagNameMap>(
    tag: T,
    options?: ElementCreationOptions
  ) => {
    const element = _createElement.bind(document)(tag, options);

    if (element instanceof HTMLLinkElement) {
      const setAttribute = element.setAttribute;

      element.setAttribute = async (key, value) => {
        if (element.rel === "prefetch" && key === "href") {
          const pathname = `${value}?timestamp=${_timestamp}`;

          const url = new URL(`${location.origin}${pathname}`);

          const matched = await cache.match(new Request(url));

          if (!matched) setAttribute.call(element, key, pathname);
          return;
        }

        setAttribute.call(element, key, value);
        return;
      };
    }

    return element;
  };
}
