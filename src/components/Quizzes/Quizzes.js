import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quizzes = () => {
  const quizzesObject = useLoaderData();
  const quizzes = quizzesObject.data;
  const questions = quizzes.questions;
  const options = questions.options;
    console.log(quizzes);

  return (
    <div>
      <h2>Quiz of {quizzes.name}</h2>
      {questions.map((question, index) => (
        <Question key={question.id} question={question} index={index}></Question>
      ))}
    </div>
  );
};

export default Quizzes;