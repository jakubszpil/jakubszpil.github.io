import { defineLoader, notFound, Seo, useLoader } from "@libs/shared";

import {
  getCourses,
  getCoursesByCategory,
  getCoursesCategories,
} from "../data-access/courses";
import CategoryList from "../ui/categories";
import Courses from "../ui/courses";

export const loader = defineLoader(({ params }) => {
  const category = params.category;
  const categories = getCoursesCategories();

  if (category) {
    if (!categories.includes(category)) throw notFound();
    const courses = getCoursesByCategory(category);

    return {
      category,
      categories,
      courses,
    };
  }

  const courses = getCourses();

  return {
    courses,
    categories,
  };
});

export default function CourseList() {
  const { courses, categories, category } = useLoader<typeof loader>();

  return (
    <>
      <Seo
        title={category ? `Kategoria: ${category}` : "Learning"}
        description="Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe."
      />
      <header className="prose container">
        <h1 className="capitalize">{category ?? "Learning"}</h1>
        <CategoryList showAllCategory categories={categories} />
      </header>

      <Courses courses={courses} />
    </>
  );
}
