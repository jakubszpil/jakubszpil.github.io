const responses: Map<string, Response> = new Map();
const pendingRequests: Map<string, Promise<Response>> = new Map();
const nativeFetch = globalThis.fetch;

export async function fetch(input: string, init?: RequestInit) {
  const request = new Request(input, init);
  console.log(request);

  const requestUrl = request.url;

  const cached = responses.get(requestUrl);

  if (cached) return cached.clone();

  const existingPendingRequest = pendingRequests.get(requestUrl);

  if (existingPendingRequest)
    return existingPendingRequest.then((response) => response.clone());

  const pendingRequest = nativeFetch(request).then((response) => {
    if (!response.ok) throw response;
    responses.set(requestUrl, response);
    return response.clone();
  });

  pendingRequests.set(requestUrl, pendingRequest);

  return pendingRequest;
}

export function normalizeRequestUrl(request: Request, url: string): string {
  const _url = new URL(request.url);
  return `${_url.origin}${url}`;
}
