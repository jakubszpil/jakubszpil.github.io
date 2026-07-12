import type { QueryCacheNotifyEvent, QueryClient } from "@tanstack/react-query";
import localforage from "localforage";

interface PrefetchCacheState {
  buster: string;
  entries: Set<string>;
}

interface PrefetchCacheOptions {
  entries: Set<string>;
  queryClient: QueryClient;
  entriesPersister: (entries: Set<string>) => Promise<void>;
}

export class PrefetchCachePersister {
  private key = "PREFETCH_CACHE_STATE";

  constructor(private buster: string) {}

  public async getEntries(): Promise<Set<string>> {
    const state = await localforage.getItem<PrefetchCacheState>(this.key);

    if (!state) {
      return new Set();
    }

    if (state.buster !== this.buster) {
      await this.setEntries(new Set());
      return new Set();
    }

    return state.entries;
  }

  public async setEntries(entries: Set<string>) {
    await localforage.setItem<PrefetchCacheState>(this.key, {
      buster: this.buster,
      entries,
    });
  }
}

export class PrefetchCache {
  private entries = new Set<string>();

  constructor({
    entries,
    queryClient,
    entriesPersister,
  }: PrefetchCacheOptions) {
    this.entries = entries;

    queryClient
      .getQueryCache()
      .subscribe((event) => this.watchQueryCacheEvent(event));

    window.addEventListener("beforeunload", () =>
      entriesPersister(this.entries),
    );
  }

  private watchQueryCacheEvent(event: QueryCacheNotifyEvent) {
    const key: string = event.query.queryKey.join("");

    switch (event.type) {
      case "removed": {
        this.entries.delete(key);
        break;
      }

      default: {
        this.entries.add(key);
      }
    }
  }

  public has(url: string) {
    return this.entries.has(url);
  }

  public add(url: string) {
    this.entries.add(url);
  }
}
