import type { LoaderFunctionArgs } from "react-router";

import Categories from "~/components/categories";
import Posts from "~/components/posts";
import { Seo } from "~/components/ui/seo";
import { encode, useDecodedLoaderData } from "~/lib/compress";
import { getCoursesByCategory, getCoursesCategories } from "~/lib/courses";
import { getCapitalizedIndividualName } from "~/lib/string";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return encode({
    category,
    categories: await getCoursesCategories(),
    courses: await getCoursesByCategory(category),
  });
}

export default function CourseList() {
  const { courses, categories, category } =
    useDecodedLoaderData<typeof loader>();

  const title = category ? getCapitalizedIndividualName(category) : undefined;

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
