import React from "react";

export const FormUser = {
  Register: function () {
    return <div>Register</div>;
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
