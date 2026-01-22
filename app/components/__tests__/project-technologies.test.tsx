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
  ProjectTechnologies,
  type ProjectTechnologiesProps,
} from "../project-technologies";

vi.mock("../ui/categories");

describe("<ProjectTechnologies />", () => {
  let MockedCategories: MockedFunction<typeof Categories>;

  const MOCKED_PROPS: ProjectTechnologiesProps = {
    technologies: ["a", "b", "c", "d"],
    showAllTechnology: true,
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
    render(<ProjectTechnologies {...MOCKED_PROPS} />);

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        baseUrl: "/portfolio",
        categoryPrefixUrl: "/portfolio/technologie",
        categories: MOCKED_PROPS.technologies,
        showAllCategory: MOCKED_PROPS.showAllTechnology,
      } satisfies CategoriesProps,
      undefined,
    );
  });
});
