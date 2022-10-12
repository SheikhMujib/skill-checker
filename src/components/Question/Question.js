import React from "react";

const Question = ({ question, index }) => {
  return (
    <div className="container">
      <h3> {index + 1}. {question.question.slice(3, -4)}</h3>
    </div>
  );
};

export default Question;
