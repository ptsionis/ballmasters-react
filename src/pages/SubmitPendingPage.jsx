import React from "react";

import QuestionForm from "../components/QuestionForm/QuestionForm";

import "./SubmitPendingPage.css";

const SubmitPendingPage = () => {
  return (
    <main className="submit-main">
      <div className="submit-wrapper">
        <h2 className="submit-title">Submit Question</h2>
        <QuestionForm />
      </div>
    </main>
  );
};

export default SubmitPendingPage;
