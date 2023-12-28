import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

import AvailabilityIcon from "../AvailabilityIcon/AvailabilityIcon";
import ChallengeButton from "../ChallengeButton/ChallengeButton";
import { Availabilities } from "../../models/enums/availabilityEnum";
import { capitalizeFirstLetter } from "../../utils/otherUtils";

const FriendItem = ({ friend }) => {
  const { socket } = useContext(AppContext);
  const [availability, setAvailability] = useState(Availabilities.OFFLINE);

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

  socket.on("friendStatus", ({ userId, status }) => {
    if (userId === friend.id) {
      setAvailability(status);
    }
  });

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <AvailabilityIcon availability={availability} />
        <span className="me-2">{friend.username}</span>
        <img
          src={`/images/medals/medal_${getMedal()}.webp`}
          height={35}
          alt={getMedal()}
          title={capitalizeFirstLetter(getMedal())}
        />
      </div>
      <ChallengeButton availability={availability} />
    </>
  );
};

export default FriendItem;
