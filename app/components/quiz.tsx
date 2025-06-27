import { useCallback, useState } from "react";
import classNames from "classnames";

import type { ContentQuiz } from "~/lib/content";
import { Button } from "./ui/button";

interface QuizProps {
  quiz: ContentQuiz;
}

export default function Quiz({ quiz }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = quiz.questions;

  const question = questions[current];

  const answer = question.options[question.answer];

  const options = question.options;

  const handleOptionClick = useCallback(
    (option: string) => {
      if (showAnswer) return;
      setSelected(option);
      setShowAnswer(true);
      if (option === answer) setScore((s) => s + 1);
    },
    [showAnswer, answer]
  );

  const handleNext = useCallback(() => {
    setShowAnswer(false);
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  }, [current, questions.length]);

  if (finished) {
    return (
      <div className="container prose">
        <h2>{quiz.title}</h2>
        <p>
          Wynik: {score} / {questions.length}
        </p>
        <Button
          size="sm"
          onClick={() => {
            setCurrent(0);
            setSelected(null);
            setShowAnswer(false);
            setScore(0);
            setFinished(false);
          }}
        >
          Rozwiąż ponownie
        </Button>
      </div>
    );
  }

  return (
    <div className="container prose scroll-mt-20" id="quiz">
      <h2>{quiz.title}</h2>
      <div>
        <strong>
          Pytanie {current + 1} z {questions.length}
        </strong>
        <p dangerouslySetInnerHTML={{ __html: question.question }}></p>
        <div className="grid grid-flow-row gap-3">
          {options.map((opt, idx) => (
            <Button
              size="sm"
              variant="outline"
              key={idx}
              className={classNames(
                "w-full text-left inline-flex justify-start transition-none text-wrap !min-h-min py-1.5",
                showAnswer
                  ? "cursor-default hover:!bg-inherit hover:!text-inherit"
                  : "cursor-pointer",
                showAnswer && opt === answer
                  ? "!bg-green-400 dark:!bg-green-800"
                  : selected === opt && showAnswer && opt !== answer
                  ? "!bg-red-400 dark:!bg-red-800"
                  : undefined
              )}
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </Button>
          ))}
        </div>
        {showAnswer && (
          <div className="mt-3">
            {selected === answer ? (
              <span className="text-green-500">✅ Dobrze!</span>
            ) : (
              <span className="text-red-500">
                ❌ Błędna odpowiedź. Poprawna:{" "}
                <strong>{question.options[question.answer]}</strong>
              </span>
            )}
            {question.explanation && (
              <blockquote className="my-3">{question.explanation}</blockquote>
            )}
            <Button size="sm" onClick={handleNext}>
              {current + 1 < questions.length
                ? "Następne pytanie"
                : "Zakończ quiz"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
