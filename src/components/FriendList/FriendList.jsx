import React, { useEffect, useContext } from "react";
import { AppContext } from "../../App";

import FriendItem from "../FriendItem/FriendItem";

import "./FriendList.css";

const FriendList = () => {
  const { socket, user } = useContext(AppContext);

  useEffect(() => {
    socket.emit("login", user.id);
  }, []);

  return (
    <section className="home-section friendlist">
      <h3>My Friends</h3>
      <ul className="friendlist-ul">
        {user.friends &&
          user.friends.map((friend, index) => (
            <li key={index}>
              <FriendItem friend={friend} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default FriendList;
