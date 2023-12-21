import React, { useEffect, useContext, useState } from "react";
import Navbar from "../components/Nav/Navbar";

import FriendList from "../components/FriendList/FriendList";
import { AppContext } from "../App";
import { homeInitialization } from "../utils/pagesUtils";

const HomePage = () => {
  const { socket, user, setUser } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    homeInitialization(socket, setUser);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="page container-fluid">
      <Navbar />
      <div className="container-fluid flex-grow-1 d-grid grid-container">
        <div className="row grid-content">
          <div>{user ? <h1>Welcome {user.username}</h1> : null}</div>
          {user && (
            <FriendList
              userId={user.id}
              friends={[...user.friends].sort((a, b) =>
                a.username.localeCompare(b.username)
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
