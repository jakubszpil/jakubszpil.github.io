import { QueryClient, type OmitKeyof } from "@tanstack/react-query";
import type {
  PersistedClient,
  Persister,
  PersistQueryClientOptions,
} from "@tanstack/react-query-persist-client";
import localforage from "localforage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function createCustomPersister({ key }: { key: string }): Persister {
  return {
    persistClient: async (client: PersistedClient) => {
      await localforage.setItem<PersistedClient>(key, client);
    },
    restoreClient: async () => {
      const client = await localforage.getItem<PersistedClient>(key);

      if (!client) return undefined;

      return client;
    },
    removeClient: () => localforage.removeItem(key),
  };
}

const persister = createCustomPersister({
  key: "REACT_QUERY_PERSISTED_CLIENT",
});

function getPersistOptions(): OmitKeyof<
  PersistQueryClientOptions,
  "queryClient"
> {
  return {
    persister,
    buster: import.meta.env.BUILD_ID,
    maxAge: Infinity,
  };
}

export { queryClient, getPersistOptions };
