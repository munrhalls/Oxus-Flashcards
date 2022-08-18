import React from "react";

export const FormUser = {
  Register: function () {
    return <div>Register</div>;
  },
  LoginBtn: function () {
    return <button className="LoginRegisterBtn --login">Log in</button>;
  },
  RegisterBtn: function () {
    return (
      <button
        className="LoginRegisterBtn --register"
        // onClick={() => setModalUser(() => true)}
      >
        Register
      </button>
    );
  },
};
