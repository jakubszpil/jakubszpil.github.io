import { processFile, type ParsingStrategy } from "./content";
import type { Project } from "./project";

export class ProjectParsingStrategy implements ParsingStrategy<Project> {
  async parse(slug: string, file: string): Promise<Project> {
    const { data } = processFile(file);

    return {
      slug,
      createdAt: new Date(data.createdAt).toISOString(),
      categories: data.categories,
      description: data.description,
      status: data.status,
      title: data.title,
    } satisfies Project;
  }
}
