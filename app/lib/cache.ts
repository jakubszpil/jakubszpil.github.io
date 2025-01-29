import localforage from "localforage";
import type { ClientLoaderFunctionArgs } from "react-router";

const timestamp = Number(import.meta.env.TIMESTAMP);

const cache = localforage.createInstance({
  name: `jsapp.cache`,
  version: import.meta.env.TIMESTAMP,
  driver: localforage.INDEXEDDB,
});

const saveItem = async <T>(name: string, value: T) => {
  return await cache.setItem(name, { timestamp, value });
};

const getItem = async <T>(name: string) => {
  const item = await cache.getItem<{ timestamp: number; value: T }>(name);
  if (!item) return null;
  if (item.timestamp !== timestamp) return null;
  return item.value;
};

export async function cacheServerLoader<T>(
  requestUrl: string,
  serverLoader: () => Promise<T>
): Promise<T> {
  const url = new URL(requestUrl);
  const key = url.pathname;

  const cached = await getItem<T>(key);

  if (cached !== null) {
    return cached;
  }

  const promise = await serverLoader();
  await saveItem(key, promise);
  return promise;
}

export async function cacheClientLoader({
  request,
  serverLoader,
}: ClientLoaderFunctionArgs) {
  return cacheServerLoader(request.url, serverLoader);
}

cacheClientLoader.hydrate = true;
