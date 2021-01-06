import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LogInForm from "../LogInForm/LogInForm";
import "./style.css";
import AuthButtons from "../AuthButtons/AuthButtons";

const Authorization = () => {
  return (
    <Switch>
      <Router>
        <div className="hello">
          <h1 style={{ color: "white", fontSize: "40px" }}>
            Hello! Auth please.
          </h1>
          <div className="authorization">
            <Route path="/" component={RegisterForm} exact />
            <Route path="/login" component={LogInForm} exact />
          </div>
          <AuthButtons />
        </div>
      </Router>
    </Switch>
  );
};

export default Authorization;
