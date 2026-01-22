import {
  Banner,
  LinkWithPrefetch,
  Button,
  type ButtonProps,
} from "@packages/shared";

import type { CourseFeed } from "../lib/course-feed";

export interface CourseCardProps {
  course: CourseFeed;
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
