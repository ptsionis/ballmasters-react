import React, { useContext } from "react";

import { AppContext } from "../../App";
import "./MyProfile.css";

const MyProfile = () => {
  const { user } = useContext(AppContext);

  return (
    <>
      <img
        className="avatar-img"
        src={user.profilePicUrl ? user.profilePicUrl : "/images/noPicture.webp"}
        alt="Pic"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/noPicture.webp";
        }}
      />
      <div className="user-info">
        <h3 className={`user-${user.getRank()}`}>{user.username}</h3>
        <span className="user-role">({user.getRank()})</span>
      </div>
    </>
  );
};

export default MyProfile;
