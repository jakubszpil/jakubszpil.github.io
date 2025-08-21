{
  const _fetch = globalThis.fetch;
  const _createElement = globalThis.document.createElement;
  const _timestamp = globalThis.timestamp;
  const _storedTimestamp = localStorage.getItem("timestamp");

  if (Number(_timestamp) !== Number(_storedTimestamp)) {
    if (_storedTimestamp) {
      if (await window.caches.has(_storedTimestamp)) {
        await window.caches.delete(_storedTimestamp);
      }
    }

    localStorage.setItem("timestamp", _timestamp);
  }

  const cache = await window.caches.open(_timestamp);
  const prefetchCache = new Set();

  function createRequestUrl(requestInput) {
    if (requestInput instanceof URL) {
      return requestInput;
    }

    if (requestInput instanceof Request) {
      return new URL(requestInput.url);
    }

    return new URL(requestInput);
  }

  function createRequestInit(requestInit) {
    const init = requestInit ?? {};
    init.cache = "force-cache";
    return init;
  }

  function createRequest(requestInput, requestInit) {
    const url = createRequestUrl(requestInput);
    const init = createRequestInit(requestInit);

    url.search = "";
    url.searchParams.set("timestamp", _timestamp);

    return new Request(url, init);
  }

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

  globalThis.document.createElement = (tag, options) => {
    const element = _createElement.bind(document)(tag, options);

    if (element instanceof HTMLLinkElement) {
      const setAttribute = element.setAttribute;

      element.setAttribute = async (key, value) => {
        if (element.rel === "prefetch" && key === "href") {
          const pathname = `${value}?timestamp=${_timestamp}`;

          const url = new URL(`${location.origin}${pathname}`);

          const matched = await cache.match(new Request(url));

          if (!matched) {
            if (!prefetchCache.has(url.href)) {
              setAttribute.call(element, key, pathname);
              function addEntry() {
                prefetchCache.add(url.href);
                element.removeEventListener("load", addEntry);
              }
              element.addEventListener("load", addEntry);
            }
          }
          return;
        }

        setAttribute.call(element, key, value);
        return;
      };
    }

    return element;
  };
}
