import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { BackToPreviousPage } from "~/components/ui/back-to-previous-page";
import { EditResource } from "~/components/ui/edit-resource";
import { Seo } from "~/components/ui/seo";

import { getCourse, getCoursesSlugs } from "../lib/courses";
import Categories from "../components/categories";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const slug = params.slug!;
  const slugs = await getCoursesSlugs(request);

  if (!slugs.includes(slug))
    throw new Response(null, {
      status: 404,
      statusText: "Nie znaleziono",
    });

  const course = await getCourse(request, slug);

  return course;
}

export default function CourseDetails() {
  const course = useLoaderData<typeof loader>();

  return (
    <>
      <Seo
        title={course.title}
        description={course.description}
        keywords={course.keywords}
      />

      <header className="prose container">
        <BackToPreviousPage />
        <h1>{course.title}</h1>
        <Categories categories={course.categories} prefix=".." />
      </header>

      <article
        className="prose container"
        dangerouslySetInnerHTML={{ __html: course.content }}
      />

      <EditResource resourceUrl={course.resourceUrl} />
    </>
  );
}
