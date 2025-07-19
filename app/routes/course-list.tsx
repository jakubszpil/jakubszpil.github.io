import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import Categories from "~/components/learning/categories";
import Courses from "~/components/learning/courses";
import { Seo } from "~/components/ui/seo";
import { getCoursesByCategory, getCoursesCategories } from "~/lib/courses";
import {
  capitalize,
  retrieveIndividualName,
  retrieveSpaceInString,
} from "~/lib/string";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return {
    category,
    categories: await getCoursesCategories(),
    courses: await getCoursesByCategory(category),
  };
}

export default function CourseList() {
  const { courses, categories, category } = useLoaderData<typeof loader>();

  const title = category
    ? retrieveIndividualName(capitalize(retrieveSpaceInString(category)))
    : undefined;

  return (
    <>
      <Seo
        title={title ? `Learning / ${title}` : "Learning"}
        description="Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe."
      />

      <header className="prose container">
        <h1>{title ?? "Learning"}</h1>
        <Categories showAllCategory categories={categories} />
      </header>

      <Courses key={category} courses={courses} />
    </>
  );
}
