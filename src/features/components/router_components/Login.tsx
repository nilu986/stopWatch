import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';
export const Login = () => {
  const [user, setUser] = useState(null);
  const userAuthContext = useAuth();
  const navigate = useNavigate();
  const addUser = (e) => {
    setUser(e.target.value);
  };
  const handleLogin = () => {
    userAuthContext.login(user);
    navigate('/');
  };
  return (
    <div>
      <label>Username</label>
      <input type="text" onChange={addUser} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
