import { QueryClient } from "@tanstack/react-query";
import {
  persistQueryClient,
  type PersistedClient,
  type Persister,
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

function initializeQueryClient() {
  const persister = createCustomPersister({
    key: "REACT_QUERY_PERSISTED_CLIENT",
  });

  persistQueryClient({
    queryClient,
    persister,
    buster: import.meta.env.BUILD_ID,
    maxAge: Infinity,
  });

  return queryClient;
}

export { queryClient, initializeQueryClient };
