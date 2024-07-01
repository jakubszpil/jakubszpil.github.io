export interface Resource {
  id: string;
  slug: string;
  content: string;
  title?: string;
  description?: string;
  keywords?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export function parseContent<T extends Resource>(
  files: Array<{ default: T }>
): T[] {
  return files
    .map((i) => i.default)
    .sort((first, second) => {
      const firstCreationDate = first.createdAt
        ? new Date(first.createdAt as string)
        : undefined;
      const secondCreationDate = second.createdAt
        ? new Date(second.createdAt as string)
        : undefined;

      const firstCreationTime = firstCreationDate?.getTime() ?? 0;
      const secondCreationTime = secondCreationDate?.getTime() ?? 0;

      return secondCreationTime - firstCreationTime;
    });
}

export type ExtractFilters<TResource extends Resource> = {
  [K in keyof TResource]: TResource[K] extends string[] | undefined ? K : never;
}[keyof TResource];

export function createResourceUtils<TResource extends Resource>(
  files: Record<string, { default: TResource }>,
  filterKey: NonNullable<ExtractFilters<TResource>>
) {
  const resources = parseContent(Object.values(files));

  function getResources(limit?: number): TResource[] {
    if (limit !== undefined) {
      return resources.slice(0, limit);
    }
    return resources;
  }

  function getResouce(slug: string): TResource | undefined {
    return resources.find((resource) => resource.slug === slug);
  }

  function getResourcesFilterKeys(): string[] {
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

  function getResourcesByFilterKey(value: string): TResource[] {
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
