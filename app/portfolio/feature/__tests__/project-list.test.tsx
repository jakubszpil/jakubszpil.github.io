import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import ProjectList, { loader } from "../project-list";
import {
  getProjectsByTechnology,
  getProjectsTechnologies,
} from "../../data-access/projects";
import { ProjectCards, type ProjectCardsProps } from "../../ui/project-cards";
import {
  Categories,
  type CategoriesProps,
} from "../../../shared/ui/categories";
import { MOCKED_PROJECT_FEEDS } from "../../test-fixtures";

vi.mock("../../ui/project-cards");
vi.mock("../../data-access/projects");
vi.mock("../../../shared/ui/categories");

describe("<ProjectList />", () => {
  const MockedProjectCards = vi.mocked(ProjectCards);
  const MockedCategories = vi.mocked(Categories);
  const MockedGetProjectsByTechnology = vi.mocked(getProjectsByTechnology);
  const MockedGetProjectsTechnologies = vi.mocked(getProjectsTechnologies);

  const MOCKED_TECHNOLOGIES: string[] = ["test", "example"];

  beforeEach(() => {
    MockedGetProjectsByTechnology.mockImplementation(() =>
      Promise.resolve(MOCKED_PROJECT_FEEDS),
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
        projects: MOCKED_PROJECT_FEEDS,
      } satisfies ProjectCardsProps,
      undefined,
    );
  });

  test("should projects with technology", async () => {
    const MOCKED_TECHNOLOGY = "example";

    MockedGetProjectsByTechnology.mockImplementationOnce(() =>
      Promise.resolve([MOCKED_PROJECT_FEEDS[1]]),
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
        projects: [MOCKED_PROJECT_FEEDS[1]],
      } satisfies ProjectCardsProps,
      undefined,
    );
  });
});
