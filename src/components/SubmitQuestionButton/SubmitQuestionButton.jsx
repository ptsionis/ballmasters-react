import React from "react";

import "./SubmitQuestionButton.css";

const SubmitQuestionButton = ({ toggleShowQuestionForm }) => {
  return (
    <button className="submit-question-button" onClick={toggleShowQuestionForm}>
      Submit a Question
    </button>
  );
};

export default SubmitQuestionButton;
