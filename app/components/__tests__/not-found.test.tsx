import { render, screen } from "@testing-library/react";
import { useLocation, type Location } from "react-router";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";

import LinkWithPrefetch, {
  type LinkWithPrefetchProps,
} from "../link-with-prefetch";
import NotFound from "../not-found";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    useLocation: vi.fn(),
  };
});

vi.mock("../link-with-prefetch");

describe("<NotFound />", () => {
  let MockedLocation: Location<unknown>;
  let mockedUseLocation: MockInstance<typeof useLocation>;
  let MockedLinkWithPrefetch: MockInstance<typeof LinkWithPrefetch>;

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

    MockedLinkWithPrefetch = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation((props) => (
        <a href={String(props.to)} data-testid="link">
          {props.children}
        </a>
      ));
  });

  afterEach(() => {
    mockedUseLocation.mockRestore();
    MockedLinkWithPrefetch.mockRestore();
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

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: MockedLocation.pathname,
        children: "🤔 Sprawdź adres URL",
      } satisfies LinkWithPrefetchProps),
      undefined
    );

    screen.getByText("- Upewnij się, że wpisany adres jest poprawny.");

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/",
        children: "🏠 Przejdź do strony głównej",
      } satisfies LinkWithPrefetchProps),
      undefined
    );

    screen.getByText("- Kliknij tutaj aby wrócić na stronę główną.");

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({
        to: "/search",
        children: "🔍 Szukaj",
      } satisfies LinkWithPrefetchProps),
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
