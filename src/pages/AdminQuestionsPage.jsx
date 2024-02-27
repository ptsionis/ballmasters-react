import React, { useEffect, useState } from "react";

import { fetchAllQuestionData } from "../services/questionService";

import AdminQuestion from "../components/AdminQuestion/AdminQuestion";
import PageHeader from "../components/PageHeader/PageHeader";

import "./AdminQuestionsPage.css";

const AdminQuestionsPage = () => {
  const [questions, setQuestions] = useState([]);

  const loadQuestions = async () => {
    const fetchedQuestions = await fetchAllQuestionData();
    if (fetchedQuestions) {
      setQuestions(fetchedQuestions);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllQuestionData();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="admin-questions-main">
      <div className="admin-questions-wrapper">
        <PageHeader title={"All Questions"} />
        {questions.map((item) => {
          return (
            <AdminQuestion
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
              loadQuestions={loadQuestions}
            />
          );
        })}
      </div>
    </main>
  );
};

export default AdminQuestionsPage;
