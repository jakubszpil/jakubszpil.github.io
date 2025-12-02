import { render, screen } from "@testing-library/react";
import {
  type MockInstance,
  describe,
  expect,
  test,
  vi,
  beforeEach,
  afterEach,
} from "vitest";

import { getDifferenceInYears, Seo } from "@packages/shared";

import Socials from "../../ui/socials";
import About from "../about";

vi.mock("../../ui/socials");

vi.mock("@packages/shared", async (importOriginal) => ({
  ...(await importOriginal()),
  getDifferenceInYears: vi.fn(),
  Seo: vi.fn(),
}));

describe("<About />", () => {
  let MockedSeo: MockInstance<typeof Seo>;
  let MockedSocials: MockInstance<typeof Socials>;
  let MockedGetDifferenceInYears: MockInstance<typeof getDifferenceInYears>;

  beforeEach(() => {
    MockedSeo = vi.mocked(Seo);
    MockedSocials = vi.mocked(Socials);
    MockedGetDifferenceInYears = vi
      .mocked(getDifferenceInYears)
      .mockImplementation(() => 3);
  });

  afterEach(() => {
    MockedSeo.mockRestore();
    MockedSocials.mockRestore();
    MockedGetDifferenceInYears.mockRestore();
  });

  test("renders the correct description in Seo component", () => {
    render(<About />);
    screen.getByText(
      "Cześć! Nazywam się Kuba i jestem frontend developerem z 3-letnim doświadczeniem w tworzeniu nowoczesnych, responsywnych i przyjaznych użytkownikowi aplikacji internetowych. Moja przygoda z programowaniem zaczęła się od fascynacji technologią i chęci tworzenia rzeczy, które naprawdę mają wpływ na codzienne życie ludzi."
    );
  });

  test("renders the correct title", () => {
    render(<About />);
    screen.getByText("O mnie");
  });

  test("renders the correct number of paragraphs", () => {
    render(<About />);
    const paragraphs = screen.getAllByRole("paragraph");
    expect(paragraphs).toHaveLength(6);
  });
});
