import React from "react";

export const FormUser = {
  Login: function () {
    return <div>Login</div>;
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
  Register: function () {
    return <div>Register</div>;
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
};
