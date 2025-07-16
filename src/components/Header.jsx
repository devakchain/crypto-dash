import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="top-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}

export default Header;
