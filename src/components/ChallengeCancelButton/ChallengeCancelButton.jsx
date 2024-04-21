import React, { useContext } from "react";
import { AppContext } from "../../App";

import "./ChallengeCancelButton.css";

const ChallengeCancelButton = ({ friendId = "" }) => {
  const { socket } = useContext(AppContext);
  const cancelChallenge = () => {
    if (friendId) {
      socket.emit("challenge_cancel", friendId);
    } else {
      socket.emit("open_challenge_cancel");
    }
  };

  return (
    <button className="challenge-cancel-button" onClick={cancelChallenge}>
      Cancel
    </button>
  );
};

export default ChallengeCancelButton;
