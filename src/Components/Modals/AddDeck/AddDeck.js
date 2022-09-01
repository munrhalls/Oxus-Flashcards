import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";
import { Form } from "../Form";
import { useGlobal } from "../../../Contexts/GlobalProvider";

export const AddDeck = (props) => {
  const [deckName, setDeckName] = useState("");
  const [error, setError] = useState("");
  const { setActiveDeckId } = props;
  const {
    setModalOpen,
    DB__setDeck,
    getDecksFromDBAndUpdateUI,
    currentUser,
    decks,
    setDecks,
  } = useGlobal();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    let newDeck = {
      id: uuidv4(),
      name: deckName,
      flashcards: [],
      completedFlashcards: [],
    };

    if (!currentUser)
      return (function () {
        setActiveDeckId(newDeck.id);
        setDecks([...decks, newDeck]);
        setModalOpen("EditDeck");
      })();
      
    try {
      await DB__setDeck(currentUser.uid, newDeck);
      await getDecksFromDBAndUpdateUI(currentUser);
    } catch (e) {
      console.error(e);
      return setError("Server could not add the deck at this time.");
    }

    setActiveDeckId(newDeck.id);
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

        {error && <h1>{error}</h1>}
        {/* refactor ^ */}
        <Form.ExitBtns />
      </form>
    </div>
  );
};
