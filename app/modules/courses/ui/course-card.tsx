import { Banner } from "../../../shared/ui/banner";
import { LinkWithPrefetch } from "../../../shared/ui/link-with-prefetch";
import { Button, type ButtonProps } from "../../../shared/ui/button";
import type { Course } from "../data-access/course";

export interface CourseCardProps {
  course: Pick<
    Course,
    "slug" | "title" | "description" | "createdAt" | "readingTime"
  >;
  variant?: ButtonProps["variant"];
}

export function CourseCard({ course, variant }: CourseCardProps) {
  return (
    <Button
      key={course.slug}
      asChild
      variant={variant ?? "outline"}
      className="inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap! no-underline truncate p-6"
    >
      <LinkWithPrefetch to={`/learning/${course.slug}`}>
        <h2 className="line-clamp-3 text-base font-semibold flex-1 m-0!">
          {course.title}
        </h2>
        <p className="line-clamp-3 mt-2 text-neutral-700 font-normal dark:text-neutral-300">
          {course.description}
        </p>
        <Banner
          className="text-xs! text-neutral-500 dark:text-neutral-400 mb-0"
          createdAt={course.createdAt}
          readingTime={course.readingTime}
        />
      </LinkWithPrefetch>
    </Button>
  );
}
