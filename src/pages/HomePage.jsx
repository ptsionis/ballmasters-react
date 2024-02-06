import React, { useEffect, useContext, useState } from "react";
import Navbar from "../components/Nav/Navbar";

import Welcome from "../components/Welcome/Welcome";
import FriendList from "../components/FriendList/FriendList";
import Modal from "../components/Modal/Modal";
import { AppContext } from "../App";
import { homeInitialization } from "../utils/pagesUtils";

import "./HomePage.css";
import ModalError from "../components/ModalError/ModalError";

const HomePage = () => {
  const { socket, user, setUser } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    homeInitialization(socket, setUser);
    setIsLoading(false);
  }, []);

  socket.on("challenge_error", (challengeErrorMsg) => {
    setShowErrorModal(true);
    setErrorText(challengeErrorMsg);
  });

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
          {showErrorModal ? (
            <ModalError
              setShowErrorModal={setShowErrorModal}
              setErrorText={setErrorText}
              errorMsg={errorText}
            />
          ) : null}
        </>
      )}
    </main>
  );
};

export default HomePage;
