import React, { useEffect, useContext, useState } from "react";

import SidePanel from "../components/SidePanel/SidePanel";
import Welcome from "../components/Welcome/Welcome";
import FriendList from "../components/FriendList/FriendList";
import ModalCustom from "../components/ModalCustom/ModalCustom";
import { AppContext } from "../App";
import { homeInitialization } from "../utils/pagesUtils";

import "./HomePage.css";

const HomePage = () => {
  const { socket, user, setUser } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorText, setErrorText] = useState("");

  const closeModal = () => {
    setShowErrorModal(false);
  };

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
          <SidePanel />
          <Welcome />
          <FriendList />
          {showErrorModal ? (
            <ModalCustom
              modalMsg={errorText}
              isError={true}
              callback={closeModal}
            />
          ) : null}
        </>
      )}
    </main>
  );
};

export default HomePage;
