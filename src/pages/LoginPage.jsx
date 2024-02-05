import React from "react";
import LoginButton from "../components/LoginButton/LoginButton";

import "./LoginPage.css";

const LoginPage = () => {
  return (
    <main className="login-main">
      <h1>BallMasters</h1>
      <span className="mb-5">
        Connect with friends and challenge in more than 1.000.000 questions
      </span>
      <LoginButton />
    </main>
  );
};

export default LoginPage;
