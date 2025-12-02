import type { ButtonProps } from "../../../shared/ui/button";
import { cn } from "../../../shared/utils/helpers";
import type { Course } from "../data-access/course";
import { CourseCard } from "./course-card";

export interface CourseCardsProps {
  courses: Pick<
    Course,
    "slug" | "title" | "description" | "createdAt" | "readingTime"
  >[];
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
