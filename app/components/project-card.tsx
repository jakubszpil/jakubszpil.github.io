import {
  Button,
  type ButtonProps,
  CreationDate,
  IconBrandGithub,
} from "@packages/shared";

import type { ProjectStatus } from "../lib/project";
import type { ProjectFeed } from "../lib/project-feed";

export interface ProjectCardProps {
  project: ProjectFeed;
  variant?: ButtonProps["variant"];
}

const STATUS_LABELS: Record<ProjectStatus, string> = {
  COMPLETED: "Ukończony",
  IDLE: "Utworzony",
  IN_PROGRESS: "W trakcie",
};

export function ProjectCard({ project, variant }: ProjectCardProps) {
  return (
    <Button
      key={project.slug}
      asChild
      variant={variant ?? "outline"}
      className="inline-flex flex-col items-start cursor-default justify-start text-left h-auto w-auto text-wrap! no-underline truncate p-6 hover:bg-background dark:hover:bg-input/30! hover:text-inherit!"
    >
      <div>
        <h2 className="line-clamp-3 text-base font-semibold m-0!">
          {project.title}
        </h2>
        <span className="">Status: {STATUS_LABELS[project.status]}</span>
        <p className="line-clamp-3 mt-2 flex-1 text-neutral-700 font-normal dark:text-neutral-300">
          {project.description}
        </p>
        <div className="flex items-center justify-between w-full">
          <CreationDate
            date={project.createdAt}
            className="text-neutral-600 text-xs dark:text-neutral-400"
          />
          <Button
            variant="link"
            asChild
            size="sm"
            className="underline p-0! h-auto"
          >
            <a
              data-testid="link"
              href={`https://github.com/jakubszpil/${project.slug}`}
              target="_blank"
            >
              <IconBrandGithub className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </Button>
  );
}
