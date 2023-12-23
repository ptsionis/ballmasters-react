import React from "react";

const ChallengeButton = ({ availability }) => {
  const getButtonStatus = () => {
    switch (availability) {
      case "online":
        return false;
      default:
        return true;
    }
  };

  return (
    <button
      type="button"
      className="btn btn-primary"
      disabled={getButtonStatus()}
    >
      Challenge
    </button>
  );
};

export default ChallengeButton;
