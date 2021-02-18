

import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [error, setError] = useState("");
  const [congrats, setCongrats] = useState("");

  const validation = () => {
    const Name = document.querySelector("input[data-testid=name]").value;
    const email = document.querySelector("input[data-testid=email]").value;
    const phone = document.querySelector("input[data-testid=phoneNumber]")
      .value;
    const password = document.querySelector("input[data-testid=password]")
      .value;

    if (Name === "" || phone === "" || password === "" || email === "") {
      setError("All fields are mandatory");
    } else if (!isNaN(Name)) {
      setNameMessage("Name is not alphanumeric");
    } else if (email.indexOf("@") === -1) {
      setEmailMessage("Email must contain @");
    } else if (isNaN(phone)) {
      setPhoneMessage("Phone Number must contain only numbers");
    } else if (password.length <= 6) {
      setPasswordMessage("Password must contain atleast 6 letters");
    } else {
      let userName = email.slice(0,email.indexOf('@'));
      setCongrats(`Hello ${userName}`);
    }
  };
  return (
    <>
      <form actio="#" onSubmit={validation}>
        <div>
          Name :
          <input type="text" data-testid="name" />
          <span>{nameMessage}</span>
        </div>
        <div>
          Email address :
          <input type="text" data-testid="email" />
          <span>{emailMessage}</span>
        </div>
        <div>
          Gender :
          <select>
            <option value="male" selected>
              Male
            </option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {/* <span>{message}</span> */}
        </div>
        <div>
          Phone Number :
          <input type="text" data-testid="phoneNumber" />
          <span>{phoneMessage}</span>
        </div>
        <div>
          Password :
          <input type="text" data-testid="password" />
          <span>{passwordMessage}</span>
        </div>
        <div>
          <input type="submit" data-testid="submit" />
        </div>
        <div>{error}</div>
        <div>{congrats}</div>
      </form>
    </>
  );
};

export default App;
