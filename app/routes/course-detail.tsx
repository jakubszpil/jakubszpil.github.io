import { useRef } from "react";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Button } from "~/components/ui/button";
import { Banner } from "~/components/banner";
import { EditResource } from "~/components/edit-resource";
import { BreadcrumbWithCategory } from "~/components/breadcrumb-with-category";
import { CourseQuiz } from "~/components/course-quiz";
import { TableOfContents } from "~/components/table-of-contents";
import { Modal } from "~/components/modal";
import { getCourse } from "~/lib/courses";
import { createMetaTags } from "~/lib/meta";
import { notFound } from "~/lib/navigation";
import { IconChevronLeft } from "~/components/ui/icons";

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
          <Modal
            trigger={
              <Button size="sm" variant="link" className="cursor-pointer">
                Quiz <IconChevronLeft />
              </Button>
            }
            title={course.quiz.title}
          >
            <CourseQuiz quiz={course.quiz} />
          </Modal>
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

      <EditResource slug={course.slug} resourceType="courses" />
    </>
  );
}
