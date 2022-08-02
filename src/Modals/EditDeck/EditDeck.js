import React, { useState } from "react";
import IMG__EDIT from "./../../Assets/edit.png";
import IMG__CLOSE from "./../../Assets/close.png";
import IMG__SAVE from "./../../Assets/save.png";
import { EditFlashcardsList } from "./EditFlashcardsList";

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
      <button>T E S T</button>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="FormDeck__topBar">
          <div className="FormDeck__topBar__line --first">
            <h2 className="FormDeck__topBar__line__title">EDIT DECK</h2>
          </div>
          <div className="FormDeck__topBar__line --second">
            {isEditDeckName ? (
              <input
                className="FormDeck__topBar__line__deckName --input"
                placeholder="type new deck name..."
                type="text"
                value={editedDeck.name}
                onChange={(e) =>
                  setEditedDeck({ ...editedDeck, name: e.target.value })
                }
              />
            ) : (
              <h1 className="FormDeck__topBar__line__deckName">
                {editedDeck?.name}
              </h1>
            )}
            {!isEditDeckName ? (
              <button
                type="button"
                className="FormDeck__topBar__line__btn"
                onClick={() => setIsEditDeckName(!isEditDeckName)}
              >
                <span className="FormDeck__topBar__line__btn__text">Edit</span>
                <img
                  className="FormDeck__topBar__line__btn__icon"
                  src={IMG__EDIT}
                  alt="CLOSE"
                />
              </button>
            ) : (
              <button
                type="button"
                className="FormDeck__topBar__line__btn"
                onClick={() => setIsEditDeckName(!isEditDeckName)}
              >
                <span className="FormDeck__topBar__line__btn__text">Close</span>
                <img
                  className="FormDeck__topBar__line__btn__icon"
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
        <div className="FormDeck__exitBtnsContainer">
          <button
            type="button"
            className="FormDeck__exitBtnsContainer__btn"
            onClick={() => setModalOpen(null)}
          >
            <span className="FormDeck__exitBtnsContainer__btn__text">
              Close
            </span>
            <img
              className="FormDeck__exitBtnsContainer__btn__img"
              src={IMG__CLOSE}
              alt="CLOSE"
            />
          </button>
          <button className="FormDeck__exitBtnsContainer__btn" type="submit">
            <span className="FormDeck__exitBtnsContainer__btn__text">Save</span>
            <img
              className="FormDeck__exitBtnsContainer__btn__img"
              src={IMG__SAVE}
              alt="SAVE"
            />
          </button>
        </div>
      </form>
    </div>
  );
};
