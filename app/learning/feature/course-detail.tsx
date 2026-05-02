import { useRef } from "react";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { CourseQuiz } from "../ui/course-quiz";
import { getCourse } from "../data-access/courses";
import { Button } from "../../shared/ui/button";
import { IconMessage2Question } from "../../shared/ui/icons";
import { Banner } from "../../shared/ui/banner";
import { EditResource } from "../../shared/ui/edit-resource";
import { BreadcrumbWithCategory } from "../../shared/ui/breadcrumb-with-category";
import { TableOfContents } from "../../shared/ui/table-of-contents";
import { Modal } from "../../shared/ui/modal";
import { createMetaTags } from "../../shared/utils/meta";
import { notFound } from "../../shared/utils/navigation";

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

  const ref = useRef<HTMLElement>(null);

  return (
    <>
      <TableOfContents
        ref={ref}
        additionalActions={
          <>
            <Modal
              trigger={
                <Button size="sm" variant="link" className="cursor-pointer">
                  <IconMessage2Question /> Quiz
                </Button>
              }
              title={course.quiz.title}
            >
              <CourseQuiz quiz={course.quiz} />
            </Modal>

            <EditResource slug={course.slug} resourceType="courses" />
          </>
        }
      />

      <BreadcrumbWithCategory
        baseLabel="Learning"
        baseUrl="/learning"
        category={course.category}
        categoryPrefixUrl="/learning/kategorie"
      />

      <header className="prose container">
        <h1 className="mb-5">{course.title}</h1>
        <Banner
          className="my-6"
          createdAt={course.createdAt}
          readingTime={course.readingTime}
        />
      </header>

      <article
        className="prose container pt-0 prose-emerald"
        dangerouslySetInnerHTML={{ __html: course.content }}
        ref={ref}
      />
    </>
  );
}
