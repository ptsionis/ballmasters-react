import axios from "axios";
import React, { useEffect, useState } from "react";

import GoToHomeButton from "../components/GoToHomeButton/GoToHomeButton";
import AdminPendingQuestion from "../components/AdminPendingQuestion/AdminPendingQuestion";

const AdminPendingQuestionsPage = () => {
  const [pendingQuestions, setPendingQuestions] = useState([]);

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
      <h1>Admin Pending Questions Page</h1>
      {pendingQuestions.map((item) => {
        return (
          <AdminPendingQuestion
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
      <GoToHomeButton />
    </>
  );
};

export default AdminPendingQuestionsPage;
