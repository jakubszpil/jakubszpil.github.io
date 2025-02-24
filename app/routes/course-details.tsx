import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router";

import Courses from "~/components/learning/courses";
import Categories from "~/components/learning/categories";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { EditResource } from "~/components/ui/edit-resource";
import { Seo } from "~/components/ui/seo";
import { getCourse, getCourseSiblings } from "~/lib/courses";
import { Button } from "~/components/ui/button";

export async function loader({
  params: { slug, category },
}: LoaderFunctionArgs) {
  const course = await getCourse(slug!);
  const firstCategory = category ?? course.categories![0];
  const siblings = await getCourseSiblings(course.slug, firstCategory);

  return { course, siblings, category, firstCategory };
}

export default function CourseDetails() {
  const { course, siblings, category, firstCategory } =
    useLoaderData<typeof loader>();

  return (
    <>
      <Seo
        title={course.title}
        description={course.description}
        keywords={course.keywords}
      />

      <Breadcrumb className="container pb-0 px-3">
        <BreadcrumbList className="!gap-0">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Button
                asChild
                variant="link"
                size="sm"
                className="text-neutral-500"
              >
                <Link prefetch="intent" to="/learning">
                  Learning
                </Link>
              </Button>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {category && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="capitalize">
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="text-neutral-500"
                  >
                    <Link
                      prefetch="intent"
                      to={`/learning/kategorie/${category}`}
                    >
                      {category}
                    </Link>
                  </Button>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}
          <BreadcrumbItem>
            <Button
              asChild
              disabled
              variant="link"
              size="sm"
              className="!no-underline text-wrap w-auto h-auto"
            >
              <BreadcrumbPage>{course.title}</BreadcrumbPage>
            </Button>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="prose container">
        <h1>{course.title}</h1>
        <Categories categories={course.categories} />
      </header>

      <article
        className="prose container"
        dangerouslySetInnerHTML={{ __html: course.content }}
      />

      <EditResource resourceUrl={course.resourceUrl} />

      {siblings.length > 0 && (
        <>
          <div className="prose container pt-0 text-center">
            <p>
              Zobacz więcej kursów z kategorii:{" "}
              <Link
                prefetch="intent"
                to={`/learning/kategorie/${firstCategory}`}
              >
                #{firstCategory}
              </Link>
            </p>
          </div>

          <Courses
            courses={siblings}
            className="!flex *:!min-w-64 *:md:!max-w-sm *:flex-1 !flex-wrap justify-center"
            path={(slug) => `/learning/kategorie/${firstCategory}/${slug}`}
          />
        </>
      )}
    </>
  );
}
