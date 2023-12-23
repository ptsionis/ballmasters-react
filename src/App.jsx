import React, { useState, createContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import AdminPendingPage from "./pages/AdminPendingPage";
import AdminSubmitPendingPage from "./pages/AdminSubmitPendingPage";
import AdminQuestionsPage from "./pages/AdminQuestionsPage";
import { checkIfAuthenticated } from "./utils/authUtils";
import socket from "./socketService";

export const AppContext = createContext(null);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("/");
  const [isLoading, setIsLoading] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case "/":
        return <HomePage />;
      case "profile":
        return <UserPage />;
      case "admin-pending-questions":
        return <AdminPendingPage />;
      case "admin-questions":
        return <AdminQuestionsPage />;
      case "submit-pending":
        return <AdminSubmitPendingPage />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchAuthentication = async () => {
      try {
        const isAuthenticated = await checkIfAuthenticated();
        setIsAuthenticated(isAuthenticated);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuthentication();
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <LoginPage />
            ) : (
              <Navigate to={"/"} replace={true} />
            )
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <AppContext.Provider
                value={{
                  socket,
                  isAuthenticated,
                  setIsAuthenticated,
                  user,
                  setUser,
                  setCurrentPage,
                }}
              >
                {renderPage()}
              </AppContext.Provider>
            ) : (
              <Navigate to={"/login"} replace={true} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
