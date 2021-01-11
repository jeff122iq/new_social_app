import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import LogInForm from "../LogInForm/LogInForm";
import "./style.css";
// import AuthButtons from "../AuthButtons/AuthButtons";

const Authorization = (props) => {
  const setLoggedIn = props.setLoggedIn;
  const loggedIn = props.loggedIn;
  return (
    <Switch>
      <Router>
        <div className="hello">
          <h1 style={{ color: "white", fontSize: "40px" }}>
            Hello! Auth please.
          </h1>
          <div className="authorization">
            <Route path="/" exact>
              <RegisterForm setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
            </Route>
            <Route path="/login" exact>
              <LogInForm setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
            </Route>
          </div>
          {/* <AuthButtons /> */}
        </div>
      </Router>
    </Switch>
  );
};

export default Authorization;
