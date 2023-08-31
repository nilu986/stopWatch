import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Products = () => {
  return (
    <div>
      <nav>
        <NavLink to="featured">Features</NavLink>
        <NavLink to="new">New</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
