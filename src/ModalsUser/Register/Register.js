import React from "react";
import { FormUser } from "./../FormUser";

export default function Register() {
  return (
    <div className="Register">
      <div className="Register__topbar">topbar title</div>
      <div className="Register__inputs">
        <label className="Register__inputs__label">E-mail address:</label>
        <input className="Register__inputs__email"></input>
        <label className="Register__inputs__label">Password:</label>
        <input className="Register__inputs__password"></input>
      </div>
      {/* reset pw */}
      <div className="Register__exit">
        <button className="Register__exit__cancel">cancel btn</button>
        <button className="Register__exit__submit">submit btn</button>
      </div>
    </div>
  );
}
