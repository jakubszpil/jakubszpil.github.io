import { Button, type ButtonProps } from "@/shared/ui/button";
import { LinkWithPrefetch } from "@/shared/ui/link-with-prefetch";
import { getLocalizedDate } from "@/shared/utils/date";

import type { Course } from "../data-access/courses";

export interface CoursesProps {
  courses: Course[];
  className?: string;
  variant?: ButtonProps["variant"];
}

export default function Courses(props: CoursesProps) {
  return (
    <section
      className={`container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ${
        props.className ?? ""
      }`}
    >
      {props.courses.map((course) => (
        <Button
          key={course.id}
          asChild
          variant={props.variant ?? "outline"}
          className="inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6"
        >
          <LinkWithPrefetch to={`/learning/${course.slug}`}>
            <h2 className="line-clamp-3 text-base font-semibold flex-1 m-0">
              {course.title}
            </h2>
            <p className="line-clamp-3 mt-2 text-neutral-700 font-normal dark:text-neutral-300">
              {course.description}
            </p>
            {course.createdAt && (
              <span className="text-neutral-600 text-xs dark:text-neutral-400">
                {getLocalizedDate(course.createdAt)}
              </span>
            )}
          </LinkWithPrefetch>
        </Button>
      ))}
    </section>
  );
}
