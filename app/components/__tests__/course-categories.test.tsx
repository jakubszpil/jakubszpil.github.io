import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { Categories, type CategoriesProps } from "../ui/categories";
import {
  CourseCategories,
  type CourseCategoriesProps,
} from "../course-categories";

vi.mock("../ui/categories");

describe("<CourseCategories />", () => {
  const MockedCategories = vi.mocked(Categories);

  const MOCKED_PROPS: CourseCategoriesProps = {
    categories: ["a", "b", "c", "d"],
    showAllCategory: true,
  };

  beforeEach(() => {
    MockedCategories.mockImplementation(() => <div>Categories</div>);
  });

  afterEach(() => {
    MockedCategories.mockRestore();
  });

  test("should render Categories component with proper data", () => {
    render(<CourseCategories {...MOCKED_PROPS} />);

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        baseUrl: "/learning",
        categoryPrefixUrl: "/learning/kategorie",
        categories: MOCKED_PROPS.categories,
        showAllCategory: MOCKED_PROPS.showAllCategory,
      } satisfies CategoriesProps,
      undefined,
    );
  });
});
