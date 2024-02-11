import React, { useContext } from "react";
import { AppContext } from "../../App";

import { Availabilities } from "../../models/enums/availabilityEnum";
import "./ChallengeButton.css";

const ChallengeButton = ({ friendId, availability }) => {
  const { socket } = useContext(AppContext);

  const getButtonStatus = () => {
    switch (availability) {
      case Availabilities.ONLINE:
        return true;
      default:
        return false;
    }
  };

  const getButtonColor = () => {
    switch (availability) {
      case Availabilities.ONLINE:
        return "blue";
      case Availabilities.OFFLINE:
        return "gray";
      case Availabilities.PENDING:
        return "yellow";
      case Availabilities.PLAYING:
        return "red";
    }
  };

  const getButtonText = () => {
    switch (availability) {
      case Availabilities.ONLINE:
        return "PLAY";
      case Availabilities.OFFLINE:
        return "OFFLINE";
      case Availabilities.PENDING:
        return "HOLD";
      case Availabilities.PLAYING:
        return "PLAYING";
    }
  };

  const challengeFriend = () => {
    socket.emit("challenge", friendId);
  };

  return (
    <button
      className={`challenge-button${
        getButtonStatus() ? "" : "-disabled"
      } challenge-button-${getButtonColor()}`}
      type="button"
      disabled={!getButtonStatus()}
      onClick={challengeFriend}
    >
      {getButtonText()}
    </button>
  );
};

export default ChallengeButton;
