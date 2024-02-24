import React from "react";
import LoginButton from "../components/LoginButton/LoginButton";

import "./LoginPage.css";

const LoginPage = () => {
  return (
    <main className="login-main">
      <h1>BallMasters</h1>
      <LoginButton />
    </main>
  );
};

export default LoginPage;
