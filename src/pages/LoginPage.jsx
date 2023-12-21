import React from "react";
import LoginButton from "../components/LoginButton/LoginButton";

const LoginPage = () => {
  return (
    <div className="page container-fluid d-flex flex-column justify-content-center align-items-center bg-light">
      <h1>BallMasters</h1>
      <h3 className="mb-5">The ultimate football knowledge quiz</h3>
      <LoginButton />
    </div>
  );
};

export default LoginPage;
