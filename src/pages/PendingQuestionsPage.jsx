import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PendingQuestion from "../components/PendingQuestion";

const PendingQuestionsPage = () => {
  const [pendingQuestions, setPendingQuestions] = useState([]);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/pending-question/all-pending",
          {
            withCredentials: true,
          }
        );
        setPendingQuestions(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>PendingQuestionsPage</h1>
      {pendingQuestions.map((item) => {
        return (
          <PendingQuestion
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
            source={item.source}
            userId={item.userId}
          />
        );
      })}
      <button onClick={goToHome}>Go to Home</button>
    </>
  );
};

export default PendingQuestionsPage;
