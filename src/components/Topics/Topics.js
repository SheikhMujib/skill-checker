import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topicsObject = useLoaderData();
  const topics = topicsObject.data;
  console.log(topicsObject);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;
