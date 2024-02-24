import React, { useState, useContext } from "react";
import { AppContext } from "../../App";

import AvailabilityIcon from "../AvailabilityIcon/AvailabilityIcon";
import ChallengeButton from "../ChallengeButton/ChallengeButton";
import ChallengeCancelButton from "../ChallengeCancelButton/ChallengeCancelButton";
import ChallengeAcceptButton from "../ChallengeAcceptButton/ChallengeAcceptButton";
import ChallengeDeclineButton from "../ChallengeDeclineButton/ChallengeDeclineButton";
import { Availabilities } from "../../models/enums/availabilityEnum";

import "./FriendItem.css";

const FriendItem = ({ friend }) => {
  const { socket } = useContext(AppContext);
  const [availability, setAvailability] = useState(Availabilities.OFFLINE);
  const [challengedMe, setChallengedMe] = useState(false);
  const [cancelButton, setCancelButton] = useState(false);

  socket.on("friendStatus", ({ userId, status }) => {
    if (userId === friend.id) {
      if (status === Availabilities.OFFLINE) {
        setChallengedMe(false);
        setCancelButton(false);
      }
      setAvailability(status);
    }
  });

  socket.on("challenge_notification", (challengerUserId) => {
    if (friend.id === challengerUserId) {
      setChallengedMe(true);
    }
  });

  socket.on("challenge_sent", (targetUserId) => {
    if (friend.id === targetUserId) {
      setAvailability(Availabilities.PENDING);
      setCancelButton(true);
    }
  });

  socket.on("challenge_cancelled_ch", (targetUserId) => {
    if (friend.id === targetUserId) {
      setCancelButton(false);
      setAvailability(Availabilities.ONLINE);
    }
  });

  socket.on("challenge_cancelled_ta", (challengerUserId) => {
    if (friend.id === challengerUserId) {
      setChallengedMe(false);
      setAvailability(Availabilities.ONLINE);
    }
  });

  socket.on("rejected_successfully", (challengerUserId) => {
    if (friend.id === challengerUserId) {
      setChallengedMe(false);
      setAvailability(Availabilities.ONLINE);
    }
  });

  socket.on("challenge_rejected", (targetUserId) => {
    if (friend.id === targetUserId) {
      setCancelButton(false);
    }
  });

  return (
    <div className={`frienditem ${challengedMe ? "challenged-me" : ""}`}>
      <div className="frienditem-name-wrapper">
        <AvailabilityIcon availability={availability} />
        <div className="frienditem-name">
          <img
            className="friend-img"
            src={
              friend.profilePicUrl
                ? friend.profilePicUrl
                : "/images/noPicture.webp"
            }
            alt="Pic"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/noPicture.webp";
            }}
          />
          <span className="frienditem-name-span">{friend.username}</span>
        </div>
      </div>
      {challengedMe ? (
        <div className="challenge-response-wrapper">
          <ChallengeAcceptButton friendId={friend.id} />
          <ChallengeDeclineButton friendId={friend.id} />
        </div>
      ) : cancelButton ? (
        <ChallengeCancelButton friendId={friend.id} />
      ) : (
        <ChallengeButton friendId={friend.id} availability={availability} />
      )}
    </div>
  );
};

export default FriendItem;
