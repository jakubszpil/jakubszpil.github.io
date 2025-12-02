import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Categories } from "../../../shared/ui/categories";
import { Posts } from "../../../shared/ui/posts";
import { CourseService } from "../../../lib/courses";
import { Seo } from "../../../shared/ui/seo";
import { getCapitalizedIndividualName } from "../../../shared/utils/string";

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
        <Categories
          showAllCategory
          categories={categories}
          baseUrl="/learning"
          categoryPrefixUrl="/learning/kategorie"
        />
      </header>

      <Posts pathPrefix="/learning" posts={courses} />
    </>
  );
}
