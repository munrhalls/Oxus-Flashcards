import React, { useState } from "react";
import { Flashcard } from "../../Flashcards/Flashcard";
import { uuidv4 } from "@firebase/util";
import IMG__EDIT from "./../../Assets/edit.png";
import IMG__CLOSE from "./../../Assets/close.png";
import IMG__PLUS from "./../../Assets/plus.png";
import IMG__SAVE from "./../../Assets/save.png";
import IMG__BACK from "./../../Assets/go-back-arrow.png";

export const DeleteDeck = ({ closeModal, activeDeckId, decks, setDecks }) => {
  const deck = decks.filter((instance) => instance.id === activeDeckId)[0];

  function handleSubmit(e) {
    e.preventDefault();
    setDecks(() =>
      decks.filter((el) => {
        return el.id === deck.id;
      })
    );
    closeModal();
  }
  return (
    <div>
      <div className="DeleteDeck">
        {deck ? (
          <form className="Form" onSubmit={handleSubmit}>
            <div className="Form__topBar">
              <div className="Form__topBar__line --first">
                <h2 className="Form__topBar__line__title">DELETE DECK</h2>
              </div>
              <div className="Form__topBar__line --second">
                <h1 className="Form__topBar__line__deckName">
                  TITLE: {deck.name}
                </h1>
              </div>
            </div>
            <div className="Form__"></div>

            <div className="Form__exitBtnsContainer">
              <button
                type="button"
                className="Form__exitBtnsContainer__btn"
                onClick={() => closeModal()}
              >
                <span className="Form__exitBtnsContainer__btn__text">Back</span>
                <img
                  className="Form__exitBtnsContainer__btn__img"
                  src={IMG__BACK}
                  alt="BACK"
                />
              </button>
            </div>
          </form>
        ) : (
          <div className="Form__noDeckSelectedMsg">
            <h1 className="Form__noDeckSelectedMsg__title">
              SELECT A DECK TO EDIT
            </h1>
            <button
              type="button"
              className="Form__noDeckSelectedMsg__btn__select"
            >
              SELECT DECK
            </button>
            <button
              type="button"
              className="Form__noDeckSelectedMsg__btn__close"
              onClick={() => closeModal()}
            >
              EXIT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
