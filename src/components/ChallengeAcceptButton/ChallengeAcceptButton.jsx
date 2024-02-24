import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { AppContext } from "../../App";

import "./ChallengeAcceptButton.css";

const ChallengeAcceptButton = ({ friendId }) => {
  const { socket } = useContext(AppContext);

  const acceptChallenge = () => {
    socket.emit("challenge_accept", friendId);
  };

  return (
    <button className="challenge-accept-button" onClick={acceptChallenge}>
      <FaCheck color="white" />
    </button>
  );
};

export default ChallengeAcceptButton;
