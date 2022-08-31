import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";
import { Form } from "../Form";
import { useGlobal } from "../../../Contexts/GlobalProvider";

export const AddDeck = (props) => {
  const [deckName, setDeckName] = useState("");
  const [error, setError] = useState("");
  const { setActiveDeckId, decks, setDecks } = props;
  const { setModalOpen, DB__addDeck, DB__getDecks, currentUser } = useGlobal();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    let newDeck = {
      id: uuidv4(),
      name: deckName,
      flashcards: [],
      completedFlashcards: [],
    };

    try {
      await DB__addDeck(currentUser.uid, newDeck);
      // await DB__getDecks
    } catch (e) {
      console.error(e);
      return setError("Server could not add the deck at this time.");
    }

    // setDecks([...decks, deck]);
    // setActiveDeckId(deck.id);
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
        <Form.ExitBtns />
      </form>
    </div>
  );
};
