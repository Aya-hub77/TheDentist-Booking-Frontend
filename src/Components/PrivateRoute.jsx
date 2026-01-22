import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;