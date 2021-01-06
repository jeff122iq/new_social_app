import React, { useState } from "react";
import "./style.css";
import Axios from "axios";
import AuthButtons from "../AuthButtons/AuthButtons";

const LogInForm = () => {
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();

  async function onLogin(event) {
    event.preventDefault();
    try {
      const response = await Axios.post("http://localhost:5000/login", {
        userName,
        password,
      });
      if (response.data) {
        localStorage.setItem("complexappUsername", response.data.userName);
        console.log(response.data);
        // props.setLoggedIn(true);
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
      {/* <button>Log-in</button> */}
    </form>
  );
};

export default LogInForm;
