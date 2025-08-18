import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import Projects, { type ProjectsProps } from "../projects";

import { ProjectStatus } from "~/lib/projects";

describe("<Projects />", () => {
  let MockedProjectsProps: ProjectsProps;

  beforeEach(() => {
    MockedProjectsProps = {
      projects: [
        {
          id: "1",
          slug: "test-1",
          categories: ["test", "category"],
          title: "Test project 1",
          description: "Test project description 1",
          status: ProjectStatus.COMPLETED,
          createdAt: "2025-03-17",
        },
        {
          id: "2",
          slug: "test-2",
          categories: ["test", "category"],
          title: "Test project 2",
          description: "Test project description 2",
          status: ProjectStatus.COMPLETED,
          createdAt: "2025-03-17",
        },
      ],
    };
  });

  test("should render", async () => {
    render(<Projects {...MockedProjectsProps} />);

    const links = await screen.findAllByTestId<HTMLAnchorElement>("link");

    for (let i = 0; i < MockedProjectsProps.projects.length; i++) {
      const link = links[i];
      const project = MockedProjectsProps.projects[i];

      expect(link.href).toBe(`https://github.com/jakubszpil/${project.slug}`);
      expect(link.target).toBe("_blank");
    }

    screen.getByText("Test project 1");
    screen.getByText("Test project description 1");

    screen.getByText("Test project 2");
    screen.getByText("Test project description 2");
  });
});
