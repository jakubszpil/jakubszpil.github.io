import { dirname, join } from "node:path";
import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import invariant from "tiny-invariant";

import { shuffleArray } from "./array";
import {
  getReadingTimeLabel,
  processContent,
  processFile,
  type MinifingStrategy,
  type ParsingStrategy,
} from "./content";
import { cachePromise } from "./promises";

interface CourseQuiz {
  title: string;
  questions: CourseQuizQuestion[];
}

interface CourseQuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
}

interface CourseFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
}

interface Course {
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

const courseMinifingStrategy: MinifingStrategy<Course, CourseFeed> = (
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

const courseParsingStrategy: ParsingStrategy<Course> = async (slug, file) => {
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

async function getAllCourses(): Promise<Course[]> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const directory = join(__dirname, "../../content/courses");

  const files = await readdir(directory);

  const courses: Course[] = [];

  for (const filename of files) {
    const slug = filename.replace(".md", "");
    const file = await readFile(join(directory, filename), "utf-8");
    const course = await courseParsingStrategy(slug, file);

    courses.push(course);
  }

  return courses.toSorted((first, second) => {
    invariant(first.createdAt);
    invariant(second.createdAt);

    const firstCreationTime = new Date(first.createdAt).getTime();
    const secondCreationTime = new Date(second.createdAt).getTime();

    return secondCreationTime - firstCreationTime;
  });
}

async function getCourses(limit?: number): Promise<CourseFeed[]> {
  const courses = await cachePromise("courses", getAllCourses);

  return courses.slice(0, limit ?? courses.length).map(courseMinifingStrategy);
}

async function getCoursesByCategory(
  category: string | undefined,
): Promise<CourseFeed[]> {
  const courses = await cachePromise("courses", getAllCourses);

  return courses
    .filter((course) =>
      category ? course.categories.includes(category) : true,
    )
    .map(courseMinifingStrategy);
}

async function getCoursesCategories(): Promise<string[]> {
  const courses = await cachePromise("courses", getAllCourses);

  const occurrences: Record<string, number> = {};

  const categories = courses.reduce<string[]>((categories, course) => {
    course.categories?.forEach((category) => {
      if (!(category in occurrences)) occurrences[category] = 0;
      if (!categories.includes(category)) categories.push(category);
      occurrences[category]++;
    });

    return categories;
  }, []);

  return categories.sort((a, b) => occurrences[b] - occurrences[a]);
}

async function getCoursesSlugs(): Promise<string[]> {
  const courses = await cachePromise("courses", getAllCourses);

  return courses.map((course) => course.slug);
}

async function getCourse(
  slug: string | undefined,
): Promise<Course | undefined> {
  const courses = await cachePromise("courses", getAllCourses);

  return courses.find((course) => course.slug === slug);
}

export type { CourseQuiz, CourseQuizQuestion, CourseFeed, Course };

export {
  getCourses,
  getCoursesByCategory,
  getCoursesCategories,
  getCoursesSlugs,
  getCourse,
};
