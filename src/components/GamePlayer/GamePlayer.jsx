import React from "react";

import "./GamePlayer.css";

const GamePlayer = ({ player, isOpponent }) => {
  return (
    <div className={`game-player${isOpponent ? " game-player-opponent" : ""}`}>
      <img
        className="game-player-img"
        src={
          player.profilePicUrl ? player.profilePicUrl : "/images/noPicture.webp"
        }
        alt="Pic"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/noPicture.webp";
        }}
      />
      <span className="game-player-name">{player.username}</span>
    </div>
  );
};

export default GamePlayer;
