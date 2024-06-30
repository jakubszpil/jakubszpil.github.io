import { defineLoader, Seo, useLoader } from "@libs/shared";

import { getCourses, getCoursesCategories } from "../data-access/courses";
import CategoryList from "../ui/categories";
import Courses from "../ui/courses";

export const loader = defineLoader(() => {
  const courses = getCourses();
  const categories = getCoursesCategories();

  return {
    courses,
    categories,
  };
});

export default function CourseList() {
  const { courses, categories } = useLoader<typeof loader>();

  return (
    <>
      <Seo
        title="Learning"
        description="Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe."
      />
      <header className="prose container">
        <h1>Learning</h1>
        <CategoryList showAllCategory categories={categories} />
      </header>

      <Courses courses={courses} />
    </>
  );
}
