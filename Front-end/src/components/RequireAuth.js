import { useLocation, Navigate, Outlet } from "react-router-dom";
import React from "react";

function RequireAuth() {
  const location = useLocation();
  const user = window.localStorage.getItem("loggedIn");

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
