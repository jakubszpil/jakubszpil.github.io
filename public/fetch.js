{
  const _fetch = globalThis.fetch;
  const _createElement = globalThis.document.createElement;
  const _timestamp = globalThis.timestamp;
  const _key = "timestamp";
  const _storage = localStorage;
  const _caches = caches;
  const _storedTimestamp = _storage.getItem(_key);

  if (Number(_timestamp) !== Number(_storedTimestamp)) {
    if (_storedTimestamp) {
      if (await _caches.has(_storedTimestamp)) {
        await _caches.delete(_storedTimestamp);
      }
    }

    _storage.setItem(_key, _timestamp);
  }

  class PrefetchCache {
    key = "prefetch-cache";

    entries = new Set(JSON.parse(sessionStorage.getItem(this.key) || "[]"));

    constructor(cache) {
      const keys = cache.keys();

      keys.then((keys) => {
        keys.forEach((request) => {
          this.entries.add(request.url);
        });
      });

      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem(
          this.key,
          JSON.stringify([...this.entries.values()])
        );
      });
    }

    has(url) {
      return this.entries.has(url);
    }

    add(url) {
      this.entries.add(url);
    }
  }

  const cache = await _caches.open(_timestamp);
  const prefetchCache = new PrefetchCache(cache);

  function createUrl(...data) {
    return new URL(...data);
  }

  function createRequestUrl(requestInput) {
    if (requestInput instanceof URL) {
      return requestInput;
    }

    if (requestInput instanceof Request) {
      return createUrl(requestInput.url);
    }

    return createUrl(requestInput, location.origin);
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
          const pathname = `${value}?${_key}=${_timestamp}`;

          const url = createUrl(`${location.origin}${pathname}`);

          if (prefetchCache.has(url.href)) return;

          const matched = await cache.match(new Request(url));

          if (!matched) {
            setAttribute.call(element, key, pathname);
            function addEntry() {
              prefetchCache.add(url.href);
              element.removeEventListener("load", addEntry);
            }
            element.addEventListener("load", addEntry);
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
