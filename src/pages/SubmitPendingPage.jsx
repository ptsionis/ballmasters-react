import React from "react";

import QuestionForm from "../components/QuestionForm/QuestionForm";

import "./SubmitPendingPage.css";
import PageHeader from "../components/PageHeader/PageHeader";

const SubmitPendingPage = () => {
  return (
    <main className="submit-main">
      <div className="submit-wrapper">
        <PageHeader title={"Submit Question"} />
        <QuestionForm />
      </div>
    </main>
  );
};

export default SubmitPendingPage;
