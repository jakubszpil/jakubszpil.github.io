import type { ContentQuiz } from "../../../lib/content";

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
