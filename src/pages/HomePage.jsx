import React, { useEffect, useContext, useState } from "react";

import SidePanel from "../components/SidePanel/SidePanel";
import Welcome from "../components/Welcome/Welcome";
import ModalError from "../components/ModalError/ModalError";
import FriendList from "../components/FriendList/FriendList";
import { AppContext } from "../App";
import { homeInitialization } from "../utils/pagesUtils";

import "./HomePage.css";

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
          <SidePanel />
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
