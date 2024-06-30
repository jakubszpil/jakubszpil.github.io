import { defineLoader, notFound, Seo, useLoader } from "@libs/shared";

import {
  getCoursesByCategory,
  getCoursesCategories,
} from "../data-access/courses";
import Categories from "../ui/categories";
import Courses from "../ui/courses";

export const loader = defineLoader(({ params }) => {
  const category = params.category!;
  const categories = getCoursesCategories();

  if (!categories.includes(category)) throw notFound();

  const courses = getCoursesByCategory(category);

  return {
    category,
    categories,
    courses,
  };
});

export default function CourseCategory() {
  const { courses, categories, category } = useLoader<typeof loader>();

  return (
    <>
      <Seo
        title={`Kategoria: ${category}`}
        description="Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe."
      />

      <header className="prose container">
        <h1 className="capitalize">{category}</h1>
        <Categories showAllCategory categories={categories} />
      </header>

      <Courses courses={courses} />
    </>
  );
}
