import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const RoleBasedRoutes = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (!requiredRole.includes(user?.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default RoleBasedRoutes;
