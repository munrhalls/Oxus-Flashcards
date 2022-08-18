import React from "react";
export function Header({}) {
  return (
    <header className="Header">
      <h6 className="Header__title">Flashcards</h6>
      <div className="Header__account">
        <button className="Header__account__btn">Log in</button>
        <button className="Header__account__btn">Register</button>
      </div>
    </header>
  );
}
