import invariant from "tiny-invariant";

export interface Resource {
  id: string;
  slug: string;
  content: string;
  title?: string;
  description?: string;
  keywords?: string[];
  createdAt?: string;
}

export async function parseContent<T extends Resource>(
  files: Array<() => Promise<{ default: T }>>,
  limit?: number
): Promise<T[]> {
  const content = await Promise.all(
    files.slice(0, limit ?? files.length).map((i) => i().then((m) => m.default))
  );
  return content.sort((first, second) => {
    invariant(first.createdAt);
    invariant(second.createdAt);

    const firstCreationTime = new Date(first.createdAt).getTime();
    const secondCreationTime = new Date(second.createdAt).getTime();

    return secondCreationTime - firstCreationTime;
  });
}

export type ExtractFilters<TResource extends Resource> = {
  [K in keyof TResource]: TResource[K] extends string[] | undefined ? K : never;
}[keyof TResource];

export function createResourceUtils<TResource extends Resource>(
  files: Record<string, () => Promise<{ default: TResource }>>,
  filterKey: NonNullable<ExtractFilters<TResource>>
) {
  async function getResources(limit?: number): Promise<TResource[]> {
    return await parseContent(Object.values(files), limit);
  }

  async function getResouce(slug?: string): Promise<TResource | undefined> {
    invariant(slug, "Missing slug");
    const resources = await parseContent(
      Object.entries(files)
        .filter(([k]) => k.includes(slug))
        .map(([, file]) => file)
    );
    return resources.find((resource) => resource.slug === slug);
  }

  async function getResourcesFilterKeys(): Promise<string[]> {
    const resources = await getResources();

    const occurrences: Record<string, number> = {};

    const filterKeys = resources.reduce<string[]>((filterKeys, resource) => {
      const items = resource[filterKey];

      if (Array.isArray(items)) {
        items.forEach((filterKey) => {
          if (!(filterKey in occurrences)) occurrences[filterKey] = 0;
          if (!filterKeys.includes(filterKey)) filterKeys.push(filterKey);
          occurrences[filterKey]++;
        });
      }

      return filterKeys;
    }, []);

    return filterKeys.sort((a, b) => occurrences[b] - occurrences[a]);
  }

  async function getResourcesByFilterKey(value: string): Promise<TResource[]> {
    const resources = await getResources();
    return resources.filter((resource) => {
      const items = resource[filterKey];
      return Array.isArray(items) ? items.includes(value) : false;
    });
  }

  return [
    getResources,
    getResouce,
    getResourcesFilterKeys,
    getResourcesByFilterKey,
  ] as const;
}
