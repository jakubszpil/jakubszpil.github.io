import {
  parseContentResources,
  type ContentResource,
  type MinifingStrategy,
  type ParsingStrategy,
  type SlugStrategy,
} from "./content";

export function createResourceService<T extends ContentResource, TFeed>({
  files,
  parsingStrategy,
  minifingStrategy,
  slugStrategy,
}: {
  files: Record<string, () => Promise<string>>;
  parsingStrategy: ParsingStrategy<T>;
  minifingStrategy: MinifingStrategy<T, TFeed>;
  slugStrategy: SlugStrategy;
}) {
  return class ResourceService {
    private static resources: Promise<T[]> = parseContentResources<T>({
      files,
      parsingStrategy,
      slugStrategy,
    });

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
          category ? resource.categories?.includes(category) : true,
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
