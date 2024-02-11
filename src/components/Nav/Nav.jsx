import React, { useContext } from "react";

import NavButton from "../NavButton/NavButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { AppContext } from "../../App";
import { Roles } from "../../models/enums/rolesEnum";

import "./Nav.css";

const Nav = ({ setToggleNav }) => {
  const { user } = useContext(AppContext);

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
      {user.role !== Roles.USER ? (
        <NavButton
          text={"Pending Questions"}
          page={"admin-pending-questions"}
        />
      ) : null}
      <LogoutButton />
    </nav>
  );
};

export default Nav;
