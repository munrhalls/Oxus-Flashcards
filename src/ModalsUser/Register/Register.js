import React from "react";
import { FormUser } from "./../FormUser";

export default function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }
  return (
    <form className="Register">
      <div className="Register__topbar">
        <h1 className="Register__topbar__title">REGISTER</h1>
      </div>
      <div className="Register__inputs">
        <label className="Register__inputs__label">E-mail address:</label>
        <input className="Register__inputs__email"></input>
        <label className="Register__inputs__label">Password:</label>
        <input className="Register__inputs__password"></input>
      </div>
      {/* reset pw */}
      <div className="Register__exit">
        <button className="Register__exit__cancel">cancel btn</button>
        <button className="Register__exit__submit" onClick={handleSubmit}>
          submit btn
        </button>
      </div>
    </form>
  );
}
