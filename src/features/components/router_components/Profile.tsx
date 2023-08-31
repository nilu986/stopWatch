import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

export const Profile = () => {
  const userAuthContext = useAuth();
  const navigate = useNavigate();
  const handleLgout = () => {
    userAuthContext.logout();
    navigate('/');
  };
  return (
    <div>
      Welcome to Profile{' '}
      {userAuthContext && userAuthContext.user && (
        <button onClick={handleLgout}> Logout </button>
      )}
    </div>
  );
};
