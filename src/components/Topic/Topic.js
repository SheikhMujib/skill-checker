import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="col">
      <div className="card h-100">
        <img className="img-fluid bg-dark card-img-top" src={logo} alt="..." />
        <div className="row p-2">
          <div className="col">
            <h5>{name}</h5>
          </div>
          <div className="col">
            <h5>Questions: {total}</h5>
          </div>
          <div className="col">
            <Link to={`/quizzes/${id}`} className="btn btn-primary">
              Start Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
