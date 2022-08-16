import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";
import { Form } from "../Form";
import IMG__EDIT from "./../../Assets/edit.png";
import IMG__CLOSE from "./../../Assets/close.png";
import IMG__SAVE from "./../../Assets/save.png";

export const AddDeck = ({ decks, setDecks, setModalOpen, setactiveDeckId }) => {
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
    setactiveDeckId(deck.id);
    setModalOpen("EditDeck");
  }

  return (
    <div className="AddDeck">
      <form className="Form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Form__topBar">
          <div className="Form__topBar__line --first">
            <h2 className="Form__topBar__line__title">ADD DECK</h2>
          </div>
          <div className="Form__topBar__line --second"></div>
        </div>

        <div className="AddDeck__container">
          <label className="AddDeck__container__nameLabel" htmlFor="deckName">
            DECK NAME
          </label>
          <input
            className="AddDeck__container__nameInput"
            type="text"
            name="deckName"
            placeholder="Type here..."
            id="deckName"
            value={deckName}
            onChange={(e) => setDeckName(e.target.value)}
          />
        </div>

        <Form.ExitBtns setModalOpen={() => setModalOpen(null)} />
      </form>
    </div>
  );
};
