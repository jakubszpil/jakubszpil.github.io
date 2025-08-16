import "./__styles__/courses.css";
import { Banner } from "./ui/banner";
import { Button, type ButtonProps } from "./ui/button";
import { LinkWithPrefetch } from "./ui/link-with-prefetch";

import type { Course } from "~/lib/courses";
import { cn } from "~/lib/utils";

export interface CoursesProps {
  courses: Course[];
  className?: string;
  variant?: ButtonProps["variant"];
}

export default function Courses(props: CoursesProps) {
  return (
    <section className={cn("courses", props.className)}>
      {props.courses.map((course) => (
        <Button
          key={course.id}
          asChild
          variant={props.variant ?? "outline"}
          className="courses__feed"
        >
          <LinkWithPrefetch to={`/learning/${course.slug}`}>
            <h2 className="courses__title">{course.title}</h2>
            <p className="courses__description">{course.description}</p>
            <Banner
              className="courses__banner"
              createdAt={course.createdAt}
              readingTime={course.readingTime}
            />
          </LinkWithPrefetch>
        </Button>
      ))}
    </section>
  );
}
