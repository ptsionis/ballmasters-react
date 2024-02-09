import axios from "axios";
import React, { useEffect, useState } from "react";

import AdminPendingQuestion from "../components/AdminPendingQuestion/AdminPendingQuestion";

const AdminPendingPage = () => {
  const [pendingQuestions, setPendingQuestions] = useState([]);

  const loadPendingQuestions = () => {
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
  };

  useEffect(() => {
    loadPendingQuestions();
  }, []);

  return (
    <div className="page container-fluid">
      <main className="container flex-grow-1 d-flex flex-column justify-content-center">
        <h2 className="text-center">Admin Pending Questions Page</h2>
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
              loadPendingQuestions={loadPendingQuestions}
            />
          );
        })}
      </main>
    </div>
  );
};

export default AdminPendingPage;
