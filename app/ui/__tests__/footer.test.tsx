import {
  afterEach,
  beforeEach,
  describe,
  test,
  vi,
  type MockInstance,
} from "vitest";
import { render, screen } from "@testing-library/react";

import { getCurrentYear, LinkWithPrefetch } from "@packages/shared";

import { Footer } from "../footer";
import { FooterLink } from "../footer-link";

vi.mock("@packages/shared", async (importActual) => ({
  ...(await importActual()),
  getCurrentYear: vi.fn(),
  LinkWithPrefetch: vi.fn(),
}));

describe("<Footer />", () => {
  let MockedLinkWithPrefetch: MockInstance<typeof LinkWithPrefetch>;
  let mockedGetCurrentYear: MockInstance<typeof getCurrentYear>;

  beforeEach(() => {
    MockedLinkWithPrefetch = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation((props) => (
        <a href={String(props.to)} data-testid="link">
          {props.children}
        </a>
      ));

    mockedGetCurrentYear = vi
      .mocked(getCurrentYear)
      .mockImplementation(() => 2025);
  });

  afterEach(() => {
    MockedLinkWithPrefetch.mockRestore();
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
