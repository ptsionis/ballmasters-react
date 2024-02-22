import React, { useContext } from "react";
import { ImBlocked } from "react-icons/im";
import { AppContext } from "../../App";

import "./ChallengeDeclineButton.css";

const ChallengeDeclineButton = ({ friendId }) => {
  const { socket } = useContext(AppContext);

  const declineChallenge = () => {
    socket.emit("challenge_decline", friendId);
  };

  return (
    <button className="challenge-decline-button" onClick={declineChallenge}>
      <ImBlocked />
    </button>
  );
};

export default ChallengeDeclineButton;
