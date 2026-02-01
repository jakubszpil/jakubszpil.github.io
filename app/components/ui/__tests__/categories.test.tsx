import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import {
  LinkWithPrefetch,
  type LinkWithPrefetchProps,
} from "../link-with-prefetch";
import { Categories, type CategoriesProps } from "../categories";

vi.mock("../link-with-prefetch");

describe("<Categories />", () => {
  const MockedLinkWithPrefetch = vi.mocked(LinkWithPrefetch);

  const MockedCategoriesProps: CategoriesProps = {
    categories: ["test", "example"],
    baseUrl: "/example",
    categoryPrefixUrl: "/example/categories",
  };

  beforeEach(() => {
    MockedLinkWithPrefetch.mockImplementation((props) => (
      <a href={String(props.to)} data-testid="link">
        {props.children}
      </a>
    ));
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
      undefined,
    );

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: `${MockedCategoriesProps.categoryPrefixUrl}/example`,
      } satisfies LinkWithPrefetchProps),
      undefined,
    );
  });

  test("given showAllCategory=true expect to render all-category link with given categories", () => {
    render(<Categories {...MockedCategoriesProps} showAllCategory={true} />);

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        to: MockedCategoriesProps.baseUrl,
      } satisfies LinkWithPrefetchProps),
      undefined,
    );

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        to: `${MockedCategoriesProps.categoryPrefixUrl}/test`,
      } satisfies LinkWithPrefetchProps),
      undefined,
    );

    expect(MockedLinkWithPrefetch).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({
        to: `${MockedCategoriesProps.categoryPrefixUrl}/example`,
      } satisfies LinkWithPrefetchProps),
      undefined,
    );
  });
});
