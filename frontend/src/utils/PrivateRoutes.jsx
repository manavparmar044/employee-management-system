import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Spinner from "../components/Spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <Spinner />;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
