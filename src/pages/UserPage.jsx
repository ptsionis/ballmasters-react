import { React, useContext } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import MyProfile from "../components/MyProfile/MyProfile";

import { AppContext } from "../App";
import "./UserPage.css";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const UserPage = () => {
  const { user } = useContext(AppContext);

  return (
    <main className="profile-main">
      <div className="profile-wrapper">
        <PageHeader title={"My Profile"} />
        <div className="my-profile">
          <MyProfile />
          <hr className="my-profile-hr" />
          <div className="winrate-details">
            <span>Winrate: {user.getWinrate()}</span>
            <span className="my-winrate-wp">
              ({user.gamesWon}/{user.gamesPlayed})
            </span>
          </div>
          <ProgressBar
            currentValue={user.score}
            goalValue={user.getGoalScore()}
            rank={user.getRank()}
          />
          <hr className="my-profile-hr" />
        </div>
      </div>
    </main>
  );
};

export default UserPage;
