import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="not_found">
      <h1>404</h1>
      <p>Ops! The Page You're looking for does not exist </p>
      <NavLink to="/">Go back Home</NavLink>
    </div>
  );
}

export default NotFound;
