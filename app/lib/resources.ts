import invariant from "tiny-invariant";
import { parseMarkdownFile, type ContentResource } from "./content";

export async function parseContent<T extends ContentResource>(
  files: Record<string, string>
): Promise<T[]> {
  const content = await Promise.all(
    Object.entries(files).map(async ([key, file]) => {
      const slug = key.slice(key.lastIndexOf("/") + 1, key.indexOf(".mdx"));
      const keyWithoutSlug = key.slice(0, key.lastIndexOf("/"));
      const resourceType = keyWithoutSlug.slice(key.lastIndexOf("/") + 1);
      const resource = await parseMarkdownFile<T>(file, slug, resourceType);
      return resource;
    })
  );

  return content.sort((first, second) => {
    invariant(first.createdAt);
    invariant(second.createdAt);

    const firstCreationTime = new Date(first.createdAt).getTime();
    const secondCreationTime = new Date(second.createdAt).getTime();

    return secondCreationTime - firstCreationTime;
  });
}

export type ExtractFilters<TResource extends ContentResource> = {
  [K in keyof TResource]: TResource[K] extends string[] | undefined ? K : never;
}[keyof TResource];

export function createResourceUtils<TResource extends ContentResource>(
  files: Record<string, string>,
  filterKey: NonNullable<ExtractFilters<TResource>>
) {
  async function getResources(limit?: number): Promise<TResource[]> {
    const resources = await parseContent<TResource>(files);
    return resources.slice(0, limit ?? resources.length);
  }

  async function getResouce(slug: string): Promise<TResource> {
    const resources = await getResources();
    const resource = resources.find((resource) => resource.slug === slug);
    invariant(resource);
    return resource;
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

  async function getResourcesSlugs(): Promise<string[]> {
    const resources = await getResources();
    return resources.map(({ slug }) => slug);
  }

  return [
    getResources,
    getResouce,
    getResourcesFilterKeys,
    getResourcesByFilterKey,
    getResourcesSlugs,
  ] as const;
}
