import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";

import "./SidePanel.css";
import Nav from "../Nav/Nav";
import MyProfile from "../MyProfile/MyProfile";

const SidePanel = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="home-section sidepanel-wrapper">
      <MyProfile />
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
