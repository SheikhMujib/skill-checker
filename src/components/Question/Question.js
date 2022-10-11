import React from "react";

const Question = ({ question, index }) => {
  return (
    <div>
      <h1> {index + 1}. {question.question.slice(3, -4)}</h1>
    </div>
  );
};

export default Question;
