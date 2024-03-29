// Taken from https://contactmentor.com/login-form-react-js-code/
// Modified by Kevin Kemmerer

import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import InputStudent from "./InputStudent";
import { useNavigate } from 'react-router-dom';



import "./styles.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();


  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } 
      else {
        setIsCorrect(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });

    };
  }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="title">Student Manager</div>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        { isCorrect ? <div><h4>You've Successfully logged in!</h4><button className="btn btn-success mx-auto d-block" onClick={()=>navigate("/input")}>Management</button></div> : renderForm}
      </div>
    </div>
  );
}

export default Login;