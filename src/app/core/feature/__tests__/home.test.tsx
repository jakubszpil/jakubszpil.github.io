import {
  vi,
  MockInstance,
  beforeEach,
  afterEach,
  describe,
  test,
  expect,
} from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { LoaderData, useLoader } from "@libs/shared";
import { Articles } from "@libs/articles";

import Home, { loader } from "../home";
import { Courses } from "@libs/courses";

vi.mock("@libs/shared", async (importActual) => {
  const actual = await importActual<typeof import("@libs/shared")>();
  return {
    ...actual,
    useLoader: vi.fn(),
    Seo: vi.fn(),
  };
});

vi.mock("@libs/articles", async (importActual) => {
  const actual = await importActual<typeof import("@libs/articles")>();
  return {
    ...actual,
    Articles: vi.fn(),
  };
});

vi.mock("@libs/courses", async (importActual) => {
  const actual = await importActual<typeof import("@libs/courses")>();
  return {
    ...actual,
    Courses: vi.fn(),
  };
});

describe("Home route", () => {
  let MOCKED_LOADER_DATA: LoaderData<typeof loader>;
  let MOCKED_LOADER_HOOK: MockInstance;
  let MOCKED_ARTICLES_COMPONENT: MockInstance;
  let MOCKED_COURSES_COMPONENT: MockInstance;

  beforeEach(() => {
    MOCKED_LOADER_DATA = {
      articles: [],
      projects: [],
      courses: [],
    };

    MOCKED_LOADER_HOOK = vi
      .mocked(useLoader)
      .mockImplementation(() => MOCKED_LOADER_DATA);

    MOCKED_ARTICLES_COMPONENT = vi
      .mocked(Articles)
      .mockImplementation(() => <div>Articles</div>);

    MOCKED_COURSES_COMPONENT = vi
      .mocked(Courses)
      .mockImplementation(() => <div>Courses</div>);
  });

  afterEach(() => {
    MOCKED_LOADER_HOOK.mockRestore();
    MOCKED_ARTICLES_COMPONENT.mockRestore();
    MOCKED_COURSES_COMPONENT.mockRestore();
  });

  test("should render component with proper loader data", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await screen.findByText(
      `Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢`
    );

    expect(MOCKED_ARTICLES_COMPONENT).toHaveBeenCalledWith(
      expect.objectContaining({
        articles: MOCKED_LOADER_DATA.articles,
      }),
      {}
    );

    expect(MOCKED_COURSES_COMPONENT).toHaveBeenCalledWith(
      expect.objectContaining({
        courses: MOCKED_LOADER_DATA.courses,
      }),
      {}
    );
  });
});
