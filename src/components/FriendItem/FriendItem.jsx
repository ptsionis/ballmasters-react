import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

import AvailabilityIcon from "../AvailabilityIcon/AvailabilityIcon";
import ChallengeButton from "../ChallengeButton/ChallengeButton";
import { Availabilities } from "../../models/enums/availabilityEnum";
import { capitalizeFirstLetter } from "../../utils/otherUtils";

const FriendItem = ({ friend }) => {
  const { socket } = useContext(AppContext);
  const [availability, setAvailability] = useState(Availabilities.OFFLINE);

  socket.on("friendStatus", ({ userId, status }) => {
    if (userId === friend.id) {
      setAvailability(status);
    }
  });

  socket.on("challenge_notification", (challengerUserId) => {});

  socket.on("challenge_sent", (targetUserId) => {
    if (friend.id === targetUserId) {
      setAvailability(Availabilities.PENDING);
    }
  });

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <AvailabilityIcon availability={availability} />
        <span className="me-2">{friend.username}</span>
      </div>
      <ChallengeButton friendId={friend.id} availability={availability} />
    </>
  );
};

export default FriendItem;
