export async function fetchAPI(input: string, init?: RequestInit) {
  const url = new URL(`${window.location.origin}${input}`);

  const requestUrl = url.toString();

  const request = new Request(requestUrl, {
    ...(init ?? {}),
    cache: "force-cache",
  });

  return await fetch(request);
}
