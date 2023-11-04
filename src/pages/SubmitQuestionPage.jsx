import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const PendingQuestionPage = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
      if (key === "level" || key === "correctId") {
        data[key] = parseInt(value, 10);
      } else {
        data[key] = value;
      }
    });

    try {
      const response = await axios.post("http://localhost:8000/pending-question/submit-pending", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      });

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1>Submit Question</h1>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
        <label htmlFor="question">Question</label>
        <input type="text" name="question" />
        <label htmlFor="category">Category</label>
        <input type="text" name="category" />
        <label htmlFor="level">Level</label>
        <input type="text" name="level" />
        <label htmlFor="answer1">Answer 1</label>
        <input type="text" name="answer1" />
        <label htmlFor="answer2">Answer 2</label>
        <input type="text" name="answer2" />
        <label htmlFor="answer3">Answer 3</label>
        <input type="text" name="answer3" />
        <label htmlFor="answer4">Answer 4</label>
        <input type="text" name="answer4" />
        <label htmlFor="correctId">Correct Answer</label>
        <input type="text" name="correctId" />
        <label htmlFor="source">Source URL</label>
        <input type="text" name="source" />
        <input type="submit" value={"SUBMIT"} />
      </form>
      <button onClick={goToHome}>Go to Home</button>
    </>
  );
};

export default PendingQuestionPage;
