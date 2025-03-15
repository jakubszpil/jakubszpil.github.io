export class Cache {
  private readonly timestamp = Number(import.meta.env.TIMESTAMP);
  private readonly storage = localStorage;

  setItem<T>(name: string, value: T) {
    return this.storage.setItem(
      name,
      JSON.stringify({
        timestamp: this.timestamp,
        value,
      })
    );
  }

  getItem<T>(name: string): T | null {
    const value = this.storage.getItem(name);
    if (!value) return null;
    const item = JSON.parse(value);
    if (!item) return null;
    if (item.timestamp !== this.timestamp) return null;
    return item.value;
  }

  static instance: Cache;

  static getInstance() {
    if (!this.instance) {
      this.instance = new Cache();
    }
    return this.instance;
  }
}

export async function cacheServerLoader<T>(
  requestUrl: string,
  serverLoader: () => Promise<T>
): Promise<T> {
  const url = new URL(requestUrl);
  const key =
    url.pathname.split("/").filter(Boolean).join(".index.") || "index";

  const cached = Cache.getInstance().getItem<T>(key);

  if (cached !== null) {
    return cached;
  }

  const promise = await serverLoader();

  Cache.getInstance().setItem<T>(key, promise);

  return promise;
}
