import { parseContentResources, type ContentResource } from "./content";

export function createResourceService<T extends ContentResource, TFeed>({
  files,
  parsingStrategy,
  minifingStrategy,
}: {
  files: Record<string, string>;
  parsingStrategy: (slug: string, file: string) => Promise<T>;
  minifingStrategy: (resource: T) => TFeed;
}) {
  return class ResourceService {
    private static resources: Promise<T[]> = parseContentResources<T>(
      files,
      parsingStrategy
    );

    static async findAll(limit?: number): Promise<TFeed[]> {
      const resources = await this.resources;

      return resources
        .slice(0, limit ?? resources.length)
        .map(minifingStrategy);
    }

    static async findAllByCategory(category?: string): Promise<TFeed[]> {
      const resources = await this.resources;

      return resources
        .filter((resource) =>
          category ? resource.categories?.includes(category) : true
        )
        .map(minifingStrategy);
    }

    static async findUnique(slug: string | undefined): Promise<T | undefined> {
      const resources = await this.resources;

      return resources.find((resource) => resource.slug === slug);
    }

    static async getSlugs(): Promise<string[]> {
      const resources = await this.resources;

      return resources.map(({ slug }) => slug);
    }

    static async getCategories(): Promise<string[]> {
      const resources = await this.resources;

      const occurrences: Record<string, number> = {};

      const categories = resources.reduce<string[]>((categories, resource) => {
        resource.categories?.forEach((category) => {
          if (!(category in occurrences)) occurrences[category] = 0;
          if (!categories.includes(category)) categories.push(category);
          occurrences[category]++;
        });

        return categories;
      }, []);

      return categories.sort((a, b) => occurrences[b] - occurrences[a]);
    }
  };
}
