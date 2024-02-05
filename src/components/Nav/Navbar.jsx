import React, { useContext } from "react";
import Dropdown from "./Dropdown";
import { AppContext } from "../../App";

const Navbar = () => {
  const { user, setCurrentPage } = useContext(AppContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
      <div className="container-fluid">
        <span
          className="text-light"
          onClick={() => {
            setCurrentPage("/");
          }}
          style={{ cursor: "pointer" }}
        >
          BallMasters
        </span>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
