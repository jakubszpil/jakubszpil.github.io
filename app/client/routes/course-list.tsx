import {
  Await,
  useLoaderData,
  type LoaderFunctionArgs,
  type ShouldRevalidateFunctionArgs,
} from "react-router";

import { Seo } from "~/shared/components/ui/seo";
import { capitalize } from "~/shared/lib/string";

import Categories from "../components/learning/categories";
import Courses from "../components/learning/courses";
import {
  getCourses,
  getCoursesByCategory,
  getCoursesCategories,
} from "../lib/courses";

export function shouldRevalidate({
  currentParams,
  nextParams,
}: ShouldRevalidateFunctionArgs) {
  const currentCategory = currentParams.category;
  const nextCategory = nextParams.category;
  return currentCategory !== nextCategory;
}

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  const categories = getCoursesCategories();

  if (category) {
    return {
      category,
      categories,
      courses: getCoursesByCategory(category),
    };
  }

  return {
    courses: getCourses(),
    categories,
    category,
  };
}

export default function CourseList() {
  const { courses, categories, category } = useLoaderData<typeof loader>();

  const title = category ? capitalize(category) : undefined;

  return (
    <>
      <Seo
        title={title ? `Learning / ${title}` : "Learning"}
        description="Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe."
      />

      <Await resolve={categories}>
        {(categories) => (
          <header className="prose container">
            <h1>{title ?? "Learning"}</h1>
            <Categories showAllCategory categories={categories} />
          </header>
        )}
      </Await>

      <Await resolve={courses}>
        {(courses) => <Courses key={category} courses={courses} />}
      </Await>
    </>
  );
}
