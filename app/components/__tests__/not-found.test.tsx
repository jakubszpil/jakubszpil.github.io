import { render, screen } from "@testing-library/react";
import { Link, useLocation, type LinkProps, type Location } from "react-router";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";

import NotFound from "../not-found";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    Link: vi.fn(),
    useLocation: vi.fn(),
  };
});

describe("<NotFound />", () => {
  let MockedLocation: Location<unknown>;
  let mockedUseLocation: MockInstance;
  let MockedLink: MockInstance;

  beforeEach(() => {
    MockedLocation = {
      pathname: "/test/path",
      hash: "",
      key: "",
      search: "",
      state: "",
    };

    mockedUseLocation = vi
      .mocked(useLocation)
      .mockImplementation(() => MockedLocation);

    MockedLink = vi.mocked(Link).mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));
  });

  afterEach(() => {
    mockedUseLocation.mockRestore();
    MockedLink.mockRestore();
  });

  test("should render", async () => {
    render(<NotFound />);

    await screen.findByText("Oops! Strona nie została znaleziona 🙁 (404)");

    screen.getByText(
      "Przepraszam, ale strona, której szukasz, nie istnieje. Może to być spowodowane jednym z poniższych powodów:"
    );
    screen.getByText("Adres strony został wpisany niepoprawnie.");
    screen.getByText("Strona została przeniesiona lub usunięta.");
    screen.getByText("Link może być nieaktualny.");
    screen.getByText("Co możesz teraz zrobić?");

    expect(MockedLink).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: MockedLocation.pathname,
        children: "🤔 Sprawdź adres URL",
      } satisfies LinkProps),
      undefined
    );

    screen.getByText("- Upewnij się, że wpisany adres jest poprawny.");

    expect(MockedLink).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/",
        children: "🏠 Przejdź do strony głównej",
      } satisfies LinkProps),
      undefined
    );

    screen.getByText("- Kliknij tutaj aby wrócić na stronę główną.");

    expect(MockedLink).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({
        to: "/search",
        children: "🔍 Szukaj",
      } satisfies LinkProps),
      undefined
    );

    screen.getByText(
      "- Skorzystaj z wyszukiwarki, aby znaleźć potrzebne informacje."
    );

    screen.getByText(
      "Dziękuję za zrozumienie i przepraszam za wszelkie niedogodności!"
    );
  });
});
