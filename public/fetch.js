const _fetch = globalThis.fetch;
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

  url.searchParams.set("timestamp", _timestamp);

  return new Request(url, init);
}

globalThis.fetch = (input, init) => {
  const request = createRequest(input, init);
  return _fetch(request);
};
