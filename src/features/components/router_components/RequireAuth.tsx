import React, { Children } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const userAuthContext = useAuth();
  if (!userAuthContext.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
