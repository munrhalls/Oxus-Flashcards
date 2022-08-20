import React from "react";
import { FormUser } from "./FormUser";

export function ModalsUser({ modalOpen }) {
  return (
    <div className="ModalsUser">
      {modalOpen === "register" && <FormUser.Register />}
      {modalOpen === "login" && <FormUser.Login />}
    </div>
  );
}
