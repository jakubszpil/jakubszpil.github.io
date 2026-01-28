import { shuffleArray } from "./array";
import {
  getReadingTimeLabel,
  processContent,
  processFile,
  type MinifingStrategy,
  type ParsingStrategy,
  type SlugStrategy,
} from "./content";
import { createResourceService } from "./resources";

export interface CourseQuiz {
  title: string;
  questions: CourseQuizQuestion[];
}

export interface CourseQuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
}

export interface CourseFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
}

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

export const courseMinifingStrategy: MinifingStrategy<Course, CourseFeed> = (
  course,
) => {
  return {
    createdAt: course.createdAt,
    description: course.description,
    readingTime: course.readingTime,
    slug: course.slug,
    title: course.title,
  };
};

async function parseCourseQuiz(quiz: CourseQuiz): Promise<CourseQuiz> {
  const questions = await Promise.all(
    quiz.questions.map(async (question) => {
      const answer = question.options[question.answer];
      const options = shuffleArray(question.options);
      const index = options.indexOf(answer);
      const [content] = await processContent(question.question);

      return {
        ...question,
        question: content,
        answer: index,
        options,
      };
    }),
  );

  return {
    ...quiz,
    questions,
  };
}

export const courseParsingStrategy: ParsingStrategy<Course> = async (
  slug,
  file,
) => {
  const { data, content } = processFile(file);

  const [fileContent, readingTime] = await processContent(content);

  return {
    ...data,
    slug,
    content: fileContent,
    readingTime: getReadingTimeLabel(readingTime),
    createdAt: new Date(data.createdAt).toISOString(),
    quiz: await parseCourseQuiz(data.quiz),
    categories: data.categories,
    keywords: data.keywords,
    description: data.description,
    title: data.title,
  };
};

export const courseSlugStrategy: SlugStrategy = (key) => {
  return key.slice(key.lastIndexOf("/") + 1, key.indexOf(".md"));
};

export class CourseService extends createResourceService<Course, CourseFeed>({
  files: import.meta.glob<string>("../../content/courses/*.md", {
    import: "default",
    query: "?raw",
  }),
  minifingStrategy: courseMinifingStrategy,
  parsingStrategy: courseParsingStrategy,
  slugStrategy: courseSlugStrategy,
}) {}
