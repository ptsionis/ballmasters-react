import React, { useState } from "react";
import axios from "axios";

const Question = ({
  id,
  question,
  category,
  level,
  answer1,
  answer2,
  answer3,
  answer4,
  correctId
}) => {
  const [editedQuestion, setEditedQuestion] = useState(question);
  const [editedCategory, setEditedCategory] = useState(category);
  const [editedLevel, setEditedLevel] = useState(level);
  const [editedAnswer1, setEditedAnswer1] = useState(answer1);
  const [editedAnswer2, setEditedAnswer2] = useState(answer2);
  const [editedAnswer3, setEditedAnswer3] = useState(answer3);
  const [editedAnswer4, setEditedAnswer4] = useState(answer4);
  const [editedCorrectId, setEditedCorrectId] = useState(correctId);

  const deleteQuestion = async () => {
    const res = await axios.delete(
      "http://localhost:8000/question/delete-question",
      {
        withCredentials: true,
        data: {
          id: id,
        },
      }
    );
    console.log(res.data);
  };

  const saveChanges = async () => {
    const updatedData = {
      id,
      question: editedQuestion,
      category: editedCategory,
      level: editedLevel,
      answer1: editedAnswer1,
      answer2: editedAnswer2,
      answer3: editedAnswer3,
      answer4: editedAnswer4,
      correctId: editedCorrectId,
    };

    const res = await axios.put(
      "http://localhost:8000/question/update-question",
      updatedData,
      { withCredentials: true }
    );
    console.log(res.data);
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
      <p>Id: {id}</p>
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
      <button onClick={saveChanges}>Save Changes</button>
      <button onClick={deleteQuestion}>Delete</button>
    </div>
  );
};

export default Question;
