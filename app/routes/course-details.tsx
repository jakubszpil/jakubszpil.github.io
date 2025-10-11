import type { LoaderFunctionArgs } from "react-router";

import Categories from "~/components/categories";
import EditResource from "~/components/edit-resource";
import Quiz from "~/components/quiz";
import { Banner } from "~/components/ui/banner";
import { Seo } from "~/components/ui/seo";
import { encode, useDecodedLoaderData } from "~/lib/compress";
import { CourseService } from "~/lib/courses";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  const course = await CourseService.findUnique(slug);

  if (!course) {
    throw new Response(null, {
      status: 404,
      statusText: "Nie znaleziono",
    });
  }

  return encode(course);
}

export default function CourseDetails() {
  const course = useDecodedLoaderData<typeof loader>();

  return (
    <>
      <Seo
        title={course.title}
        description={course.description}
        keywords={course.keywords}
        publishedTime={course.createdAt}
        type="article"
      />

      <header className="prose container">
        <h1 className="mb-5">{course.title}</h1>
        <Banner
          className="my-6"
          createdAt={course.createdAt}
          readingTime={course.readingTime}
        />
        <Categories
          categories={course.categories}
          baseUrl="/learning"
          categoryPrefixUrl="/learning/kategorie"
        />
      </header>

      <article
        className="prose container pt-0 prose-emerald"
        dangerouslySetInnerHTML={{ __html: course.content }}
      />

      {course.quiz && <Quiz quiz={course.quiz} />}

      <EditResource slug={course.slug} resourceType="courses" />
    </>
  );
}
