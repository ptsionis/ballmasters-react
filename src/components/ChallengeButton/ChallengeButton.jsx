import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

import { Availabilities } from "../../models/enums/availabilityEnum";

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
        return "primary";
      case Availabilities.OFFLINE:
        return "secondary";
      case Availabilities.PENDING:
        return "warning";
      case Availabilities.PLAYING:
        return "danger";
    }
  };

  const challengeFriend = () => {
    socket.emit("challenge", friendId);
  };

  return (
    <button
      type="button"
      className={`btn btn-${getButtonColor()}`}
      disabled={!getButtonStatus()}
      onClick={challengeFriend}
    >
      {getButtonStatus() ? "PLAY" : "HOLD"}
    </button>
  );
};

export default ChallengeButton;
