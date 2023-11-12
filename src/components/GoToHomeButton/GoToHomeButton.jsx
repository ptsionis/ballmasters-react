import React from "react";
import { useNavigate } from "react-router-dom";

const GoToHomeButton = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };

  return <button onClick={goToHome}>Go to Home</button>;
};

export default GoToHomeButton;
