import { render, screen } from "@testing-library/react";
import { createRoutesStub, generatePath } from "react-router";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
  type MockInstance,
} from "vitest";

import { Seo, type SeoProps } from "~/shared/components/ui/seo";

import Categories, {
  type CategoriesProps,
} from "../../components/learning/categories";
import EditResource, {
  type EditResourceProps,
} from "../../components/edit-resource";
import { getCourse, type Course } from "../../lib/courses";
import CourseDetails, { loader } from "../course-details";

vi.mock("~/shared/components/ui/seo");
vi.mock("../../components/learning/categories");
vi.mock("../../components/edit-resource");
vi.mock("../../lib/courses");

describe("<CourseDetails />", () => {
  let MockedCategories: MockInstance;
  let MockedEditResource: MockInstance;
  let MockedSeo: MockInstance;

  let MockedCourse: Course;
  let MockedGetCourse: MockInstance;

  beforeEach(() => {
    MockedCategories = vi.mocked(Categories);
    MockedEditResource = vi.mocked(EditResource);
    MockedSeo = vi.mocked(Seo);

    MockedCourse = {
      id: "123",
      slug: "test-example",
      content: "<p>Test content</p>",
      title: "Test title",
      description: "Test description",
      keywords: ["test", "example"],
      categories: ["test", "example"],
      createdAt: "2025-03-17",
      resourceUrl: "https://example.com",
    };

    MockedGetCourse = vi
      .mocked(getCourse)
      .mockImplementation(() => Promise.resolve(MockedCourse));
  });

  afterEach(() => {
    MockedCategories.mockRestore();
    MockedEditResource.mockRestore();
    MockedSeo.mockRestore();
    MockedGetCourse.mockRestore();
  });

  test("should render component", async () => {
    const Stub = createRoutesStub([
      {
        path: "/learning/:slug",
        Component: CourseDetails,
        loader,
      },
    ]);

    render(
      <Stub
        initialEntries={[
          generatePath("/learning/:slug", { slug: MockedCourse.slug }),
        ]}
      />
    );

    await screen.findByText(MockedCourse.title);

    expect(MockedGetCourse).toHaveBeenCalledWith(MockedCourse.slug);

    expect(MockedSeo).toHaveBeenCalledWith(
      {
        title: MockedCourse.title,
        description: MockedCourse.description,
        keywords: MockedCourse.keywords,
      } satisfies SeoProps,
      undefined
    );

    expect(MockedCategories).toHaveBeenCalledWith(
      {
        categories: MockedCourse.categories,
      } satisfies CategoriesProps,
      undefined
    );

    expect(MockedEditResource).toHaveBeenCalledWith(
      {
        resourceUrl: MockedCourse.resourceUrl,
      } satisfies EditResourceProps,
      undefined
    );
  });
});
