import React from "react";
import banner from "../../banner.png";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";


const Home = () => {
  const topicsObject = useLoaderData();
  const topics = topicsObject.data;

  return (
    <div className="container">
      <header>
        <div className="container text-center mt-3">
          <div className="row row-cols-1">
            <div className="col">
              <img className="img-fluid" src={banner} alt="" />
            </div>
            <div className="col fs-3 mt-3">
              <p>
                Let's check your skill. You will get 1 point for each correct answer, at the end of each quiz you will get your total score.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
