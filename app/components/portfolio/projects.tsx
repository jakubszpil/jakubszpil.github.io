import { IconBrandGithub } from "@tabler/icons-react";

import type { Project, ProjectStatus } from "@/lib/projects";
import { getLocalizedDate } from "@/lib/date";

import { Button, type ButtonProps } from "../ui/button";

export interface ProjectsProps {
  projects: Project[];
  className?: string;
  variant?: ButtonProps["variant"];
}

const STATUS_LABELS: Record<ProjectStatus, string> = {
  COMPLETED: "Ukończony",
  IDLE: "Utworzony",
  IN_PROGRESS: "W trakcie",
};

export default function Projects(props: ProjectsProps) {
  return (
    <section
      className={`container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ${
        props.className ?? ""
      }`}
    >
      {props.projects.map((project) => (
        <Button
          key={project.id}
          asChild
          variant={props.variant ?? "outline"}
          className="inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6 hover:!bg-inherit"
        >
          <div>
            <h2 className="line-clamp-3 text-base font-semibold m-0">
              {project.title}
            </h2>
            <span className="mb-2">
              Status: {STATUS_LABELS[project.status]}
            </span>
            <p className="line-clamp-3 mt-2 flex-1 text-neutral-700 font-normal dark:text-neutral-300">
              {project.description}
            </p>
            <span className="text-neutral-600 text-xs dark:text-neutral-400 mb-3">
              {getLocalizedDate(project.createdAt)}
            </span>
            <div className="flex items-center w-full">
              <Button asChild size="sm" className="no-underline">
                <a
                  data-testid="link"
                  href={`https://github.com/jakubszpil/${project.slug}`}
                  target="_blank"
                >
                  <IconBrandGithub className="w-5 h-5 mr-2" />
                  Otwórz repozytorium
                </a>
              </Button>
            </div>
          </div>
        </Button>
      ))}
    </section>
  );
}
