import React, { useEffect, useState } from "react";
import socket from "../../socketService";

import FriendItem from "../FriendItem/FriendItem";
import ChallengeButton from "../ChallengeButton/ChallengeButton";

const FriendList = ({ userId, friends }) => {
  useEffect(() => {
    socket.emit("login", userId);
  }, []);
  return (
    <div className="d-flex flex-column justify-content-start align-items-center px-3 py-4 bg-secondary">
      <h3>My Friends</h3>
      <ul className="w-100 list-unstyled">
        {friends &&
          friends.map((friend, index) => (
            <li
              className="w-100 d-flex justify-content-between align-items-center my-2 p-2 rounded bg-light"
              key={index}
            >
              <FriendItem friend={friend} />
              <ChallengeButton />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FriendList;
