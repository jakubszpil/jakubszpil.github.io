import { cn } from "../lib/helpers";
import type { ProjectFeed } from "../lib/project-feed";
import { ProjectCard } from "./project-card";
import type { ButtonProps } from "./ui/button";

export interface ProjectCardsProps {
  projects: ProjectFeed[];
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
        className,
      )}
    >
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} variant={variant} />
      ))}
    </section>
  );
}
