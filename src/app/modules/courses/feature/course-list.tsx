import { type LoaderFunctionArgs as LFA } from "react-router-dom";

import { capitalize, json, Seo, useLoader } from "@libs/shared";

import {
  Course,
  getCourses,
  getCoursesByCategory,
  getCoursesCategories,
} from "../data-access/courses";
import CategoryList from "../ui/categories";
import Courses from "../ui/courses";

export interface CourseListLoaderData {
  category: string | undefined;
  categories: string[];
  courses: Course[];
}

export async function loader({ params }: LFA) {
  const category = params.category;
  const categories = await getCoursesCategories();

  if (category) {
    if (!categories.includes(category))
      throw new Response(null, {
        status: 404,
        statusText: "Nie znaleziono",
      });

    return json({
      category,
      categories,
      courses: await getCoursesByCategory(category),
    });
  }

  return json({
    courses: await getCourses(),
    categories,
    category,
  });
}

export default function CourseList() {
  const { courses, categories, category } = useLoader<typeof loader>();

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
