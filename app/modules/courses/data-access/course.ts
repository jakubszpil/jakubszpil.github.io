import type { CourseQuiz } from "./course-quiz";

export interface Course {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
  categories: string[];
  keywords: string[];
  content: string;
  quiz: CourseQuiz;
}
