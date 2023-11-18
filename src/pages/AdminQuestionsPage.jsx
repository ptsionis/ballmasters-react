import axios from "axios";
import React, { useEffect, useState } from "react";

import { fetchAllQuestionData } from "../services/questionService";

import GoToHomeButton from "../components/GoToHomeButton/GoToHomeButton";
import AdminQuestion from "../components/AdminQuestion/AdminQuestion";

const AdminQuestionsPage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllQuestionData();
        setQuestions(data);
      } catch (error) {
        // Handle errors if any
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Admin Questions Page</h1>
      {questions.map((question) => {
        return <AdminQuestion key={question.id} {...question} />;
      })}
      <GoToHomeButton />
    </>
  );
};

export default AdminQuestionsPage;
