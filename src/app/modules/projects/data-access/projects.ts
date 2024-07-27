import {
  type Resource,
  createResourceUtils,
} from "@/shared/data-access/resources";

export interface Project extends Resource {
  technologies?: string[];
}

const projects = import.meta.glob<{ default: Project }>(
  "../../../../content/projects/*.mdx"
);

export const [
  getProjects,
  getProject,
  getProjectsTechnologies,
  getProjectsByTechnology,
] = createResourceUtils<Project>(projects, "technologies");
