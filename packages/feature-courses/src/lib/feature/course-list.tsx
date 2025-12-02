import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Seo, getCapitalizedIndividualName } from "@packages/shared";

import { CourseService } from "../data-access/course-service";
import { CourseCards } from "../ui/course-cards";
import { CourseCategories } from "../ui/course-categories";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return {
    categories: await CourseService.getCategories(),
    courses: await CourseService.findAllByCategory(category),
    title: category && getCapitalizedIndividualName(category),
  };
}

export default function CourseList() {
  const { courses, categories, title } = useLoaderData<typeof loader>();

  return (
    <>
      <Seo
        title={title ? `Learning / ${title}` : "Learning"}
        description="Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe."
      />

      <header className="prose container">
        <h1>{title ?? "Learning"}</h1>
        <CourseCategories showAllCategory categories={categories} />
      </header>

      <CourseCards courses={courses} />
    </>
  );
}
