import {
  afterEach,
  beforeEach,
  describe,
  test,
  vi,
  type MockInstance,
} from "vitest";
import { render, screen } from "@testing-library/react";

import { getCurrentYear } from "~/lib/date";

import Footer from "../footer";
import FooterLink from "../footer-link";
import { LinkWithPrefetch } from "../ui/link-with-prefetch";

vi.mock("../ui/link-with-prefetch");
vi.mock("~/lib/date");

describe("<Footer />", () => {
  let MockedLinkWithPrefetch: MockInstance;
  let mockedGetCurrentYear: MockInstance;

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
