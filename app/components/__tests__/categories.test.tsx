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
} from "../ui/link-with-prefetch";
import Categories, { type CategoriesProps } from "../categories";

vi.mock("../ui/link-with-prefetch");

describe("<Categories />", () => {
  let MockedLinkWithPrefetch: MockInstance;
  let MockedCategoriesProps: CategoriesProps;

  beforeEach(() => {
    MockedLinkWithPrefetch = vi
      .mocked(LinkWithPrefetch)
      .mockImplementation((props) => (
        <a href={String(props.to)} data-testid="link">
          {props.children}
        </a>
      ));

    MockedCategoriesProps = {
      categories: ["test", "example"],
      baseUrl: "/example",
      categoryPrefixUrl: "/example/categories",
    };
  });

  afterEach(() => {
    MockedLinkWithPrefetch.mockRestore();
  });

  test("given showAllCategory=false expect to render only given categories", () => {
    render(<Categories {...MockedCategoriesProps} showAllCategory={false} />);

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: `${MockedCategoriesProps.categoryPrefixUrl}/test`,
      } satisfies LinkWithPrefetchProps),
      undefined
    );

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: `${MockedCategoriesProps.categoryPrefixUrl}/example`,
      } satisfies LinkWithPrefetchProps),
      undefined
    );
  });

  test("given showAllCategory=true expect to render all-category link with given categories", () => {
    render(<Categories {...MockedCategoriesProps} showAllCategory={true} />);

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: MockedCategoriesProps.baseUrl,
      } satisfies LinkWithPrefetchProps),
      undefined
    );

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: `${MockedCategoriesProps.categoryPrefixUrl}/test`,
      } satisfies LinkWithPrefetchProps),
      undefined
    );

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({
        to: `${MockedCategoriesProps.categoryPrefixUrl}/example`,
      } satisfies LinkWithPrefetchProps),
      undefined
    );
  });
});
