import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { createMetaTags, getCapitalizedIndividualName } from "@packages/shared";

import {
  getCourseCategories,
  findAllCoursesByCategory,
} from "../data-access/course-service";
import { CourseCards } from "../ui/course-cards";
import { CourseCategories } from "../ui/course-categories";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return {
    categories: await getCourseCategories(),
    courses: await findAllCoursesByCategory(category),
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
        <CourseCategories showAllCategory categories={categories} />
      </header>

      <CourseCards courses={courses} />
    </>
  );
}
