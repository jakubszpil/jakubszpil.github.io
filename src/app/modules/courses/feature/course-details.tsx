import { notFound, useLoader, defineLoader, Seo } from "@libs/shared";

import { getCourse } from "../data-access/courses";
import Categories from "../ui/categories";

export const loader = defineLoader((args) => {
  const course = getCourse(args.params.slug!);

  if (!course) throw notFound();

  return course;
});

export default function CourseDetails() {
  const course = useLoader<typeof loader>();

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
        className="prose container"
        dangerouslySetInnerHTML={{ __html: course.content }}
      />
    </>
  );
}
