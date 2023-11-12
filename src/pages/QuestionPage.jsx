import axios from "axios";
import React, { useEffect, useState } from "react";

import GoToHomeButton from "../components/GoToHomeButton/GoToHomeButton";
import Question from "../components/Question";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/question/all-questions",
          {
            withCredentials: true,
          }
        );
        setQuestions(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>QuestionsPage</h1>
      {questions.map((item) => {
        return (
          <Question
            key={item.id}
            id={item.id}
            question={item.question}
            category={item.category}
            level={item.level}
            answer1={item.answer1}
            answer2={item.answer2}
            answer3={item.answer3}
            answer4={item.answer4}
            correctId={item.correctId}
          />
        );
      })}
      <GoToHomeButton />
    </>
  );
};

export default QuestionsPage;
