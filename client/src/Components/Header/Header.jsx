import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from "../Container/Container";
import "./style.css";

const Header = () => {
  return (
    <header className="pageHeader">
      <Container>
        <h1>
          <Link to="/">App</Link>
        </h1>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
