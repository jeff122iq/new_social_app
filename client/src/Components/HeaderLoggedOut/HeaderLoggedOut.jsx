import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Container from "../Container/Container";
import "./style.css";

const HeaderLoggedOut = (props) => {
  return (
    <header className="headerLoggedOut">
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

export default HeaderLoggedOut;
