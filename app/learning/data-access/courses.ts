import { join } from "node:path";
import { readdir, readFile } from "node:fs/promises";

import { shuffleArray } from "../../shared/utils/array";
import {
  getReadingTimeLabel,
  processContent,
  processFile,
} from "../../shared/data-access/content";
import { sortByCreationDate } from "../../shared/utils/date";
import { cachePromise } from "../../shared/utils/promises";

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
  category: string;
  keywords: string[];
  content: string;
  quiz: CourseQuiz;
}

function mapperCourseFeed(course: Course): CourseFeed {
  return {
    createdAt: course.createdAt,
    description: course.description,
    readingTime: course.readingTime,
    slug: course.slug,
    title: course.title,
  };
}

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

async function parseCourse(slug: string, file: string): Promise<Course> {
  const { data, content } = processFile(file);

  const [fileContent, time] = await processContent(content);

  return {
    ...data,
    slug,
    content: fileContent,
    readingTime: getReadingTimeLabel(time),
    createdAt: new Date(data.createdAt).toISOString(),
    quiz: await parseCourseQuiz(data.quiz),
    category: data.category,
    keywords: data.keywords,
    description: data.description,
    title: data.title,
  };
}

async function getAllCourses(): Promise<Course[]> {
  const directory = join(process.cwd(), "app/content/courses");

  const files = await readdir(directory);

  const courses: Course[] = [];

  for (const filename of files) {
    const slug = filename.replace(".md", "");
    const file = await readFile(join(directory, filename), "utf-8");
    const course = await parseCourse(slug, file);

    courses.push(course);
  }

  return courses.toSorted(sortByCreationDate);
}

async function getCourses(limit?: number): Promise<CourseFeed[]> {
  const courses = await cachePromise("courses", getAllCourses);

  return courses.slice(0, limit ?? courses.length).map(mapperCourseFeed);
}

async function getCoursesByCategory(
  category: string | undefined,
): Promise<CourseFeed[]> {
  const courses = await cachePromise("courses", getAllCourses);

  return courses
    .filter((course) => (category ? category === course.category : true))
    .map(mapperCourseFeed);
}

async function getCoursesCategories(): Promise<string[]> {
  const courses = await cachePromise("courses", getAllCourses);

  const occurrences: Record<string, number> = {};

  const categories = courses.reduce<string[]>((categories, course) => {
    if (!(course.category in occurrences)) occurrences[course.category] = 0;

    if (!categories.includes(course.category)) categories.push(course.category);

    occurrences[course.category]++;

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
