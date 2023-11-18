import React from "react";
import axios from "axios";

import GoToHomeButton from "../components/GoToHomeButton/GoToHomeButton";

import { Categories } from "../../models/enums/categoriesEnum";

const PendingQuestionPage = () => {
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
      const response = await axios.post(
        "http://localhost:8000/pending-question/submit-pending",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1>Submit Question</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="question">Question</label>
        <input type="text" name="question" required />
        <label htmlFor="category">Category</label>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {Object.values(Categories).map((category) => (
            <React.Fragment key={category}>
              <input
                type="radio"
                name="category"
                value={category}
                id={category}
                required
              />
              <label htmlFor={category}>{category}</label>
            </React.Fragment>
          ))}
        </div>

        <label htmlFor="level">Level</label>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {[1, 2, 3].map((level) => (
            <React.Fragment key={level}>
              <input
                type="radio"
                name="level"
                value={level}
                id={level}
                required
              />
              <label htmlFor={level}>{level}</label>
            </React.Fragment>
          ))}
        </div>
        <label htmlFor="answer1">Answer 1</label>
        <input type="text" name="answer1" required />
        <label htmlFor="answer2">Answer 2</label>
        <input type="text" name="answer2" required />
        <label htmlFor="answer3">Answer 3</label>
        <input type="text" name="answer3" required />
        <label htmlFor="answer4">Answer 4</label>
        <input type="text" name="answer4" required />
        <label htmlFor="correctId">Correct Answer</label>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {[1, 2, 3, 4].map((correctId) => (
            <React.Fragment key={correctId}>
              <input
                type="radio"
                name="correctId"
                value={correctId}
                id={correctId}
                required
              />
              <label htmlFor={correctId}>{correctId}</label>
            </React.Fragment>
          ))}
        </div>
        <label htmlFor="source">Source URL</label>
        <input type="text" name="source" />
        <input type="submit" value={"SUBMIT"} />
      </form>
      <GoToHomeButton />
    </>
  );
};

export default PendingQuestionPage;
