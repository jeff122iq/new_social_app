import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LogInForm from "../LogInForm/LogInForm";
import "./style.css";

const Authorization = () => {
  return (
    <Router>
      <div className="authorization">
        <Route path="/auth/register" component={RegisterForm} exact />
        <Route path="/auth/login" component={LogInForm} exact />
        <Link to="/auth/register" exact>
          Register
        </Link>
        <Link to="/auth/login" exact>
          Log-in
        </Link>
      </div>
    </Router>
  );
};

export default Authorization;
