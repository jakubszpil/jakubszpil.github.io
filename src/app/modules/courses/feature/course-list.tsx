import {
  capitalize,
  defineLoader,
  notFound,
  Seo,
  useLoader,
} from "@libs/shared";

import {
  getCourses,
  getCoursesByCategory,
  getCoursesCategories,
} from "../data-access/courses";
import CategoryList from "../ui/categories";
import Courses from "../ui/courses";

export const loader = defineLoader(async ({ params }) => {
  const category = params.category;
  const categories = await getCoursesCategories();

  if (category) {
    if (!categories.includes(category)) throw notFound();

    return {
      category,
      categories,
      courses: await getCoursesByCategory(category),
    };
  }

  return {
    courses: await getCourses(),
    categories,
  };
});

export default function CourseList() {
  const { courses, categories, category } = useLoader<typeof loader>();

  const title = capitalize(category ?? "Learning");

  return (
    <>
      <Seo
        title={title}
        description="Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe."
      />

      <header className="prose container">
        <h1>{title}</h1>
        <CategoryList showAllCategory categories={categories} />
      </header>

      <Courses courses={courses} />
    </>
  );
}
