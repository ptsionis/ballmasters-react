import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LogoutButton from "../components/LogoutButton/LogoutButton";
import { createProfile } from "../utils/profileUtils";

const HomePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  const goToProfile = () => {
    navigate("/profile");
  };

  const goToSubmitQuestion = () => {
    navigate("/submit-pending");
  };

  const goToPendingQuestions = () => {
    navigate("/pending-questions");
  };

  const goToQuestions = () => {
    navigate("/questions");
  };

  useEffect(() => {
    createProfile(setProfile);
  }, []);

  return (
    <>
      <div>
        {profile ? (
          <h1>Welcome {profile.username}</h1>
        ) : (
          <p>Loading user profile...</p>
        )}
      </div>
      <button onClick={goToProfile}>Go to Profile</button>
      <button onClick={goToSubmitQuestion}>Go to Submit Question</button>
      <button onClick={goToPendingQuestions}>See all pending</button>
      <button onClick={goToQuestions}>See all questions</button>
      <LogoutButton />
    </>
  );
};

export default HomePage;
