import { render } from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockedFunction,
} from "vitest";

import { Categories, type CategoriesProps } from "../ui/categories";
import {
  ArticleCategories,
  type ArticleCategoriesProps,
} from "../article-categories";

vi.mock("../ui/categories");

describe("<ArticleCategories />", () => {
  let MockedCategories: MockedFunction<typeof Categories>;

  const MOCKED_PROPS: ArticleCategoriesProps = {
    categories: ["a", "b", "c", "d"],
    showAllCategory: true,
  };

  beforeEach(() => {
    MockedCategories = vi
      .mocked(Categories)
      .mockImplementation(() => <div>Categories</div>);
  });

  afterEach(() => {
    MockedCategories.mockRestore();
  });

  test("should render Categories component with proper data", () => {
    render(<ArticleCategories {...MOCKED_PROPS} />);

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        baseUrl: "/blog",
        categoryPrefixUrl: "/blog/kategorie",
        categories: MOCKED_PROPS.categories,
        showAllCategory: MOCKED_PROPS.showAllCategory,
      } satisfies CategoriesProps,
      undefined,
    );
  });
});
