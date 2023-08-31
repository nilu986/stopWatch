import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
export const Login = () => {
  const [user, setUser] = useState(null);
  const userAuthContext = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectLocation = location.state?.path || '/';
  const addUser = (e) => {
    setUser(e.target.value);
  };
  const handleLogin = () => {
    userAuthContext.login(user);
    navigate(redirectLocation, { replace: true });
  };
  return (
    <div>
      <label>Username</label>
      <input type="text" onChange={addUser} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
