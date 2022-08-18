import React from "react";
import Register from "./Register/Register";
import Login from "./Login/Login";

export function ModalsUser({ modalUser }) {
  return (
    <div className="ModalsUser">
      {modalUser === "register" && <Register />}
      {modalUser === "login" && <Login />}
    </div>
  );
}
