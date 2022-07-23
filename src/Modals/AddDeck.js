import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";

export const AddDeck = ({ decks, setDecks, closeModal }) => {
  const [deckName, setDeckName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let deck = {
      id: uuidv4(),
      name: deckName,
      flashcards: [],
    };

    setDecks([...decks, deck]);
  }
  return (
    <div className="AddDeck">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
        />
        <input className="AddDeck__submit" type="submit" />
      </form>
      <button
        className="AddDeck__closeBtn"
        onClick={(e) => {
          e.preventDefault();
          closeModal();
        }}
      >
        EXIT
      </button>
    </div>
  );
};
