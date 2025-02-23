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

import Categories, { type CategoriesProps } from "../categories";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router")>();
  return {
    ...actual,
    Link: vi.fn(),
  };
});

describe("<Categories />", () => {
  let MockedLink: MockInstance;
  let MockedCategoriesProps: CategoriesProps;

  beforeEach(() => {
    MockedLink = vi.mocked(Link).mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));

    MockedCategoriesProps = {
      categories: ["test", "example"],
    };
  });

  afterEach(() => {
    MockedLink.mockRestore();
  });

  test("given showAllCategory=false expect to render only given categories", () => {
    render(<Categories {...MockedCategoriesProps} showAllCategory={false} />);

    expect(MockedLink).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: "/blog/kategorie/test",
      } satisfies LinkProps),
      undefined
    );

    expect(MockedLink).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/blog/kategorie/example",
      } satisfies LinkProps),
      undefined
    );
  });

  test("given showAllCategory=true expect to render all-category link with given categories", () => {
    render(<Categories {...MockedCategoriesProps} showAllCategory={true} />);

    expect(MockedLink).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: "/blog",
      } satisfies LinkProps),
      undefined
    );

    expect(MockedLink).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: "/blog/kategorie/test",
      } satisfies LinkProps),
      undefined
    );

    expect(MockedLink).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({
        to: "/blog/kategorie/example",
      } satisfies LinkProps),
      undefined
    );
  });
});
