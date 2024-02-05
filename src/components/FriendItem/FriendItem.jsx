import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

import AvailabilityIcon from "../AvailabilityIcon/AvailabilityIcon";
import ChallengeButton from "../ChallengeButton/ChallengeButton";
import ChallengeAcceptButton from "../ChallengeAcceptButton/ChallengeAcceptButton";
import ChallengeDeclineButton from "../ChallengeDeclineButton/ChallengeDeclineButton";
import { Availabilities } from "../../models/enums/availabilityEnum";

import "./FriendItem.css";

const FriendItem = ({ friend }) => {
  const { socket } = useContext(AppContext);
  const [availability, setAvailability] = useState(Availabilities.OFFLINE);
  const [challengedMe, setChallengedMe] = useState(false);

  socket.on("friendStatus", ({ userId, status }) => {
    if (userId === friend.id) {
      setAvailability(status);
    }
  });

  socket.on("challenge_notification", (challengerUserId) => {
    if (friend.id === challengerUserId) {
      setChallengedMe(true);
    }
  });

  socket.on("challenge_rejected", (challengerUserId) => {
    if (friend.id === challengerUserId) {
      setChallengedMe(false);
      setAvailability(Availabilities.ONLINE);
    }
  });

  socket.on("challenge_sent", (targetUserId) => {
    if (friend.id === targetUserId) {
      setAvailability(Availabilities.PENDING);
    }
  });

  return (
    <>
      <div className="frienditem-name">
        <AvailabilityIcon availability={availability} />
        <span className="frienditem-name-span">{friend.username}</span>
      </div>
      {challengedMe ? (
        <div className="challenge-response-wrapper">
          <ChallengeAcceptButton />
          <ChallengeDeclineButton friendId={friend.id} />
        </div>
      ) : (
        <ChallengeButton friendId={friend.id} availability={availability} />
      )}
    </>
  );
};

export default FriendItem;
