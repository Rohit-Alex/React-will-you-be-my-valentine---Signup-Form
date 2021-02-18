import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [error, setError] = useState("");
  const [congrats, setCongrats] = useState("");

  const validation = (e) => {
    e.preventDefault();
    const Name = document.querySelector("input[data-testid=name]").value;
    const email = document.querySelector("input[data-testid=email]").value;
    const phone = document.querySelector("input[data-testid=phoneNumber]")
      .value;
    const password = document.querySelector("input[data-testid=password]")
      .value;

    if (Name === "" || phone === "" || password === "" || email === "") {
      setError("All fields are mandatory");
      setCongrats("");
      setNameMessage("");
      setEmailMessage("");
      setPasswordMessage("");
    } else if (!isNaN(Name)) {
      setNameMessage("Name is not alphanumeric");
      setCongrats("");
      setError("");
      setEmailMessage("");
      setPasswordMessage("");
    } else if (email.indexOf("@") === -1) {
      setEmailMessage("Email must contain @");
      setCongrats("");
      setError("");
      setNameMessage("");
      setPasswordMessage("");
    } else if (isNaN(phone)) {
      setPhoneMessage("Phone Number must contain only numbers");
      setCongrats("");
      setError("");
      setNameMessage("");
      setEmailMessage("");
      setPasswordMessage("");
    } else if (password.length <= 6) {
      setPasswordMessage("Password must contain atleast 6 letters");
      setCongrats("");
      setError("");
      setNameMessage("");
      setEmailMessage("");
      setPhoneMessage("");
    } else {
      let userName = email.slice(0, email.indexOf("@"));
      setCongrats(`Hello ${userName}`);
      setError("");
      setNameMessage("");
      setEmailMessage("");
      setPhoneMessage("");
      setPasswordMessage("");
    }
  };
  return (
    <>
      <form onSubmit={validation}>
        <div>
          Name :
          <input type="text" data-testid="name" />
          <div>{nameMessage}</div>
        </div>
        <br />
        <div>
          Email address :
          <input type="text" data-testid="email" />
          <div>{emailMessage}</div>
        </div>
        <br />
        <div>
          Gender :
          <select data-testid="gender">
            <option value="male" selected>
              Male
            </option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <br />
        <div>
          Phone Number :
          <input type="text" data-testid="phoneNumber" />
          <div>{phoneMessage}</div>
        </div>
        <br />
        <div>
          Password :
          <input type="password" data-testid="password" />
          <div>{passwordMessage}</div>
        </div>
        <br />
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
