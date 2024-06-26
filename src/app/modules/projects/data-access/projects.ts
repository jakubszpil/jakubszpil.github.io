import {
  Resource,
  ResourceFrontmatter,
  createResourceUtils,
} from "@libs/shared";

export type ProjectFrontmatter = ResourceFrontmatter<{
  technologies?: string[];
}>;

export type Project = Resource<ProjectFrontmatter>;

export const [
  getProjects,
  getProject,
  getProjectsTechnologies,
  getProjectsByTechnology,
] = createResourceUtils<Project>(
  import.meta.glob("../../../../content/projects/*.md", { eager: true }),
  "technologies"
);
