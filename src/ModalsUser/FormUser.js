import React from "react";
import { Form } from "../Modals/Form";

export const FormUser = {
  Register: function () {
    function handleSubmit(e) {
      e.preventDefault();
      console.log("submit");
    }
    return (
      <form className="FormUser">
        <div className="FormUser__topbar">
          <h1 className="FormUser__topbar__title">REGISTER</h1>
        </div>
        <div className="FormUser__inputs">
          <label className="FormUser__inputs__label">E-mail address:</label>
          <input className="FormUser__inputs__email"></input>
          <label className="FormUser__inputs__label">Password:</label>
          <input className="FormUser__inputs__password"></input>
        </div>
        {/* reset pw */}
        <div className="FormUser__exit">
          <button className="FormUser__exit__cancel">cancel btn</button>
          <button className="FormUser__exit__submit" onClick={handleSubmit}>
            submit btn
          </button>
        </div>
      </form>
    );
  },
  RegisterBtn: function ({ setModalUser }) {
    return (
      <button
        className="LoginRegisterBtn --register"
        onClick={() => setModalUser(() => "register")}
      >
        Register
      </button>
    );
  },
  Login: function () {
    return <div className="Login">Login</div>;
  },
  LoginBtn: function ({ setModalUser }) {
    return (
      <button
        className="LoginRegisterBtn --login"
        onClick={() => setModalUser(() => "login")}
      >
        Log in
      </button>
    );
  },
};
