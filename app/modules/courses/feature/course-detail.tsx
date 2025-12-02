import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Banner, EditResource, Seo } from "@packages/shared";

import { CourseService } from "../data-access/course-service";
import { CourseCategories } from "../ui/course-categories";
import { CourseQuiz } from "../ui/course-quiz";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  const course = await CourseService.findUnique(slug);

  if (!course) {
    throw new Response(null, {
      status: 404,
      statusText: "Nie znaleziono",
    });
  }

  return course;
}

export default function CourseDetail() {
  const course = useLoaderData<typeof loader>();

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
        <CourseCategories categories={course.categories} />
      </header>

      <article
        className="prose container pt-0 prose-emerald"
        dangerouslySetInnerHTML={{ __html: course.content }}
      />

      <CourseQuiz quiz={course.quiz} />

      <EditResource slug={course.slug} resourceType="courses" />
    </>
  );
}
