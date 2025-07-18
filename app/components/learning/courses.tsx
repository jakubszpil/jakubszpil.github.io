import type { Course } from "~/lib/courses";

import { Banner } from "../ui/banner";
import { Button, type ButtonProps } from "../ui/button";
import { LinkWithPrefetch } from "../ui/link-with-prefetch";

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
            <Banner
              className="!text-xs !text-neutral-500 dark:!text-neutral-400 !mb-0"
              createdAt={course.createdAt}
              readingTime={course.readingTime}
            />
          </LinkWithPrefetch>
        </Button>
      ))}
    </section>
  );
}
