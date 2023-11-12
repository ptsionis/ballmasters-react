import { React, useState, useEffect } from "react";

import GoToHomeButton from "../components/GoToHomeButton/GoToHomeButton";
import { createProfile } from "../utils/profileUtils";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});

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
      <GoToHomeButton />
    </div>
  );
};

export default ProfilePage;
