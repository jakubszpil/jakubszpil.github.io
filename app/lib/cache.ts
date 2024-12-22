const serverLoaderCache = new Map<string, any>();

export async function cacheServerLoader<T>(
  keys: string[],
  serverLoader: () => Promise<T>
): Promise<T> {
  const key = keys.join(".");

  if (serverLoaderCache.has(key)) {
    return serverLoaderCache.get(key)!;
  }

  const response = await serverLoader();

  serverLoaderCache.set(key, response);

  return response;
}
