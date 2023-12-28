import React, { useState } from "react";
import axios from "axios";

import { Categories } from "../../models/enums/categoriesEnum";
import { capitalizeFirstLetter } from "../../utils/otherUtils";

const AdminPendingQuestion = ({
  id,
  question,
  category,
  level,
  answer1,
  answer2,
  answer3,
  answer4,
  correctId,
  source,
  userId,
  loadPendingQuestions,
}) => {
  const [editedQuestion, setEditedQuestion] = useState(question);
  const [editedCategory, setEditedCategory] = useState(category);
  const [editedLevel, setEditedLevel] = useState(level);
  const [editedAnswer1, setEditedAnswer1] = useState(answer1);
  const [editedAnswer2, setEditedAnswer2] = useState(answer2);
  const [editedAnswer3, setEditedAnswer3] = useState(answer3);
  const [editedAnswer4, setEditedAnswer4] = useState(answer4);
  const [editedCorrectId, setEditedCorrectId] = useState(correctId);

  const acceptPending = async () => {
    const res = await axios.post(
      "http://localhost:8000/pending-question/accept-pending",
      {
        id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    if (res.data.success) {
      loadPendingQuestions();
    }
  };

  const deletePending = async () => {
    const res = await axios.delete(
      "http://localhost:8000/pending-question/delete-pending",
      {
        withCredentials: true,
        data: {
          id: id,
        },
      }
    );
    if (res.data.success) {
      loadPendingQuestions();
    }
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
      "http://localhost:8000/pending-question/update-pending",
      updatedData,
      { withCredentials: true }
    );
    if (res.data.success) {
      loadPendingQuestions();
    }
  };

  return (
    <div className="d-flex flex-column bg-light rounded p-4 my-4">
      <p className="text-center border-bottom pb-3">
        Pending ID: <span className="fw-bold">{id}</span>
      </p>
      <div className="mb-3">
        <label>
          Question <span className="text-danger">*</span>
          <input
            className="form-control"
            type="text"
            value={editedQuestion}
            onChange={(e) => setEditedQuestion(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="category">
          Category <span className="text-danger">*</span>
        </label>
        <div className="d-flex justify-content-center justify-content-sm-start flex-column flex-sm-row">
          {Object.values(Categories).map((category) => (
            <div key={category}>
              <input
                type="radio"
                name={`category-q${id}`}
                value={category}
                id={`category${category}-q${id}`}
                onChange={(e) => {
                  setEditedCategory(e.target.value);
                }}
                defaultChecked={category === editedCategory}
                required
              />
              <label
                className="ps-1 pe-3"
                htmlFor={`category${category}-q${id}`}
              >
                {capitalizeFirstLetter(category)}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="level">
          Level <span className="text-danger">*</span>
        </label>
        <div className="d-flex">
          {[1, 2, 3].map((level) => {
            return (
              <React.Fragment key={level}>
                <input
                  type="radio"
                  name={`level-q${id}`}
                  value={level}
                  id={`level${level}-q${id}`}
                  onChange={(e) => {
                    setEditedLevel(e.target.value);
                  }}
                  defaultChecked={level === editedLevel}
                  required
                />
                <label className="ps-1 pe-3" htmlFor={`level${level}-q${id}`}>
                  {level}
                </label>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="mb-3">
        <label>
          Answer 1 <span className="text-danger">*</span>
          <input
            className="form-control"
            type="text"
            value={editedAnswer1}
            onChange={(e) => setEditedAnswer1(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label>
          Answer 2 <span className="text-danger">*</span>
          <input
            className="form-control"
            type="text"
            value={editedAnswer2}
            onChange={(e) => setEditedAnswer2(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label>
          Answer 3 <span className="text-danger">*</span>
          <input
            className="form-control"
            type="text"
            value={editedAnswer3}
            onChange={(e) => setEditedAnswer3(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label>
          Answer 4 <span className="text-danger">*</span>
          <input
            className="form-control"
            type="text"
            value={editedAnswer4}
            onChange={(e) => setEditedAnswer4(e.target.value)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="correctId">
          Correct Answer <span className="text-danger">*</span>
        </label>
        <div className="d-flex">
          {[1, 2, 3, 4].map((correctId) => (
            <React.Fragment key={correctId}>
              <input
                type="radio"
                name={`correctId-q${id}`}
                value={correctId}
                id={`correctId${correctId}-q${id}`}
                onChange={(e) => {
                  setEditedCorrectId(e.target.value);
                }}
                defaultChecked={correctId === editedCorrectId}
                required
              />
              <label
                className="ps-1 pe-3"
                htmlFor={`correctId${correctId}-q${id}`}
              >
                {correctId}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
      <p>
        Source:{" "}
        {source ? (
          <a href={`${source}`} target="_blank">
            {source}
          </a>
        ) : (
          <span className="text-muted">-</span>
        )}
      </p>
      <p>User ID: {userId}</p>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-success mx-2" onClick={acceptPending}>
          Accept
        </button>
        <button className="btn btn-secondary mx-2" onClick={saveChanges}>
          Save Changes
        </button>
        <button className="btn btn-danger mx-2" onClick={deletePending}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminPendingQuestion;
