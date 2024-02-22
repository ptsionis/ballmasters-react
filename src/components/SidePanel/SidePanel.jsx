import React, { useContext, useState } from "react";
import { FaGear } from "react-icons/fa6";

import { AppContext } from "../../App";
import "./SidePanel.css";
import Nav from "../Nav/Nav";

const SidePanel = () => {
  const { user } = useContext(AppContext);
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="home-section sidepanel-wrapper">
      <button className="avatar-button">
        <img
          className="avatar-img"
          src={
            user.profilePicUrl ? user.profilePicUrl : "/images/noPicture.webp"
          }
          alt="Pic"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/noPicture.webp";
          }}
        />
      </button>
      <div className="user-info">
        <h3 className={`user-${user.getRank()}`}>{user.username}</h3>
        <span className="user-role">({user.getRank()})</span>
      </div>
      {toggleNav ? (
        <Nav setToggleNav={setToggleNav} />
      ) : (
        <button
          className="open-nav"
          title="Options"
          onClick={() => {
            setToggleNav(true);
          }}
        >
          <FaGear color="white" size={"20px"} />
        </button>
      )}
    </div>
  );
};

export default SidePanel;
