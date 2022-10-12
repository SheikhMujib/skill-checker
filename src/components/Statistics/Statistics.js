import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => {})

    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      const quizzesLoaded = data.data.data;
      const quizzesData = quizzesLoaded.map((quiz) => {
        // const parts = phone.slug.split('-');
        // const price = parseInt(parts[1]);
        const singleQuiz = {
          name: quiz.name,
          total: quiz.total,
        };
        return singleQuiz;
      });
      console.log(quizzesData);
      setQuizzes(quizzesData);
    });
  }, []);

  return (
    <div className="container">
      <h3>Rechart using total quiz data</h3>
      <BarChart width={500} height={300} data={quizzes}>
        <Bar dataKey="total" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Statistics;
