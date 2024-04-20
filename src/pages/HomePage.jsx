import React, { useEffect, useContext, useState } from "react";

import FriendList from "../components/FriendList/FriendList";
import QuickPlayButton from "../components/QuickPlayButton/QuickPlayButton";
import ModalCustom from "../components/ModalCustom/ModalCustom";
import Loader from "../components/Loader/Loader";
import PlayVsFriendButton from "../components/PlayVsFriendButton/PlayVsFriendButton";
import SubmitQuestionButton from "../components/SubmitQuestionButton/SubmitQuestionButton";

import { AppContext } from "../App";
import { homeInitialization } from "../utils/pagesUtils";
import { getFirstName } from "../utils/userUtils";

import "./HomePage.css";
import LogoutButton from "../components/LogoutButton/LogoutButton";

const HomePage = () => {
  const { socket, user, setUser } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showFriendlist, setShowFriendlist] = useState(false);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorText, setErrorText] = useState("");

  const closeModal = () => {
    setShowErrorModal(false);
  };

  const toggleShowFriendlist = () => {
    setShowFriendlist(!showFriendlist);
  };

  const toggleShowQuestionForm = () => {
    setShowQuestionForm(!showQuestionForm);
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
          <section className="home-section welcome">
            {user ? (
              <div className="home-welcome-wrapper">
                <img
                  className="home-avatar-img"
                  src={
                    user.profilePicUrl
                      ? user.profilePicUrl
                      : "/images/noPicture.webp"
                  }
                  alt="Pic"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/noPicture.webp";
                  }}
                />
                <h3 className="home-welcome-text">
                  Welcome, {getFirstName(user.username)}!
                </h3>
              </div>
            ) : (
              <Loader />
            )}
            <div className="home-main-buttons">
              <QuickPlayButton />
              <PlayVsFriendButton toggleShowFriendlist={toggleShowFriendlist} />
              <SubmitQuestionButton
                toggleShowQuestionForm={toggleShowQuestionForm}
              />
              <LogoutButton />
            </div>
          </section>
          {showErrorModal ? (
            <ModalCustom
              modalMsg={errorText}
              isError={true}
              callback={closeModal}
            />
          ) : null}
          {showFriendlist ? (
            <FriendList toggleShowFriendlist={toggleShowFriendlist} />
          ) : null}
        </>
      )}
    </main>
  );
};

export default HomePage;
