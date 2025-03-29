import { Await, useLoaderData, type LoaderFunctionArgs } from "react-router";

import Categories from "@/components/learning/categories";
import { EditResource } from "@/components/ui/edit-resource";
import { Seo } from "@/components/ui/seo";
import { getCourse } from "@/lib/courses";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  const course = getCourse(slug!);

  return { course };
}

export default function CourseDetails() {
  const { course } = useLoaderData<typeof loader>();

  return (
    <Await resolve={course}>
      {(course) => (
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

          <EditResource resourceUrl={course.resourceUrl} />
        </>
      )}
    </Await>
  );
}
