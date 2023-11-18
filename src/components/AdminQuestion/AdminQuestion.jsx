import React, { useState } from "react";

import {
  updateQuestionData,
  deleteQuestionData,
} from "../../services/questionService";
import { Question } from "../../models/Question";

const AdminQuestion = (currentQuestion) => {
  const [editedQuestion, setEditedQuestion] = useState(
    currentQuestion.question
  );
  const [editedCategory, setEditedCategory] = useState(
    currentQuestion.category
  );
  const [editedLevel, setEditedLevel] = useState(currentQuestion.level);
  const [editedAnswer1, setEditedAnswer1] = useState(currentQuestion.answer1);
  const [editedAnswer2, setEditedAnswer2] = useState(currentQuestion.answer2);
  const [editedAnswer3, setEditedAnswer3] = useState(currentQuestion.answer3);
  const [editedAnswer4, setEditedAnswer4] = useState(currentQuestion.answer4);
  const [editedCorrectId, setEditedCorrectId] = useState(
    currentQuestion.correctId
  );

  const deleteQuestion = async () => {
    const res = await deleteQuestionData(currentQuestion.id);
    console.log(res);
  };

  const updateQuestion = async () => {
    const updatedQuestion = new Question(
      currentQuestion.id,
      editedQuestion,
      editedCategory,
      editedLevel,
      editedAnswer1,
      editedAnswer2,
      editedAnswer3,
      editedAnswer4,
      editedCorrectId
    );

    const res = await updateQuestionData(updatedQuestion);
    console.log(res);
  };

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>Id: {currentQuestion.id}</p>
      <label>
        Question:
        <input
          type="text"
          value={editedQuestion}
          onChange={(e) => setEditedQuestion(e.target.value)}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={editedCategory}
          onChange={(e) => setEditedCategory(e.target.value)}
        />
      </label>
      <label>
        Level:
        <input
          type="text"
          value={editedLevel}
          onChange={(e) => setEditedLevel(e.target.value)}
        />
      </label>
      <label>
        Answer 1:
        <input
          type="text"
          value={editedAnswer1}
          onChange={(e) => setEditedAnswer1(e.target.value)}
        />
      </label>
      <label>
        Answer 2:
        <input
          type="text"
          value={editedAnswer2}
          onChange={(e) => setEditedAnswer2(e.target.value)}
        />
      </label>
      <label>
        Answer 3:
        <input
          type="text"
          value={editedAnswer3}
          onChange={(e) => setEditedAnswer3(e.target.value)}
        />
      </label>
      <label>
        Answer 4:
        <input
          type="text"
          value={editedAnswer4}
          onChange={(e) => setEditedAnswer4(e.target.value)}
        />
      </label>
      <label>
        Correct ID:
        <input
          type="text"
          value={editedCorrectId}
          onChange={(e) => setEditedCorrectId(e.target.value)}
        />
      </label>
      <button onClick={updateQuestion}>Save Changes</button>
      <button onClick={deleteQuestion}>Delete</button>
    </div>
  );
};

export default AdminQuestion;
