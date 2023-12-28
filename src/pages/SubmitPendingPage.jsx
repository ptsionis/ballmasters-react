import React from "react";

import Navbar from "../components/Nav/Navbar";
import QuestionForm from "../components/QuestionForm/QuestionForm";

const SubmitPendingPage = () => {
  return (
    <div className="page container-fluid">
      <Navbar />
      <main className="container flex-grow-1 d-flex flex-column justify-content-center">
        <h2 className="text-center">Submit Your Question</h2>
        <QuestionForm />
      </main>
    </div>
  );
};

export default SubmitPendingPage;
