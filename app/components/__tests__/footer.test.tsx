import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, test, vi } from "vitest";

import { getCurrentYear } from "../../lib/date";
import { LinkWithPrefetch } from "../ui/link-with-prefetch";
import { Footer } from "../footer";
import { FooterLink } from "../footer-link";

vi.mock("../../lib/date");
vi.mock("../ui/link-with-prefetch");

describe("<Footer />", () => {
  const MockedLinkWithPrefetch = vi.mocked(LinkWithPrefetch);
  const mockedGetCurrentYear = vi.mocked(getCurrentYear);

  beforeEach(() => {
    MockedLinkWithPrefetch.mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    mockedGetCurrentYear.mockImplementation(() => 2025);
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
      </Footer>,
    );

    await screen.findByText(/About/);

    await screen.findByText(/Search/);

    await screen.findByText(/2025/);
  });
});
