import React from "react";
import { logout } from "../../services/authServices";

const LogoutButton = () => {
  const userLogout = () => {
    logout();
  };
  return (
    <button className="btn w-100 btn-danger" onClick={userLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
