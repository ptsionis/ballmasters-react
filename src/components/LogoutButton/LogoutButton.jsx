import React from "react";
import { logout } from "../../services/authServices";

import "./LogoutButton.css";

const LogoutButton = () => {
  const userLogout = () => {
    logout();
  };
  return (
    <button className="logout-btn" onClick={userLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
