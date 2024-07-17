import { type Resource, createResourceUtils } from "@libs/shared";

export interface Project extends Resource {
  technologies?: string[];
}

export const [
  getProjects,
  getProject,
  getProjectsTechnologies,
  getProjectsByTechnology,
] = createResourceUtils<Project>(
  import.meta.glob("../../../../content/projects/*.mdx", { eager: true }),
  "technologies"
);
