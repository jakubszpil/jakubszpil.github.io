import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { describe, expect, test, vi } from "vitest";

import Search, { type clientLoader } from "../search";
import { SearchForm } from "../../ui/search-form";
import { ArticleCards } from "../../../blog/ui/article-cards";
import { CourseCards } from "../../../learning/ui/course-cards";
import { ProjectCards } from "../../../portfolio/ui/project-cards";
import { MOCKED_ARTICLE_FEEDS } from "../../../blog/test-fixtures";
import { MOCKED_COURSE_FEEDS } from "../../../learning/test-fixtures";
import { MOCKED_PROJECT_FEEDS } from "../../../portfolio/test-fixtures";

vi.mock("../../ui/search-form");
vi.mock("../../../blog/ui/article-cards");
vi.mock("../../../learning/ui/course-cards");
vi.mock("../../../portfolio/ui/project-cards");

describe("<Search />", () => {
  const MockedSearchForm = vi.mocked(SearchForm);
  const MockedArticleCards = vi.mocked(ArticleCards);
  const MockedCourseCards = vi.mocked(CourseCards);
  const MockedProjectCards = vi.mocked(ProjectCards);

  const MOCKED_CLIENT_LOADER_RETURN: Awaited<ReturnType<typeof clientLoader>> =
    {
      count: 0,
      query: "test",
      initialResults: {
        articles: MOCKED_ARTICLE_FEEDS,
        courses: MOCKED_COURSE_FEEDS,
        projects: MOCKED_PROJECT_FEEDS,
      },
      results: {
        articles: MOCKED_ARTICLE_FEEDS,
        courses: MOCKED_COURSE_FEEDS,
        projects: MOCKED_PROJECT_FEEDS,
      },
    };

  test("should render form with proper params", async () => {
    const Stub = createRoutesStub([
      {
        path: "/search",
        Component: Search,
        HydrateFallback: () => <div></div>,
        loader: () => Promise.resolve(MOCKED_CLIENT_LOADER_RETURN),
      },
    ]);

    render(<Stub initialEntries={["/search"]} />);

    await screen.findByRole("heading", { name: "Szukaj" });

    expect(MockedSearchForm).toHaveBeenCalledWith<
      [Parameters<typeof SearchForm>[0], unknown]
    >(
      {
        action: "/search",
        query: MOCKED_CLIENT_LOADER_RETURN.query,
        articles: MOCKED_CLIENT_LOADER_RETURN.initialResults.articles,
        courses: MOCKED_CLIENT_LOADER_RETURN.initialResults.courses,
        projects: MOCKED_CLIENT_LOADER_RETURN.initialResults.projects,
      },
      undefined,
    );
  });

  test("given query=null expect to render nothing except SearchForm and hero", async () => {
    const Stub = createRoutesStub([
      {
        path: "/search",
        Component: Search,
        HydrateFallback: () => <div></div>,
        loader: () =>
          Promise.resolve({
            ...MOCKED_CLIENT_LOADER_RETURN,
            query: null,
          } satisfies typeof MOCKED_CLIENT_LOADER_RETURN),
      },
    ]);

    render(<Stub initialEntries={["/search"]} />);

    await screen.findByRole("heading", { name: "Szukaj" });

    expect(MockedSearchForm).toHaveBeenCalledWith<
      [Parameters<typeof SearchForm>[0], unknown]
    >(
      {
        action: "/search",
        query: null,
        articles: MOCKED_CLIENT_LOADER_RETURN.initialResults.articles,
        courses: MOCKED_CLIENT_LOADER_RETURN.initialResults.courses,
        projects: MOCKED_CLIENT_LOADER_RETURN.initialResults.projects,
      },
      undefined,
    );

    expect(
      screen.queryByText(`Brak wyników wyszukiwania dla zapytania`),
    ).not.toBeInTheDocument();

    expect(MockedArticleCards).not.toHaveBeenCalled();

    expect(MockedCourseCards).not.toHaveBeenCalled();

    expect(MockedProjectCards).not.toHaveBeenCalled();
  });

  test("given count=0 expect to show proper message", async () => {
    const MOCKED_QUERY = "test";

    const Stub = createRoutesStub([
      {
        path: "/search",
        Component: Search,
        HydrateFallback: () => <div></div>,
        loader: () =>
          Promise.resolve({
            ...MOCKED_CLIENT_LOADER_RETURN,
            count: 0,
            query: MOCKED_QUERY,
            results: {
              articles: [],
              courses: [],
              projects: [],
            },
          } satisfies typeof MOCKED_CLIENT_LOADER_RETURN),
      },
    ]);

    render(<Stub initialEntries={["/search"]} />);

    await screen.findByRole("heading", { name: "Szukaj" });

    screen.getByText(
      `Brak wyników wyszukiwania dla zapytania: ${MOCKED_QUERY}`,
    );

    expect(MockedArticleCards).not.toHaveBeenCalled();

    expect(MockedCourseCards).not.toHaveBeenCalled();

    expect(MockedProjectCards).not.toHaveBeenCalled();
  });

  test("given count!=0 expect to render results", async () => {
    const MOCKED_COUNT = 5;

    const Stub = createRoutesStub([
      {
        path: "/search",
        Component: Search,
        HydrateFallback: () => <div></div>,
        loader: () =>
          Promise.resolve({
            ...MOCKED_CLIENT_LOADER_RETURN,
            query: "Test",
            count: MOCKED_COUNT,
          } satisfies typeof MOCKED_CLIENT_LOADER_RETURN),
      },
    ]);

    render(<Stub initialEntries={["/search"]} />);

    await screen.findByRole("heading", { name: "Szukaj" });

    screen.getByText(`Wyniki wyszukiwania (${MOCKED_COUNT})`);

    expect(MockedArticleCards).toHaveBeenCalledWith<
      [Parameters<typeof ArticleCards>[0], unknown]
    >(
      {
        articles: MOCKED_CLIENT_LOADER_RETURN.results.articles,
        className: "p-0 grid-cols-subgrid",
      },
      undefined,
    );

    expect(MockedCourseCards).toHaveBeenCalledWith<
      [Parameters<typeof CourseCards>[0], unknown]
    >(
      {
        courses: MOCKED_CLIENT_LOADER_RETURN.results.courses,
        className: "p-0 grid-cols-subgrid",
      },
      undefined,
    );

    expect(MockedProjectCards).toHaveBeenCalledWith<
      [Parameters<typeof ProjectCards>[0], unknown]
    >(
      {
        projects: MOCKED_CLIENT_LOADER_RETURN.results.projects,
        className: "p-0 grid-cols-subgrid",
      },
      undefined,
    );
  });
});
