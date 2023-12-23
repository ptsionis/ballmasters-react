import React, { useEffect, useContext, useState } from "react";
import Navbar from "../components/Nav/Navbar";

import Welcome from "../components/Welcome/Welcome";
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
      <main className="container-fluid flex-grow-1 d-grid grid-container">
        <div className="row grid-content">
          {user && (
            <>
              <Welcome />
              <FriendList />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
