import React from "react";
import { FaCheck } from "react-icons/fa6";

import "./ChallengeAcceptButton.css";

const ChallengeAcceptButton = () => {
  return (
    <button className="challenge-accept-button">
      <FaCheck color="white" />
    </button>
  );
};

export default ChallengeAcceptButton;
