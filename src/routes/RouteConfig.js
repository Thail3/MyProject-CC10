import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import PublicLayout from "../components/layouts/PublicLayout";
import { AuthContext } from "../contexts/AuthContext";
import Friend from "../pages/Friend";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

function RouteConfig() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<MainLayout />}>
          <Route path="profile/:id" element={<Profile />} />
          <Route path="friend" element={<Friend />} />

          <Route path="" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      ) : (
        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
    </Routes>
  );
}

export default RouteConfig;
