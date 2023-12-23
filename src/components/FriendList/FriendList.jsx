import React, { useEffect, useContext } from "react";
import { AppContext } from "../../App";

import FriendItem from "../FriendItem/FriendItem";

const FriendList = () => {
  const { socket, user } = useContext(AppContext);

  useEffect(() => {
    socket.emit("login", user.id);
  }, []);

  return (
    <section className="d-flex flex-column justify-content-start align-items-center px-3 py-4 bg-secondary">
      <h3>My Friends</h3>
      <ul className="w-100 list-unstyled">
        {user.friends &&
          user.friends.map((friend, index) => (
            <li
              className="w-100 d-flex justify-content-between align-items-center my-2 p-2 rounded bg-light"
              key={index}
            >
              <FriendItem friend={friend} />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default FriendList;
