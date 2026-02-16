import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Categories } from "../components/ui/categories";
import { CourseCards } from "../components/course-cards";
import { getCoursesCategories, getCoursesByCategory } from "../lib/courses";
import { createMetaTags } from "../lib/meta";
import { getCapitalizedIndividualName } from "../lib/string";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return {
    categories: await getCoursesCategories(),
    courses: await getCoursesByCategory(category),
    title: category && getCapitalizedIndividualName(category),
  };
}

export const meta = createMetaTags<typeof loader>(({ loaderData }) => ({
  title: loaderData?.title ? `Learning / ${loaderData.title}` : "Learning",
  description:
    "Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe.",
}));

export default function CourseList() {
  const { courses, categories, title } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="prose container">
        <h1>{title ?? "Learning"}</h1>

        <Categories
          categories={categories}
          showAllCategory={true}
          baseUrl="/learning"
          categoryPrefixUrl="/learning/kategorie"
        />
      </header>

      <CourseCards courses={courses} />
    </>
  );
}
