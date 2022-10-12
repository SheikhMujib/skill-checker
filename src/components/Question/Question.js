import React from "react";
import Option from "../Option/Option";

const Question = ({ question, index }) => {
  const options = question.options;
  console.log(options);
  return (
    <div className="container">
      <div className="col mb-5">
        <div className="card h-100 bg-light">
          <div className="card-body">
            <h5 className="card-title">
              {index + 1}. {question.question.slice(3, -4)}
            </h5>
            <ul>
              {options.map((option, idx) => (
                <Option key={idx} option={option}></Option>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
