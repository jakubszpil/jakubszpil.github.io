import { Link } from "react-router";
import {
  afterEach,
  beforeEach,
  describe,
  test,
  vi,
  type MockInstance,
} from "vitest";
import { render, screen } from "@testing-library/react";

import { getCurrentYear } from "~/shared/lib/date";

import Footer from "../footer";
import FooterLink from "../footer-link";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    Link: vi.fn(),
  };
});

vi.mock("~/shared/lib/date");

describe("<Footer />", () => {
  let MockedLink: MockInstance;
  let mockedGetCurrentYear: MockInstance;

  beforeEach(() => {
    MockedLink = vi.mocked(Link).mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    mockedGetCurrentYear = vi
      .mocked(getCurrentYear)
      .mockImplementation(() => 2025);
  });

  afterEach(() => {
    MockedLink.mockRestore();
    mockedGetCurrentYear.mockRestore();
  });

  test("should render", async () => {
    render(
      <Footer>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/search">Search</FooterLink>
      </Footer>
    );

    await screen.findByText(/About/);

    await screen.findByText(/Search/);

    await screen.findByText(/2025/);
  });
});
