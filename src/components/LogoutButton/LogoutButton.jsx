import React from "react";

const LogoutButton = () => {
  const goToLogout = () => {
    window.location.href = "http://localhost:8000/auth/logout";
  };

  return (
    <button onClick={goToLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
