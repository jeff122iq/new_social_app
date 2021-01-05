import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header className="pageHeader">
      <div className="container">
        <h1>App</h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
