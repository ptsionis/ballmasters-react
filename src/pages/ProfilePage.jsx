import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { createProfile } from "../utils/profileUtils";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  const goToHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    createProfile(setProfile);
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
          <p>Score: {profile.score}</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
};

export default ProfilePage;
