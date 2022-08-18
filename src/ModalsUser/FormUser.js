import React from "react";
import { Form } from "../Modals/Form";

export const FormUser = {
  Register: function () {
    return <div className="Register"></div>;
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
