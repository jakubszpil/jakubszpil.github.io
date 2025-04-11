import {
  useLoaderData,
  type LoaderFunctionArgs,
  type ShouldRevalidateFunctionArgs,
} from "react-router";

import Categories from "@/components/learning/categories";
import { EditResource } from "@/components/ui/edit-resource";
import { Seo } from "@/components/ui/seo";
import { getCourse } from "@/lib/courses";

export function shouldRevalidate({
  currentParams,
  nextParams,
}: ShouldRevalidateFunctionArgs) {
  const currentSlug = currentParams.slug;
  const nextSlug = nextParams.slug;
  return currentSlug !== nextSlug;
}

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
        className="prose container"
        dangerouslySetInnerHTML={{ __html: course.content }}
      />

      <EditResource resourceUrl={course.resourceUrl} />
    </>
  );
}
