import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quizzes = () => {
  const quizzesObject = useLoaderData();
  const quizzes = quizzesObject.data;
  const questions = quizzes.questions;
  

  return (
    <div className="container">
      <h2 className="mb-5">Quiz of {quizzes.name}</h2>
      <div className="row row-cols-1 g-4">
        {questions.map((question, index) => (
          <Question
            key={question.id}
            question={question}
            index={index}
          ></Question>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
