import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import {
  Banner,
  createMetaTags,
  EditResource,
  notFound,
} from "@packages/shared";

import { findUniqueCourse } from "../data-access/course-service";
import { CourseCategories } from "../ui/course-categories";
import { CourseQuiz } from "../ui/course-quiz";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  const course = await findUniqueCourse(slug);

  if (!course) throw notFound();

  return course;
}

export const meta = createMetaTags<typeof loader>(({ loaderData: course }) => ({
  title: course?.title,
  description: course?.description,
  keywords: course?.keywords,
  publishedTime: course?.createdAt,
  type: "article",
}));

export default function CourseDetail() {
  const course = useLoaderData<typeof loader>();

  return (
    <>
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
