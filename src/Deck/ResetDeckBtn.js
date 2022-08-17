import React from "react";

export default function ResetDeckBtn({ resetDeck }) {
  return (
    <div className="Flashcards__completedMessage__resetDeck">
      <button
        className="Flashcards__completedMessage__resetDeck__btn"
        onClick={() => resetDeck()}
      >
        RESET
      </button>
      <img className="Flashcards__completedMessage__resetDeck__img" />
    </div>
  );
}
