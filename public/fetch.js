const _fetch = globalThis.fetch;
const _createElement = globalThis.document.createElement;
const _timestamp = globalThis.timestamp;

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
  /** @type {RequestInit} */
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

const cache = new Map();

globalThis.fetch = async (input, init) => {
  const request = createRequest(input, init);

  if (cache.has(request.url)) {
    const response = cache.get(request.url);
    return response.clone();
  }

  const response = await _fetch(request);

  cache.set(request.url, response);

  return response.clone();
};

globalThis.document.createElement = (tag, options) => {
  const element = _createElement.bind(document)(tag, options);

  if (element instanceof HTMLLinkElement) {
    const setAttribute = element.setAttribute;

    element.setAttribute = (key, value) => {
      if (element.rel === "prefetch" && key === "href") {
        const url = `${value}?timestamp=${_timestamp}`;
        if (cache.has(new URL(`${location.origin}${url}`).toString())) return;
        setAttribute.call(element, key, url);
        return;
      }

      setAttribute.call(element, key, value);
      return;
    };
  }

  return element;
};
