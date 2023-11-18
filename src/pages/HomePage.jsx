import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LogoutButton from "../components/LogoutButton/LogoutButton";
import { createUser } from "../utils/userUtils";
//TO BE REMOVED
import { createQuestion } from "../utils/questionUtils";
//TO BE REMOVED
import { Categories } from "../../models/enums/categoriesEnum";

const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  //TO BE REMOVED
  const [history1, setHistory1] = useState(null);

  const goToProfile = () => {
    navigate("/profile");
  };

  const goToSubmitQuestion = () => {
    navigate("/submit-pending");
  };

  const goToPendingQuestions = () => {
    navigate("/admin-pending-questions");
  };

  const goToQuestions = () => {
    navigate("/admin-questions");
  };

  //TO BE REMOVED
  const printHistory1 = () => {
    createQuestion(setHistory1, Categories.HISTORY, 1);
  }

  useEffect(() => {
    createUser(setUser);
  }, []);

  return (
    <>
      <div>
        {user ? (
          <h1>Welcome {user.username}</h1>
        ) : (
          <p>Loading user profile...</p>
        )}
      </div>
      <button onClick={goToProfile}>Go to Profile</button>
      <button onClick={goToSubmitQuestion}>Go to Submit Question</button>
      <button onClick={goToPendingQuestions}>See all pending</button>
      <button onClick={goToQuestions}>See all questions</button>
      <LogoutButton />
      {/* TO BE REMOVED */}
      <br /><br />
      <button onClick={printHistory1}>HISTORY 1</button>
      {history1 ? <p>{history1.question}</p> : <p>"Waiting for click..."</p>}
    </>
  );
};

export default HomePage;
