import React from "react";

import NavButton from "../NavButton/NavButton";
import LogoutButton from "../LogoutButton/LogoutButton";

import "./Nav.css";

const Nav = ({ setToggleNav }) => {
  const toggleNav = () => {
    setToggleNav(false);
  };
  return (
    <nav className="nav">
      <button className="nav-close" onClick={toggleNav}>
        ❌
      </button>
      <NavButton text={"Preferences"} page={"profile"} />
      <NavButton text={"Submit Question"} page={"submit-pending"} />
      <NavButton text={"Pending Questions"} page={"admin-pending-questions"} />
      <LogoutButton />
    </nav>
  );
};

export default Nav;
