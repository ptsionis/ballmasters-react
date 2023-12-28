import React, { useEffect, useState } from "react";

import { PendingQuestion } from "../../models/PendingQuestion";
import Modal from "../Modal/Modal";
import { Categories } from "../../models/enums/categoriesEnum";
import { submitPendingData } from "../../services/pendingQuestionService";
import { capitalizeFirstLetter } from "../../utils/otherUtils";

const QuestionForm = () => {
  const [successModal, setSuccessModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const pendingQuestion = new PendingQuestion(
      null,
      formData.get("question"),
      formData.get("category"),
      formData.get("level"),
      formData.get("answer1"),
      formData.get("answer2"),
      formData.get("answer3"),
      formData.get("answer4"),
      formData.get("correctId"),
      formData.get("source"),
      null
    );

    const postData = { ...pendingQuestion };
    delete postData.id;
    delete postData.userId;

    try {
      const res = await submitPendingData(postData);
      const modal = new bootstrap.Modal(
        document.getElementById("staticBackdrop")
      );
      modal.toggle();
      setSuccessModal(res.success);
    } catch (error) {
      setSuccessModal(res.success);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <div className="mb-3">
          <label htmlFor="question">
            Question <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            name="question"
            maxLength={500}
            required
          />
          <div className="form-text">Maximum length 500 characters.</div>
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
                  name="category"
                  value={category}
                  id={category}
                  required
                />
                <label className="ps-1 pe-3" htmlFor={category}>
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
            {[1, 2, 3].map((level) => (
              <React.Fragment key={level}>
                <input
                  type="radio"
                  name="level"
                  value={level}
                  id={level}
                  required
                />
                <label className="ps-1 pe-3" htmlFor={level}>
                  {level}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="answer1">
            Answer 1 <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            name="answer1"
            maxLength={100}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="answer2">
            Answer 2 <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            name="answer2"
            maxLength={100}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="answer3">
            Answer 3 <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            name="answer3"
            maxLength={100}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="answer4">
            Answer 4 <span className="text-danger">*</span>
          </label>
          <input
            className="form-control"
            type="text"
            name="answer4"
            maxLength={100}
            required
          />
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
                  name="correctId"
                  value={correctId}
                  id={correctId}
                  required
                />
                <label className="ps-1 pe-3" htmlFor={correctId}>
                  {correctId}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="source">Source URL</label>
          <input className="form-control" type="text" name="source" />
        </div>
        <button className="btn btn-primary my-4" type="submit">
          Submit
        </button>
      </form>
      <Modal success={successModal} />
    </>
  );
};

export default QuestionForm;
