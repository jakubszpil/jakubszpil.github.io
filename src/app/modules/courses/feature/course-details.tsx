import type { LoaderFunctionArgs as LFA } from "react-router-dom";

import { Seo } from "@/shared/ui/seo";
import { json, useLoader } from "@/shared/utils/routing";

import { getCourse, getCoursesSlugs } from "../data-access/courses";
import Categories from "../ui/categories";

export async function loader({ params, request }: LFA) {
  const slug = params.slug!;
  const slugs = await getCoursesSlugs(request);

  if (!slugs.includes(slug))
    throw new Response(null, {
      status: 404,
      statusText: "Nie znaleziono",
    });

  const course = await getCourse(request, slug);

  return json(course);
}

export default function CourseDetails() {
  const course = useLoader<typeof loader>();

  return (
    <>
      <Seo
        title={course.title}
        description={course.description}
        keywords={course.keywords}
      />

      <header className="prose container">
        <h1>{course.title}</h1>
        <Categories categories={course.categories} />
      </header>

      <article
        className="prose container"
        dangerouslySetInnerHTML={{ __html: course.content }}
      />
    </>
  );
}
