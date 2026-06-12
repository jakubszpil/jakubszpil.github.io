export interface Header {
  name: string;
  value: string;
}

export function createHeaders(...headers: Header[]) {
  return (): Headers => {
    const _headers = new Headers();

    for (const header of headers) {
      _headers.set(header.name, header.value);
    }

    return _headers;
  };
}

export const DEFAULT_CACHE_CONTROL_HEADER_VALUE =
  "public, max-age=31536000, immutable";

export function cacheControlHeader(
  value: string = DEFAULT_CACHE_CONTROL_HEADER_VALUE,
): Header {
  return { name: "Cache-Control", value };
}
