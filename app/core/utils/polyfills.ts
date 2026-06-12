type RequestInfo = string | Request | URL;

const timestampValue = String(import.meta.env.TIMESTAMP);
const timestampKey = "v";

function createRequestUrl(requestInfo: RequestInfo) {
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
  return init;
}

function createRequest(requestInfo: RequestInfo, requestInit?: RequestInit) {
  const url = createRequestUrl(requestInfo);
  const init = createRequestInit(requestInit);

  url.searchParams.append(timestampKey, timestampValue);

  return new Request(url, init);
}

export async function initializeFetchPolyfill() {
  const _fetch = globalThis.fetch;

  globalThis.fetch = async (input, init) => {
    const requestUrl = createRequestUrl(input);

    const isDifferentOrigin = requestUrl.origin !== location.origin;
    const isDataRequest = requestUrl.pathname.endsWith(".data");

    if (isDifferentOrigin || !isDataRequest) {
      return _fetch(input, init);
    }

    return _fetch(createRequest(input, init));
  };
}

export async function initializePrefetchPolyfill() {
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

        if (
          element.rel === "prefetch" &&
          key === "href" &&
          value.endsWith(".data")
        ) {
          pathname = `${value}?${timestampKey}=${timestampValue}`;
        }

        setAttribute.call(element, key, pathname);

        return element;
      };
    }

    return element;
  };
}
