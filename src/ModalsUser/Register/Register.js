import React from "react";
import { FormUser } from "./../FormUser";

export default function Register({}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }
  return <FormUser.Register handleSubmit={(e) => handleSubmit(e)} />;
}
