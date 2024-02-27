import React, { useEffect, useState } from "react";

import AdminPendingQuestion from "../components/AdminPendingQuestion/AdminPendingQuestion";

import { fetchAllPendingData } from "../services/pendingQuestionService";
import "./AdminPendingPage.css";
import PageHeader from "../components/PageHeader/PageHeader";

const AdminPendingPage = () => {
  const [pendingQuestions, setPendingQuestions] = useState([]);

  const loadPendingQuestions = async () => {
    const fetchedQuestions = await fetchAllPendingData();
    if (fetchedQuestions) {
      setPendingQuestions(fetchedQuestions);
    }
  };

  useEffect(() => {
    loadPendingQuestions();
  }, []);

  return (
    <main className="admin-pending-main">
      <div className="admin-pending-wrapper">
        <PageHeader title={"Pending Questions"} />
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
      </div>
    </main>
  );
};

export default AdminPendingPage;
