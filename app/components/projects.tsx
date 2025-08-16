import { IconBrandGithub } from "@tabler/icons-react";

import "./__styles__/projects.css";
import { Button, type ButtonProps } from "./ui/button";
import { CreationDate } from "./ui/creation-date";

import type { Project, ProjectStatus } from "~/lib/projects";
import { cn } from "~/lib/utils";

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
    <section className={cn("projects", props.className)}>
      {props.projects.map((project) => (
        <Button
          key={project.id}
          asChild
          variant={props.variant ?? "outline"}
          className="projects__feed"
        >
          <div>
            <h2 className="projects__title">{project.title}</h2>
            <span>Status: {STATUS_LABELS[project.status]}</span>
            <p className="projects__description">{project.description}</p>
            <div className="projects__info">
              <CreationDate
                date={project.createdAt}
                className="projects__date"
              />
              <Button
                variant="link"
                asChild
                size="sm"
                className="projects__link"
              >
                <a
                  data-testid="link"
                  href={`https://github.com/jakubszpil/${project.slug}`}
                  target="_blank"
                >
                  <IconBrandGithub className="w-5 h-5 mr-2" />
                  Otwórz GitHub
                </a>
              </Button>
            </div>
          </div>
        </Button>
      ))}
    </section>
  );
}
