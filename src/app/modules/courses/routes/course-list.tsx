import {
  data,
  useLoaderData,
  type LoaderFunctionArgs as LFA,
} from "react-router";

import { Seo } from "~/components/ui/seo";
import { capitalize } from "~/lib/string";

import {
  getCourses,
  getCoursesByCategory,
  getCoursesCategories,
} from "../lib/courses";
import CategoryList from "../components/categories";
import Courses from "../components/courses";

export async function loader({ params, request }: LFA) {
  const category = params.category;
  const categories = await getCoursesCategories(request);

  if (category) {
    if (!categories.includes(category))
      throw new Response(null, {
        status: 404,
        statusText: "Nie znaleziono",
      });

    return data({
      category,
      categories,
      courses: await getCoursesByCategory(request, category),
    });
  }

  return data({
    courses: await getCourses(request),
    categories,
    category,
  });
}

export default function CourseList() {
  const { courses, categories, category } = useLoaderData<typeof loader>();

  const title = category ? capitalize(category) : undefined;

  return (
    <>
      <Seo
        title={title ? `Learning / ${title}` : "Learning"}
        description="Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe."
      />

      <header className="prose container">
        <h1>{title ?? "Learning"}</h1>
        <CategoryList showAllCategory categories={categories} />
      </header>

      <Courses
        courses={courses}
        locationState={{
          pathname: category ? `/learning/kategorie/${category}` : "/learning",
          label: "Powrót do listy kursów",
        }}
      />
    </>
  );
}
