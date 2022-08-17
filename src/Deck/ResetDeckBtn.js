import React from "react";
import IMG__RESET from "./../Assets/go-back-arrow.png";

export default function ResetDeckBtn({ resetDeck }) {
  return (
    <button className="Deck__resetDeckBtn" onClick={() => resetDeck()}>
      <span className="Deck__resetDeckBtn__text">RESET</span>
      <img src={IMG__RESET} className="Deck__resetDeckBtn__img" />
    </button>
  );
}
