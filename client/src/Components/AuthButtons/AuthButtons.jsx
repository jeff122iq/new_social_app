import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const AuthButtons = () => {
  return (
    <div className="authButtons">
      <Link to="/">Register</Link>
      <Link to="/login">Log-in</Link>
    </div>
  );
};

export default AuthButtons;
