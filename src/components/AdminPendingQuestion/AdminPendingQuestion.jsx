import React, { useState } from "react";
import axios from "axios";

import { Categories } from "../../models/enums/categoriesEnum";
import {
  acceptPendingQuestion,
  deletePendingQuestion,
  updatePendingQuestion,
} from "../../services/pendingQuestionService";
import { capitalizeFirstLetter } from "../../utils/otherUtils";

import "./AdminPendingQuestion.css";

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
    const res = await acceptPendingQuestion(id);
    if (res) {
      loadPendingQuestions();
    }
  };

  const deletePending = async () => {
    const res = await deletePendingQuestion(id);
    if (res) {
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

    const res = await updatePendingQuestion(updatedData);
    if (res) {
      loadPendingQuestions();
    }
  };

  return (
    <div className="admin-pending-item">
      <p className="pending-item-id">
        No. <span>{id}</span>
      </p>
      <div className="pending-item-section">
        <label>
          Question <span className="pending-item-required">*</span>
        </label>
        <input
          className="pending-item-control"
          type="text"
          value={editedQuestion}
          onChange={(e) => setEditedQuestion(e.target.value)}
        />
        <div className="pending-item-note">(Maximum length 500 characters)</div>
      </div>
      <div className="pending-item-section">
        <label htmlFor="category">
          Category <span className="pending-item-required">*</span>
        </label>
        <div className="pending-item-radio-group">
          {Object.values(Categories).map((category) => (
            <div className="pending-item-radio-option" key={category}>
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
                className="pending-item-radio-label"
                htmlFor={`category${category}-q${id}`}
              >
                {capitalizeFirstLetter(category)}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="pending-item-section">
        <label htmlFor="level">
          Level <span className="pending-item-required">*</span>
        </label>
        <div className="pending-item-radio-group">
          {[1, 2, 3].map((level) => {
            return (
              <div className="pending-item-radio-option" key={level}>
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
                <label
                  className="pending-item-radio-label"
                  htmlFor={`level${level}-q${id}`}
                >
                  {level}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pending-item-section">
        <label>
          Answer 1 <span className="pending-item-required">*</span>
        </label>
        <input
          className="pending-item-control"
          type="text"
          value={editedAnswer1}
          onChange={(e) => setEditedAnswer1(e.target.value)}
        />
      </div>
      <div className="pending-item-section">
        <label>
          Answer 2 <span className="pending-item-required">*</span>
        </label>
        <input
          className="pending-item-control"
          type="text"
          value={editedAnswer2}
          onChange={(e) => setEditedAnswer2(e.target.value)}
        />
      </div>
      <div className="pending-item-section">
        <label>
          Answer 3 <span className="pending-item-required">*</span>
        </label>
        <input
          className="pending-item-control"
          type="text"
          value={editedAnswer3}
          onChange={(e) => setEditedAnswer3(e.target.value)}
        />
      </div>
      <div className="pending-item-section">
        <label>
          Answer 4 <span className="pending-item-required">*</span>
        </label>
        <input
          className="pending-item-control"
          type="text"
          value={editedAnswer4}
          onChange={(e) => setEditedAnswer4(e.target.value)}
        />
      </div>
      <div className="pending-item-section">
        <label htmlFor="correctId">
          Correct Answer <span className="pending-item-required">*</span>
        </label>
        <div className="pending-item-radio-group">
          {[1, 2, 3, 4].map((correctId) => (
            <div className="pending-item-radio-option" key={correctId}>
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
                className="pending-item-radio-label"
                htmlFor={`correctId${correctId}-q${id}`}
              >
                {correctId}
              </label>
            </div>
          ))}
        </div>
      </div>
      <p>
        Source:{" "}
        {source ? (
          <a href={`${source}`} target="_blank">
            {source}
          </a>
        ) : null}
      </p>
      <p>User ID: {userId}</p>
      <div className="pending-item-button-wrapper">
        <button
          className="pending-item-button pending-item-button-accept"
          onClick={acceptPending}
        >
          Accept
        </button>
        <button
          className="pending-item-button pending-item-button-modify"
          onClick={saveChanges}
        >
          Modify
        </button>
        <button
          className="pending-item-button pending-item-button-delete"
          onClick={deletePending}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminPendingQuestion;
