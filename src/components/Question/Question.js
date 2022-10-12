import React from "react";
import Option from "../Option/Option";

const Question = ({ question, index }) => {
  const options = question.options;
  console.log(options);
  return (
    <div className="container">
      <h3>
        {index + 1}. {question.question.slice(3, -4)}
      </h3>
      {options.map((option, idx) => (
        <Option key={idx} option={option}></Option>
      ))}
    </div>
  );
};

export default Question;
