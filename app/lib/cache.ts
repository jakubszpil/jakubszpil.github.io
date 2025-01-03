const serverLoaderCache = new Map<string, any>();

export async function cacheServerLoader<T>(
  requestUrl: string,
  serverLoader: () => Promise<T>
): Promise<T> {
  const url = new URL(requestUrl);
  const pathname = url.pathname;

  if (serverLoaderCache.has(pathname)) {
    return serverLoaderCache.get(pathname);
  }

  const promise = await serverLoader();
  serverLoaderCache.set(pathname, promise);
  return serverLoaderCache.get(pathname);
}
