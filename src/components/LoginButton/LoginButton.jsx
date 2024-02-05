import React from "react";
import { login } from "../../services/authServices";

import "./LoginButton.css";

const LoginButton = () => {
  const goToLogin = () => {
    login();
  };

  return (
    <button className="login-button" onClick={goToLogin}>
      <img
        className="login-button-img"
        src="/images/svg/facebook.svg"
        alt="Facebook"
      />
      Login
    </button>
  );
};

export default LoginButton;
