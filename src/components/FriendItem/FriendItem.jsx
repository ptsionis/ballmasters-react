import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

import "./FriendItem.css";

const FriendItem = ({ friend }) => {
  const [isOnline, setIsOnline] = useState(false);
  const { socket } = useContext(AppContext);

  socket.on("friendStatus", ({ userId, status }) => {
    if (userId === friend.id) {
      setIsOnline(status);
    }
  });

  const getMedal = () => {
    if (friend.score < 500) {
      return "amateur";
    } else if (friend.score < 1000) {
      return "beginner";
    } else if (friend.score < 1500) {
      return "pro";
    } else if (friend.score < 2000) {
      return "master";
    } else if (friend.score < 2500) {
      return "virtuoso";
    } else if (friend.score < 3000) {
      return "grandmaster";
    } else {
      return "legend";
    }
  };

  const onlineVisibility = isOnline ? "visible" : "invisible";

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className={`${onlineVisibility} online-now me-3`}
        title="Online"
      ></div>
      <span className="me-2">{friend.username}</span>
      <img
        src={`/images/medals/medal_${getMedal()}.png`}
        height={35}
        alt={getMedal()}
        title={getMedal().charAt(0).toUpperCase() + getMedal().slice(1)}
      />
    </div>
  );
};

export default FriendItem;
