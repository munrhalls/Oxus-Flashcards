import React, { useState } from "react";
import IMG__EDIT from "./../../Assets/edit.png";
import IMG__CLOSE from "./../../Assets/close.png";
import IMG__SAVE from "./../../Assets/save.png";
import { EditFlashcardsList } from "./EditFlashcardsList";

export const EditDeck = ({ closeModal, activeDeckId, decks, setDecks }) => {
  const deck = decks.filter((instance) => instance.id === activeDeckId)[0];
  const [editedDeck, setEditedDeck] = useState(deck);
  const [isEditDeckName, setIsEditDeckName] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setDecks(() =>
      decks.map((el) => {
        return el.id === deck.id ? { ...editedDeck } : el;
      })
    );
    closeModal();
  }

  return (
    <div className="EditDeck">
      <button>T E S T</button>
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
                {editedDeck.name}
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
          editedDeck={editedDeck}
          setEditedDeck={(editedDeck) => setEditedDeck(editedDeck)}
        />
        <div className="Form__exitBtnsContainer">
          <button
            type="button"
            className="Form__exitBtnsContainer__btn"
            onClick={() => closeModal()}
          >
            <span className="Form__exitBtnsContainer__btn__text">Close</span>
            <img
              className="Form__exitBtnsContainer__btn__img"
              src={IMG__CLOSE}
              alt="CLOSE"
            />
          </button>
          <button className="Form__exitBtnsContainer__btn" type="submit">
            <span className="Form__exitBtnsContainer__btn__text">Save</span>
            <img
              className="Form__exitBtnsContainer__btn__img"
              src={IMG__SAVE}
              alt="SAVE"
            />
          </button>
        </div>
      </form>
    </div>
  );
};
