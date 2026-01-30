type Key = Array<string | number>;

const promises = new Map<string, Promise<unknown>>();

function getPromises() {
  return promises;
}

function setPromises(key: string, promise: Promise<unknown>) {
  promises.set(key, promise);
}

function getPromiseKey(key: Key): string {
  return key.map((k) => k.toString()).join(".");
}

function promise<T>(key: Key, resolver: () => Promise<T>) {
  const keyAsString = getPromiseKey(key);
  const promises = getPromises();

  if (promises.has(keyAsString)) {
    const promise = promises.get(keyAsString);
    if (promise) {
      return promise as Promise<T>;
    }
  }

  const promise = resolver();

  setPromises(keyAsString, promise);

  return promise;
}

export { promise };
