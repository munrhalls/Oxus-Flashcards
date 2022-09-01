import React, { useState } from "react";
import { EditFlashcardsList } from "./EditFlashcardsList";
import { Form } from "./../Form";
import { useGlobal } from "../../../Contexts/GlobalProvider";

export const EditDeck = (props) => {
  const { setModalOpen } = useGlobal();
  const { activeDeckId, decks, setDecks } = props;
  const deck = decks?.filter((instance) => instance?.id === activeDeckId)?.[0];

  const [editedDeck, setEditedDeck] = useState(deck);

  function handleSubmit(e) {
    e.preventDefault();
    setDecks(() =>
      decks.map((el) => {
        return el.id === deck.id ? { ...editedDeck } : el;
      })
    );
    setModalOpen(null);
  }

  return (
    <div className="EditDeck">
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form__topBar">
          <div className="Form__topBar__line --first">
            <h2 className="Form__topBar__line__title">EDIT DECK</h2>
          </div>
          <div className="Form__topBar__line --second">
            <Form.EditDeckName />
          </div>
        </div>
        <EditFlashcardsList
          editedDeck={editedDeck}
          setEditedDeck={(editedDeck) => setEditedDeck(editedDeck)}
        />
        <Form.ExitBtns />
      </form>
    </div>
  );
};
