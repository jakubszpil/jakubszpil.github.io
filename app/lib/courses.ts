import type { ContentQuiz } from "./content";
import { ResourceService } from "./resources";

export interface Course {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
  categories: string[];
  keywords: string[];
  content: string;
  quiz?: ContentQuiz;
}

export class CourseService extends ResourceService<Course>(
  import.meta.glob<string>("../content/courses/*.md", {
    import: "default",
    query: "?raw",
    eager: true,
  })
) {}
