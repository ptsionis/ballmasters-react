import React from "react";

import "./PlayVsFriendButton.css";

const PlayVsFriendButton = ({ toggleShowFriendlist }) => {
  return (
    <button className="vs-friend-play" onClick={toggleShowFriendlist}>
      Play vs Friend
    </button>
  );
};

export default PlayVsFriendButton;
