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
import ChallengeModal from "../components/ChallengeModal/ChallengeModal";
import OpenChallengeModal from "../components/OpenChallengeModal/OpenChallengeModal";

const HomePage = () => {
  const { socket, user, setUser, setGameRoom, setCurrentPage } =
    useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showFriendlist, setShowFriendlist] = useState(false);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [showOpenChallengeModal, setShowOpenChallengeModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [challenger, setChallenger] = useState(null);

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

  socket.on("challenge_notification_detailed", (challengerProfile) => {
    setChallenger(challengerProfile);
    setShowChallengeModal(true);
  });

  socket.on("challenge_cancelled_ta", (challengerUserId) => {
    setShowChallengeModal(false);
  });

  socket.on("challenger_left", () => {
    setShowChallengeModal(false);
  });

  socket.on("challenge_error", (challengeErrorMsg) => {
    setShowErrorModal(true);
    setErrorText(challengeErrorMsg);
  });

  socket.on("rejected_successfully", (challengerUserId) => {
    setShowChallengeModal(false);
  });

  socket.on("open_challenge_created", () => {
    setShowOpenChallengeModal(true);
  });

  socket.on("open_challenge_cancelled", () => {
    setShowOpenChallengeModal(false);
  });

  socket.on("start_game", (newRoomId) => {
    setGameRoom(newRoomId);
    setCurrentPage("game");
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
          {showChallengeModal ? (
            <ChallengeModal challenger={challenger} />
          ) : null}
          {showOpenChallengeModal ? <OpenChallengeModal /> : null}
        </>
      )}
    </main>
  );
};

export default HomePage;
