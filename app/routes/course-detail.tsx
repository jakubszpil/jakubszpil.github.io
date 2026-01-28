import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Banner } from "../components/ui/banner";
import { EditResource } from "../components/ui/edit-resource";
import { CourseCategories } from "../components/course-categories";
import { CourseQuiz } from "../components/course-quiz";
import { getCourse } from "../lib/courses";
import { createMetaTags } from "../lib/meta";
import { notFound } from "../lib/navigation";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  const course = await getCourse(slug);

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
