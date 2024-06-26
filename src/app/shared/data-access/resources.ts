import { v4 as uuid } from "uuid";

export type ResourceFrontmatter<T extends Record<string, unknown>> = {
  title?: string;
  description?: string;
  keywords?: string[];
  createdAt?: string;
  updatedAt?: string;
} & T;

export type Resource<T extends ResourceFrontmatter<Record<string, unknown>>> = {
  id: string;
  slug: string;
  content: string;
} & T;

export type ExtractResourceFrontmatter<
  TResource extends Resource<Record<string, unknown>>
> = TResource extends Resource<
  infer TFrontmatter extends ResourceFrontmatter<Record<string, unknown>>
>
  ? TFrontmatter
  : Record<string, unknown>;

export function parseContent<
  const TResource extends Resource<Record<string, unknown>>
>(
  imported: Record<
    string,
    {
      default: () => JSX.Element;
      frontmatter: ExtractResourceFrontmatter<TResource>;
    }
  >
): TResource[] {
  return Object.entries(imported)
    .map(([key, entry]) => {
      const slug = key.slice(key.lastIndexOf("/") + 1).replace(".md", "");

      return {
        ...entry.frontmatter,
        id: uuid(),
        slug,
        content: entry.default(),
        createdAt: entry.frontmatter?.createdAt
          ? new Date(entry.frontmatter.createdAt as string).toISOString()
          : undefined,
        updatedAt: entry.frontmatter?.updatedAt
          ? new Date(entry.frontmatter.updatedAt as string).toISOString()
          : undefined,
      } as TResource;
    })
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

export type ExtractFilters<TResource extends Record<string, unknown>> = {
  [K in keyof TResource]: TResource[K] extends string[] | undefined ? K : never;
}[keyof TResource];

export function createResourceUtils<
  const TResource extends Resource<Record<string, unknown>>
>(
  files: Record<
    string,
    {
      default: () => JSX.Element;
      frontmatter: ExtractResourceFrontmatter<TResource>;
    }
  >,
  filterKey: NonNullable<ExtractFilters<TResource>>
) {
  const resources: TResource[] = parseContent<TResource>(files);

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
