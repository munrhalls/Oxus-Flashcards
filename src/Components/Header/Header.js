import React from "react";
import { FormUser } from "./../ModalsUser/FormUser";

export function Header(props) {
  return (
    <header className="Header">
      <h6 className="Header__title">Flashcards</h6>
      <div className="Header__account">{props.children}</div>
    </header>
  );
}
