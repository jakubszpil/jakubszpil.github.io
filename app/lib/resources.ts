import { parseContentResources, type ContentResource } from "./content";

export function ResourceService<T extends ContentResource>(
  files: Record<string, string>
) {
  type TMinified = Omit<T, "content" | "quiz" | "keywords" | "categories">;

  return class ResourceService {
    private static resources: Promise<T[]> = parseContentResources<T>(files);

    private static minifyResource(resource: T): TMinified {
      const { content, quiz, keywords, categories, ...data } = resource;
      if (!content) {
        const { readingTime, ...m } = data;
        return m as TMinified;
      }
      return data;
    }

    static async findAll(limit?: number): Promise<TMinified[]> {
      const resources = await this.resources;

      return resources
        .slice(0, limit ?? resources.length)
        .map(this.minifyResource);
    }

    static async findAllByCategory(category?: string): Promise<TMinified[]> {
      const resources = await this.resources;

      return resources
        .filter((resource) =>
          category ? resource.categories?.includes(category) : true
        )
        .map(this.minifyResource);
    }

    static async findUnique(slug: string): Promise<T | undefined> {
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
