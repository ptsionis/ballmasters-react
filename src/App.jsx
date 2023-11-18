import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import AdminPendingPage from "./pages/AdminPendingPage";
import AdminSubmitPendingPage from "./pages/AdminSubmitPendingPage";
import AdminQuestionsPage from "./pages/AdminQuestionsPage";
import { checkIfAuthenticated } from "./utils/authUtils";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthentication = async () => {
      try {
        const isAuthenticated = await checkIfAuthenticated();
        setIsAuthenticated(isAuthenticated);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthentication();
  }, []);

  if (loading) {
    //TO-DO: Add spinner
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace={true} />} />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <LoginPage />
            ) : (
              <Navigate to={"/home"} replace={true} />
            )
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <HomePage />
            ) : (
              <Navigate to={"/login"} replace={true} />
            )
          }
        />
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <UserPage />
            ) : (
              <Navigate to={"/login"} replace={true} />
            )
          }
        />
        <Route
          path="/admin-pending-questions"
          element={
            isAuthenticated ? (
              <AdminPendingPage />
            ) : (
              <Navigate to={"/login"} replace={true} />
            )
          }
        />
        <Route
          path="/admin-questions"
          element={
            isAuthenticated ? (
              <AdminQuestionsPage />
            ) : (
              <Navigate to={"/login"} replace={true} />
            )
          }
        />
        <Route
          path="/submit-pending"
          element={
            isAuthenticated ? (
              <AdminSubmitPendingPage />
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
