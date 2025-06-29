import { render } from "@testing-library/react";

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";

import {
  LinkWithPrefetch,
  type LinkWithPrefetchProps,
} from "../../ui/link-with-prefetch";
import Technologies, { type TechnologiesProps } from "../technologies";

vi.mock("../../ui/link-with-prefetch");

describe("<Technologies />", () => {
  let MockedLinkWithPrefetch: MockInstance;
  let MockedTechnologiesProps: TechnologiesProps;

  beforeEach(() => {
    MockedLinkWithPrefetch = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation((props) => (
        <a href={String(props.to)} data-testid="link">
          {props.children}
        </a>
      ));

    MockedTechnologiesProps = {
      technologies: ["test", "example"],
    };
  });

  afterEach(() => {
    MockedLinkWithPrefetch.mockRestore();
  });

  test("given showAllTechnology=false expect to render only given technologies", () => {
    render(
      <Technologies {...MockedTechnologiesProps} showAllTechnology={false} />
    );

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: "/portfolio/technologie/test",
      } satisfies LinkWithPrefetchProps),
      undefined
    );

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/portfolio/technologie/example",
      } satisfies LinkWithPrefetchProps),
      undefined
    );
  });

  test("given showAllTechnology=true expect to render all-category link with given categories", () => {
    render(
      <Technologies {...MockedTechnologiesProps} showAllTechnology={true} />
    );

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: "/portfolio",
      } satisfies LinkWithPrefetchProps),
      undefined
    );

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/portfolio/technologie/test",
      } satisfies LinkWithPrefetchProps),
      undefined
    );

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({
        to: "/portfolio/technologie/example",
      } satisfies LinkWithPrefetchProps),
      undefined
    );
  });
});
