import React, { useContext } from "react";
import { AppContext } from "../../App";

import "./NavButton.css";

const NavButton = ({ text, page }) => {
  const { setCurrentPage } = useContext(AppContext);
  const changePage = () => {
    setCurrentPage(page);
  };

  return (
    <button className="nav-button" onClick={changePage}>
      {text}
    </button>
  );
};

export default NavButton;
