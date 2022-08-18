import React from "react";
import { FormUser } from "./../FormUser";

export default function Register() {
  return (
    <div className="Register">
      <div className="Register__topbar">topbar title</div>
      <div className="Register__inputs">
        <div className="Register__inputs__email">register email input</div>
        <div className="Register__inputs__password">
          register password input
        </div>
      </div>
      {/* reset pw */}
      <div className="Register__exit">
        <button className="Register__exit__cancel">cancel btn</button>
        <button className="Register__exit__submit">submit btn</button>
      </div>
    </div>
  );
}
