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
