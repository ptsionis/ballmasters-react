import React from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          BallMasters
        </a>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
