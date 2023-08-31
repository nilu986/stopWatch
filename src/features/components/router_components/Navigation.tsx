import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';
export const Navigation = () => {
  const userAuthContext = useAuth();
  console.log(userAuthContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/stopwatch">Stopwatch</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        {userAuthContext && !userAuthContext.user && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
