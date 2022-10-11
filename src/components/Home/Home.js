import React from "react";
import banner from "../../banner.png";

const Home = () => {
  return (
    <div className="container">
      <header>
        <div className="container text-center">
          <div className="row row-cols-1">
            <div className="col">
              <img className="img-fluid" src={banner} alt="" />
            </div>
            <div className="col fs-3 my-3">
              <p>
                You will get 1 point for each correct answer, at the end of each quiz you will get your total score. Let's check your skill.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
