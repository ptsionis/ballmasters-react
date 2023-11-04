import React from "react";

import "./LoginButton.css";

const LoginButton = () => {
  const goToLogin = () => {
    window.location.href = "http://localhost:8000/auth/facebook";
  };

  return (
    <button className="loginBtn loginBtn--facebook" onClick={goToLogin}>
      Login with Facebook
    </button>
  );
};

export default LoginButton;
