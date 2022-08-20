import React from "react";
import { FormUser } from "./FormUser";

export function ModalsUser({ modalUser }) {
  return (
    <div className="ModalsUser">
      {modalUser === "register" && <FormUser.Register />}
      {modalUser === "login" && <FormUser.Login />}
    </div>
  );
}
