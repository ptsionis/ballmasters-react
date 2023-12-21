import { React, useState, useEffect } from "react";

import { createUser } from "../utils/userUtils";

const UserPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    createUser(setUser);
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Rank: {user.getRank()}</p>
          <p>Games Won: {user.gamesWon}</p>
          <p>Games Played: {user.gamesPlayed}</p>
          <p>Winrate: {user.getWinrate()}</p>
          <p>Joined: {user.getJoinedDate()}</p>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default UserPage;
