import { shuffleArray } from "./array";
import {
  getReadingTimeLabel,
  processContent,
  processFile,
  type ParsingStrategy,
} from "./content";
import type { Course } from "./course";
import type { CourseQuiz } from "./course-quiz";

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

export class CourseParsingStrategy implements ParsingStrategy<Course> {
  async parse(slug: string, file: string): Promise<Course> {
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
    } satisfies Course;
  }
}
