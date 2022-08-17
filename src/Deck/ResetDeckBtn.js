import React from "react";
import IMG__RESET from "./../Assets/go-back-arrow.png";

export default function ResetDeckBtn({ resetDeck }) {
  return (
    <div className="Deck__resetDeck">
      <button className="Deck__resetDeck__btn" onClick={() => resetDeck()}>
        RESET
      </button>
      <img src={IMG__RESET} className="Deck__resetDeck__img" />
    </div>
  );
}
