import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import ProjectList, { loader } from "../project-list";
import {
  type ProjectFeed,
  ProjectStatus,
  getProjectsByTechnology,
  getProjectsTechnologies,
} from "~/portfolio/data-access/projects";
import {
  ProjectCards,
  type ProjectCardsProps,
} from "~/portfolio/ui/project-cards";
import { Categories, type CategoriesProps } from "~/components/ui/categories";

vi.mock("~/portfolio/ui/project-cards");
vi.mock("~/components/ui/categories");
vi.mock("~/portfolio/data-access/projects");

describe("<ProjectList />", () => {
  const MockedProjectCards = vi.mocked(ProjectCards);
  const MockedCategories = vi.mocked(Categories);
  const MockedGetProjectsByTechnology = vi.mocked(getProjectsByTechnology);
  const MockedGetProjectsTechnologies = vi.mocked(getProjectsTechnologies);

  const MOCKED_PROJECTS: ProjectFeed[] = [
    {
      slug: "test-example-1",
      title: "Test title 1",
      description: "Test description 1",
      createdAt: "2025-03-17",
      status: ProjectStatus.COMPLETED,
    },
    {
      slug: "test-example-2",
      title: "Test title 2",
      description: "Test description 2",
      createdAt: "2025-03-17",
      status: ProjectStatus.COMPLETED,
    },
  ];

  const MOCKED_TECHNOLOGIES: string[] = ["test", "example"];

  beforeEach(() => {
    MockedGetProjectsByTechnology.mockImplementation(() =>
      Promise.resolve(MOCKED_PROJECTS),
    );

    MockedGetProjectsTechnologies.mockImplementation(() =>
      Promise.resolve(MOCKED_TECHNOLOGIES),
    );
  });

  afterEach(() => {
    MockedProjectCards.mockRestore();
    MockedCategories.mockRestore();
    MockedGetProjectsByTechnology.mockRestore();
    MockedGetProjectsTechnologies.mockRestore();
  });

  test("should projects without technology", async () => {
    const Stub = createRoutesStub([
      {
        path: "/portfolio",
        Component: ProjectList,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(<Stub initialEntries={[generatePath("/portfolio")]} />);

    await screen.findByText("Portfolio");

    expect(MockedGetProjectsByTechnology).toHaveBeenCalledWith(undefined);
    expect(MockedGetProjectsTechnologies).toHaveBeenCalled();

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_TECHNOLOGIES,
        categoryPrefixUrl: "/portfolio/technologie",
        baseUrl: "/portfolio",
        showAllCategory: true,
      } satisfies CategoriesProps,
      undefined,
    );

    expect(MockedProjectCards).toHaveBeenCalledWith(
      {
        projects: MOCKED_PROJECTS,
      } satisfies ProjectCardsProps,
      undefined,
    );
  });

  test("should projects with technology", async () => {
    const MOCKED_TECHNOLOGY = "example";

    MockedGetProjectsByTechnology.mockImplementationOnce(() =>
      Promise.resolve([MOCKED_PROJECTS[1]]),
    );

    const Stub = createRoutesStub([
      {
        path: "/portfolio/kategorie/:technology",
        Component: ProjectList,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(
      <Stub
        initialEntries={[
          generatePath("/portfolio/kategorie/:technology", {
            technology: MOCKED_TECHNOLOGY,
          }),
        ]}
      />,
    );

    await screen.findByText("Example");

    expect(MockedGetProjectsByTechnology).toHaveBeenCalledWith(
      MOCKED_TECHNOLOGY,
    );
    expect(MockedGetProjectsTechnologies).toHaveBeenCalled();

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MOCKED_TECHNOLOGIES,
        categoryPrefixUrl: "/portfolio/technologie",
        baseUrl: "/portfolio",
        showAllCategory: true,
      } satisfies CategoriesProps,
      undefined,
    );

    expect(MockedProjectCards).toHaveBeenCalledWith(
      {
        projects: [MOCKED_PROJECTS[1]],
      } satisfies ProjectCardsProps,
      undefined,
    );
  });
});
