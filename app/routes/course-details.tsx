import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import Categories from "~/components/learning/categories";
import Quiz from "~/components/quiz";
import { EditResource } from "~/components/ui/edit-resource";
import { Seo } from "~/components/ui/seo";
import { getCourse } from "~/lib/courses";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  const course = await getCourse(slug!);

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
        <h1>{course.title}</h1>
        <Categories categories={course.categories} />
      </header>

      <article
        className="prose container prose-emerald"
        dangerouslySetInnerHTML={{ __html: course.content }}
      />

      {course.quiz && <Quiz quiz={course.quiz} />}

      <EditResource resourceUrl={course.resourceUrl} />
    </>
  );
}
