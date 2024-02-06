import React, { useContext } from "react";
import { AppContext } from "../../App";

import "./ChallengeCancelButton.css";

const ChallengeCancelButton = ({ friendId }) => {
  const { socket } = useContext(AppContext);
  const cancelChallenge = () => {
    socket.emit("challenge_cancel", friendId);
  };

  return (
    <button className="challenge-cancel-button" onClick={cancelChallenge}>
      CANCEL
    </button>
  );
};

export default ChallengeCancelButton;
