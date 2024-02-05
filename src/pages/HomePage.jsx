import React, { useEffect, useContext, useState } from "react";
import Navbar from "../components/Nav/Navbar";

import Welcome from "../components/Welcome/Welcome";
import FriendList from "../components/FriendList/FriendList";
import { AppContext } from "../App";
import { homeInitialization } from "../utils/pagesUtils";

import "./HomePage.css";

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
    <main className="home-main">
      {user && (
        <>
          <div className="home-section">Profile Highlights</div>
          <Welcome />
          <FriendList />
        </>
      )}
    </main>
  );
};

export default HomePage;
