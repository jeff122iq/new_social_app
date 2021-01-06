import React, { useState } from "react";
import Axios from "axios";
import "./style.css";

const RegisterForm = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function onRegister(event) {
    event.preventDefault();
    try {
      await Axios.post("http://localhost:5000/register", {
        userName,
        email,
        password,
      });
      localStorage.setItem("complexappUsername", userName);
      localStorage.setItem("complexappEmail", email);
      console.log("Register success!!");
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  return (
    <form onSubmit={onRegister} className="registerForm">
      <h1>Register</h1>
      <p>(press Enter to submit)</p>
      <input
        onChange={(event) => setUserName(event.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        placeholder="Password"
      />
      {/* <div className="buttons">
        <button onClick={onRegister}>Register</button>
      </div> */}
    </form>
  );
};

export default RegisterForm;
