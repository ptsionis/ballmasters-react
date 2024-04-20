import React, { useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { AiOutlineClose } from "react-icons/ai";

import FriendItem from "../FriendItem/FriendItem";

import "./FriendList.css";

const FriendList = ({ toggleShowFriendlist }) => {
  const { socket, user } = useContext(AppContext);

  useEffect(() => {
    socket.emit("get_friends_status", user.id);
  }, []);

  return (
    <div className="friendlist-wrapper">
      <div className="friendlist">
        <AiOutlineClose
          className="friendlist-close"
          size={"30px"}
          onClick={toggleShowFriendlist}
        />
        <ul className="friendlist-ul">
          {user.friends &&
            user.friends.map((friend, index) => (
              <li key={index}>
                <FriendItem friend={friend} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendList;
