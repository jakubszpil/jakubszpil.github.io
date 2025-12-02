import { type ButtonProps, cn } from "@packages/shared";

import type { Project } from "../data-access/project";
import { ProjectCard } from "./project-card";

export interface ProjectCardsProps {
  projects: Pick<
    Project,
    "slug" | "title" | "description" | "createdAt" | "status"
  >[];
  className?: string;
  variant?: ButtonProps["variant"];
}

export function ProjectCards({
  projects,
  className,
  variant,
}: ProjectCardsProps) {
  return (
    <section
      className={cn(
        "container pt-0! prose grid gap-3 grid-cols-fill",
        className
      )}
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} variant={variant} />
      ))}
    </section>
  );
}
