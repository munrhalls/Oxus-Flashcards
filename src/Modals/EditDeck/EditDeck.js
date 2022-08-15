import React, { useState } from "react";
import IMG__EDIT from "./../../Assets/edit.png";
import IMG__CLOSE from "./../../Assets/close.png";
import { EditFlashcardsList } from "./EditFlashcardsList";
import { Form } from "./../Form";

export const EditDeck = ({ setModalOpen, activeDeckId, decks, setDecks }) => {
  const deck = decks?.filter((instance) => instance?.id === activeDeckId)?.[0];

  const [editedDeck, setEditedDeck] = useState(deck);
  const [isEditDeckName, setIsEditDeckName] = useState(null);

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
            {isEditDeckName ? (
              <input
                className="Form__topBar__line__deckName --input"
                placeholder="type new deck name..."
                type="text"
                value={editedDeck.name}
                onChange={(e) =>
                  setEditedDeck({ ...editedDeck, name: e.target.value })
                }
              />
            ) : (
              <h1 className="Form__topBar__line__deckName">
                {editedDeck?.name}
              </h1>
            )}
            {!isEditDeckName ? (
              <button
                type="button"
                className="Form__topBar__line__btn"
                onClick={() => setIsEditDeckName(!isEditDeckName)}
              >
                <span className="Form__topBar__line__btn__text">Edit</span>
                <img
                  className="Form__topBar__line__btn__icon"
                  src={IMG__EDIT}
                  alt="CLOSE"
                />
              </button>
            ) : (
              <button
                type="button"
                className="Form__topBar__line__btn"
                onClick={() => setIsEditDeckName(!isEditDeckName)}
              >
                <span className="Form__topBar__line__btn__text">Close</span>
                <img
                  className="Form__topBar__line__btn__icon"
                  src={IMG__CLOSE}
                  alt="CLOSE"
                />
              </button>
            )}
          </div>
        </div>
        <EditFlashcardsList
          setModalOpen={setModalOpen}
          editedDeck={editedDeck}
          setEditedDeck={(editedDeck) => setEditedDeck(editedDeck)}
        />
        <Form.SubmitExitBtns setModalOpen={() => setModalOpen(null)} />
      </form>
    </div>
  );
};
