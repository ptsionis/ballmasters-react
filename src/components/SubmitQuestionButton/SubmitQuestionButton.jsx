import React, { useContext } from "react";

import { AppContext } from "../../App";

import "./SubmitQuestionButton.css";

const SubmitQuestionButton = ({ toggleShowQuestionForm }) => {
  const { setCurrentPage } = useContext(AppContext);

  const goToQuestionForm = () => {
    setCurrentPage("submit-pending");
  };
  return (
    <button className="submit-question-button" onClick={goToQuestionForm}>
      Submit a Question
    </button>
  );
};

export default SubmitQuestionButton;
