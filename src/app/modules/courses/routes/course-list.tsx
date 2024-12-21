import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Seo } from "~/components/ui/seo";
import { capitalize } from "~/lib/string";

import {
  getCourses,
  getCoursesByCategory,
  getCoursesCategories,
} from "../lib/courses";
import CategoryList from "../components/categories";
import Courses from "../components/courses";

export async function loader({ params }: LoaderFunctionArgs) {
  const category = params.category;
  const categories = await getCoursesCategories();

  if (category) {
    if (!categories.includes(category))
      throw new Response(null, {
        status: 404,
        statusText: "Nie znaleziono",
      });

    return {
      category,
      categories,
      courses: await getCoursesByCategory(category),
    };
  }

  return {
    courses: await getCourses(),
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

      <header className="prose container">
        <h1>{title ?? "Learning"}</h1>
        <CategoryList showAllCategory categories={categories} />
      </header>

      <Courses courses={courses} />
    </>
  );
}
