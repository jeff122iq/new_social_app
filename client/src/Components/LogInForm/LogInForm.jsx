import React, { useState } from "react";
import "./style.css";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

const LogInForm = (props) => {
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
  const history = useHistory();

  async function onLogin(event) {
    const setLoggedIn = props.setLoggedIn;
    const loggedIn = props.loggedIn;
    event.preventDefault();
    try {
      const response = await Axios.post("http://localhost:5000/login", {
        userName,
        password,
      });
      if (response.data) {
        localStorage.setItem("complexappUsername", response.data.userName);
        localStorage.setItem("AccessToken", response.data.Accesstoken);
        console.log(response.data);
        setLoggedIn(!loggedIn);
        history.push("/is_auth");
      } else {
        console.log("Incorrect data's!");
      }
    } catch (error) {
      console.log("Didn't log-in!");
    }
  }

  return (
    <form onSubmit={onLogin} className="logInForm">
      <h1>Log-in!</h1>
      <p>(press Enter to submit)</p>
      <div className="input"></div>
      <input
        onChange={(event) => setUserName(event.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={onLogin}>Log-in</button>
      <Link to="/">Create page!</Link>
    </form>
  );
};

export default LogInForm;
