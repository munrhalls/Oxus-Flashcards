import React, { useState } from "react";
import { Flashcard } from "../../Flashcards/Flashcard";
import { uuidv4 } from "@firebase/util";
import IMG__EDIT from "./../../Assets/edit.png";
import IMG__CLOSE from "./../../Assets/close.png";
import IMG__PLUS from "./../../Assets/plus.png";
import IMG__SAVE from "./../../Assets/save.png";
import IMG__BACK from "./../../Assets/go-back-arrow.png";

export const DeleteDeck = ({ setModalOpen, activeDeckId, decks, setDecks }) => {
  const deck = decks.filter((instance) => instance.id === activeDeckId)[0];

  function handleSubmit(e) {
    e.preventDefault();
    setDecks(() =>
      decks.filter((el) => {
        return el.id === deck.id;
      })
    );
    setModalOpen(null);
  }
  return (
    <div>
      <div className="DeleteDeck">
        {deck ? (
          <form className="Form" onSubmit={handleSubmit}>
            <div className="FormDeck__topBar">
              <div className="FormDeck__topBar__line --first">
                <h2 className="FormDeck__topBar__line__title">DELETE DECK</h2>
              </div>
              <div className="FormDeck__topBar__line --second">
                <h1 className="FormDeck__topBar__line__deckName">
                  TITLE: {deck.name}
                </h1>
              </div>
            </div>
            <div className="FormDeck__"></div>

            <div className="FormDeck__exitBtnsContainer">
              <button
                type="button"
                className="FormDeck__exitBtnsContainer__btn"
                onClick={() => setModalOpen(null)}
              >
                <span className="FormDeck__exitBtnsContainer__btn__text">
                  Back
                </span>
                <img
                  className="FormDeck__exitBtnsContainer__btn__img"
                  src={IMG__BACK}
                  alt="BACK"
                />
              </button>
            </div>
          </form>
        ) : (
          <div className="FormDeck__noDeckSelectedMsg">
            <h1 className="FormDeck__noDeckSelectedMsg__title">
              SELECT A DECK TO EDIT
            </h1>
            <button
              type="button"
              className="FormDeck__noDeckSelectedMsg__btn__select"
            >
              SELECT DECK
            </button>
            <button
              type="button"
              className="FormDeck__noDeckSelectedMsg__btn__close"
              onClick={() => setModalOpen(null)}
            >
              EXIT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
