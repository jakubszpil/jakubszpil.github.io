const promises = new Map<string, Promise<unknown>>();

function getPromises() {
  return promises;
}

function setPromises(key: string, promise: Promise<unknown>) {
  promises.set(key, promise);
}

function cachePromise<T>(key: string, resolver: () => Promise<T>) {
  const promises = getPromises();

  if (promises.has(key)) {
    const promise = promises.get(key);
    if (promise) {
      return promise as Promise<T>;
    }
  }

  const promise = resolver();

  setPromises(key, promise);

  return promise;
}

export { cachePromise };
