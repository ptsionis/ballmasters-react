import React from "react";
import { login } from "../../services/authServices";

const LoginButton = () => {
  const goToLogin = () => {
    login();
  };

  return (
    <button
      className="btn btn-primary d-flex justify-content-center align-items-center"
      onClick={goToLogin}
    >
      <img className="me-2" src="/images/svg/facebook.svg" alt="Facebook" />
      Login
    </button>
  );
};

export default LoginButton;
