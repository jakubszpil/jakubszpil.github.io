import type { LoaderFunctionArgs } from "react-router";

import Categories from "../components/categories";
import Posts from "../components/posts";
import Seo from "../components/seo";
import { encode, useDecodedLoaderData } from "../lib/compress";
import { CourseService } from "../lib/courses";
import { getCapitalizedIndividualName } from "../lib/string";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return encode({
    categories: await CourseService.getCategories(),
    courses: await CourseService.findAllByCategory(category),
    title: category ? getCapitalizedIndividualName(category) : undefined,
  });
}

export default function CourseList() {
  const { courses, categories, title } = useDecodedLoaderData<typeof loader>();

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
