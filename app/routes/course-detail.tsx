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

      <TableOfContents headings={course.headings}>
        <article
          className="prose container px-0 pt-0 prose-emerald"
          dangerouslySetInnerHTML={{ __html: course.content }}
        />

        <div className="bg-background container border-t sticky! px-0 pb-3 flex flex-wrap gap-2 justify-between items-center bottom-0 right-0">
          <p>Chcesz sprawdzić swoją wiedzę?</p>

          <Modal
            trigger={
              <Button
                variant="secondary"
                className="cursor-pointer w-full sm:w-max"
              >
                Rozwiąż Quiz
              </Button>
            }
            title={course.quiz.title}
          >
            <CourseQuiz quiz={course.quiz} />
          </Modal>
        </div>

        <EditResource slug={course.slug} resourceType="courses" />
      </TableOfContents>
    </>
  );
}
