import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import LoginButton from "../LoginButton/LoginButton";
import { AppContext } from "../../App";

const Navbar = () => {
  const { isAuthenticated } = useContext(AppContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          BallMasters
        </a>
        {isAuthenticated ? <Dropdown /> : <LoginButton />}
      </div>
    </nav>
  );
};

export default Navbar;
