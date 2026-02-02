import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { vi, describe, test, beforeEach, afterEach, expect } from "vitest";

import { LinkWithPrefetch } from "../../components/ui/link-with-prefetch";
import { ArticleCards } from "../../components/article-cards";
import { CourseCards } from "../../components/course-cards";
import { ProjectCards } from "../../components/project-cards";
import { getArticles } from "../../lib/articles";
import { getCourses } from "../../lib/courses";
import { getProjects } from "../../lib/projects";
import {
  MOCKED_ARTICLE_FEEDS,
  MOCKED_COURSE_FEEDS,
  MOCKED_PROJECT_FEEDS,
} from "../../test-fixtures";
import Home, { loader } from "../home";

vi.mock("../../components/ui/link-with-prefetch");
vi.mock("../../components/article-cards");
vi.mock("../../components/course-cards");
vi.mock("../../components/project-cards");
vi.mock("../../lib/articles");
vi.mock("../../lib/courses");
vi.mock("../../lib/projects");

describe("<Home />", () => {
  const MockedLinkWithPrefetch = vi.mocked(LinkWithPrefetch);
  const MockedArticleCards = vi.mocked(ArticleCards);
  const MockedCourseCards = vi.mocked(CourseCards);
  const MockedProjectCards = vi.mocked(ProjectCards);

  const MockedGetArticles = vi.mocked(getArticles);
  const MockedGetCourses = vi.mocked(getCourses);
  const MockedGetProjects = vi.mocked(getProjects);

  beforeEach(() => {
    MockedLinkWithPrefetch.mockImplementation(({ to, children }) => (
      <a href={String(to)}>{children}</a>
    ));

    MockedGetArticles.mockImplementation(() =>
      Promise.resolve(MOCKED_ARTICLE_FEEDS),
    );
    MockedGetCourses.mockImplementation(() =>
      Promise.resolve(MOCKED_COURSE_FEEDS),
    );
    MockedGetProjects.mockImplementation(() =>
      Promise.resolve(MOCKED_PROJECT_FEEDS),
    );
  });

  afterEach(() => {
    MockedLinkWithPrefetch.mockRestore();
    MockedGetArticles.mockRestore();
    MockedGetCourses.mockRestore();
    MockedGetProjects.mockRestore();
  });

  test("should render hero section", async () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: Home,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(<Stub initialEntries={["/"]} />);

    await screen.findByText("Cześć, jestem Kuba! 🙋‍♂️");

    screen.getByText(
      "Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢",
    );

    expect(screen.getByText("📝 Najnowsze artykuły")).toHaveAttribute(
      "href",
      "/blog",
    );

    expect(screen.getByText("🏫 Lista kursów")).toHaveAttribute(
      "href",
      "/learning",
    );
  });

  test("should render articles section", async () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: Home,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(<Stub initialEntries={["/"]} />);

    await screen.findByText("Artykuły 📝");

    screen.getByText(
      "Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych.",
    );

    screen.getByText(
      "Czytaj, ucz się i bądź na bieżąco z najnowszymi trendami w świecie frontend developmentu!",
    );

    expect(MockedArticleCards).toHaveBeenCalledWith<
      [Parameters<typeof ArticleCards>[0], unknown]
    >(
      {
        articles: MOCKED_ARTICLE_FEEDS,
        variant: "outline",
      },
      undefined,
    );

    expect(screen.getByText("Zobacz wszystkie artykuły")).toHaveAttribute(
      "href",
      "/blog",
    );
  });

  test("should render courses section", async () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: Home,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(<Stub initialEntries={["/"]} />);

    await screen.findByText("Kursy 🏫 (a.k.a Learning)");

    screen.getByText(
      "Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe.",
    );

    expect(MockedCourseCards).toHaveBeenCalledWith<
      [Parameters<typeof CourseCards>[0], unknown]
    >(
      {
        courses: MOCKED_COURSE_FEEDS,
        variant: "outline",
      },
      undefined,
    );

    expect(screen.getByText("Zobacz wszystkie kursy")).toHaveAttribute(
      "href",
      "/learning",
    );
  });

  test("should render projects section", async () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: Home,
        loader,
        HydrateFallback: () => <div></div>,
      },
    ]);

    render(<Stub initialEntries={["/"]} />);

    await screen.findByText("Portfolio 🛠️");

    screen.getByText(
      "Oto moje portfolio frontendowe z projektami nowoczesnych stron i aplikacji internetowych. Sprawdź moje realizacje i zobacz, co potrafię!",
    );

    expect(MockedProjectCards).toHaveBeenCalledWith<
      [Parameters<typeof ProjectCards>[0], unknown]
    >(
      {
        projects: MOCKED_PROJECT_FEEDS,
        variant: "outline",
      },
      undefined,
    );

    expect(screen.getByText("Zobacz wszystkie projekty")).toHaveAttribute(
      "href",
      "/portfolio",
    );
  });
});
