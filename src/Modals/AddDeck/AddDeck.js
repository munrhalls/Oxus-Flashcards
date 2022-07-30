import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";

export const AddDeck = ({ decks, setDecks, setModalOpen }) => {
  const [deckName, setDeckName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let deck = {
      id: uuidv4(),
      name: deckName,
      flashcards: [],
      completedFlashcards: [],
    };

    setDecks([...decks, deck]);
    setModalOpen(null);
  }

  return (
    <div className="AddDeck">
      <form className="AddDeck__form" onSubmit={(e) => handleSubmit(e)}>
        <label className="AddDeck__nameLabel" htmlFor="deckName">
          DECK NAME:
        </label>
        <input
          type="text"
          name="deckName"
          id="deckName"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
        />
        <input className="AddDeck__submit" type="submit" />
      </form>

      <button
        className="AddDeck__closeBtn"
        onClick={(e) => {
          e.preventDefault();
          setModalOpen(null);
        }}
      >
        EXIT
      </button>
    </div>
  );
};
