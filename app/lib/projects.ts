import { minifyContentResource, parseContentResources } from "./content";
import type { RequiredOptional } from "./types";

export enum ProjectStatus {
  IDLE = "IDLE",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  status: ProjectStatus;
  categories: string[];
}

const CONTENT = import.meta.glob<string>("../content/projects/*.md", {
  import: "default",
  query: "?raw",
  eager: true,
});

export async function getProjects(filters?: {
  limit?: number;
  minify?: boolean;
}): Promise<Project[]> {
  const projects = await parseContentResources<Project>(
    "projects",
    CONTENT,
    filters
  );

  return projects;
}

export async function getProjectsByTechnology(
  technology: RequiredOptional<string>
): Promise<Project[]> {
  const projects = await getProjects({ minify: false });

  return projects
    .filter((project) =>
      technology ? project.categories?.includes(technology) : true
    )
    .map(minifyContentResource);
}

export async function getProjectsTechnologies(): Promise<string[]> {
  const projects = await getProjects({ minify: false });

  const occurrences: Record<string, number> = {};

  const technologies = projects.reduce<string[]>((technologies, project) => {
    project.categories?.forEach((technology) => {
      if (!(technology in occurrences)) occurrences[technology] = 0;
      if (!technologies.includes(technology)) technologies.push(technology);
      occurrences[technology]++;
    });

    return technologies;
  }, []);

  return technologies.sort((a, b) => occurrences[b] - occurrences[a]);
}
