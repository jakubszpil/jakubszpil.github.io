import { type ButtonProps, cn } from "@packages/shared";

import type { CourseFeed } from "../data-access/course-feed";
import { CourseCard } from "./course-card";

export interface CourseCardsProps {
  courses: CourseFeed[];
  className?: string;
  variant?: ButtonProps["variant"];
}

export function CourseCards({ courses, className, variant }: CourseCardsProps) {
  return (
    <section
      className={cn(
        "container pt-0! prose grid gap-3 grid-cols-fill",
        className
      )}
    >
      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} variant={variant} />
      ))}
    </section>
  );
}
