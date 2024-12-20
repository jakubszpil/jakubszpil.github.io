const responses: Map<string, Response> = new Map();
const pendingRequests: Map<string, Promise<Response>> = new Map();

function getRequest(input: string, init?: RequestInit) {
  const url = new URL(`${window.location.origin}${input}`);
  url.searchParams.append("etag", import.meta.env.VITE_ETAG);
  const request = new Request(url, init);
  return request;
}

export async function fetch(input: string, init?: RequestInit) {
  const request = getRequest(input, init);

  const requestUrl = request.url;

  const cached = responses.get(requestUrl);

  if (cached) return cached.clone();

  const existingPendingRequest = pendingRequests.get(requestUrl);

  if (existingPendingRequest)
    return existingPendingRequest.then((response) => response.clone());

  const pendingRequest = window.fetch(request).then((response) => {
    if (!response.ok) throw response;
    responses.set(requestUrl, response);
    return response.clone();
  });

  pendingRequests.set(requestUrl, pendingRequest);

  return pendingRequest;
}
