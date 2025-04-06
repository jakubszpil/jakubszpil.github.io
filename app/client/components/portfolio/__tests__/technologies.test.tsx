import { render } from "@testing-library/react";
import { Link, type LinkProps } from "react-router";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";

import Technologies, { type TechnologiesProps } from "../technologies";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    Link: vi.fn(),
  };
});

describe("<Technologies />", () => {
  let MockedLink: MockInstance;
  let MockedTechnologiesProps: TechnologiesProps;

  beforeEach(() => {
    MockedLink = vi.mocked(Link).mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    MockedTechnologiesProps = {
      technologies: ["test", "example"],
    };
  });

  afterEach(() => {
    MockedLink.mockRestore();
  });

  test("given showAllTechnology=false expect to render only given technologies", () => {
    render(
      <Technologies {...MockedTechnologiesProps} showAllTechnology={false} />
    );

    expect(MockedLink).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: "/portfolio/technologie/test",
      } satisfies LinkProps),
      undefined
    );

    expect(MockedLink).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/portfolio/technologie/example",
      } satisfies LinkProps),
      undefined
    );
  });

  test("given showAllTechnology=true expect to render all-category link with given categories", () => {
    render(
      <Technologies {...MockedTechnologiesProps} showAllTechnology={true} />
    );

    expect(MockedLink).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: "/portfolio",
      } satisfies LinkProps),
      undefined
    );

    expect(MockedLink).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/portfolio/technologie/test",
      } satisfies LinkProps),
      undefined
    );

    expect(MockedLink).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({
        to: "/portfolio/technologie/example",
      } satisfies LinkProps),
      undefined
    );
  });
});
