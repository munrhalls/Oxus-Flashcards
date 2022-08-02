import React, { useState } from "react";
import { Deck } from "../Decks/Deck";
import { Flashcard } from "../Flashcards/Flashcard";
import { AddFlashcard } from "./AddFlashcard";
import { uuidv4 } from "@firebase/util";
import IMG__EDIT from "./../Assets/edit.png";
import IMG__CLOSE from "./../Assets/close.png";
import IMG__PLUS from "./../Assets/plus.png";
import IMG__SAVE from "./../Assets/save.png";

import cloneDeep from "lodash.clonedeep";

export const EditDeck = ({ closeModal, activeDeckId, decks, setDecks }) => {
  const deck = decks.filter((instance) => instance.id === activeDeckId)[0];
  const [isEditDeckName, setIsEditDeckName] = useState(null);
  const [deckName, setDeckName] = useState(() => deck.name);
  const [isDelConfirmId, setisDelConfirmId] = useState(null);
  const [editedCards, setEditedCards] = useState(() => deck.flashcards);
  const [editedCompletedCards, setEditedCompletedCards] = useState(
    () => deck.completedFlashcards
  );

  function handleSubmit(e) {
    e.preventDefault();
    setDecks(() =>
      decks.map((el) => {
        return el.id === deck.id
          ? {
              ...deck,
              name: deckName,
              flashcards: editedCards,
              completedFlashcards: editedCompletedCards,
            }
          : el;
      })
    );
    closeModal();
  }
  function deleteCard(delId) {
    setEditedCards((editedCards) =>
      editedCards.filter((card) => card.id !== delId)
    );
    setEditedCompletedCards((editedCompletedCards) =>
      editedCompletedCards.filter((card) => card.id !== delId)
    );
  }
  return (
    <div className="EditDeck">
      {deck ? (
        <form className="Form" onSubmit={handleSubmit}>
          {/* <AddFlashcard /> */}
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
                  value={deckName}
                  onChange={(e) => setDeckName(e.target.value)}
                />
              ) : (
                <h1 className="Form__topBar__line__deckName">{deckName}</h1>
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
          <div className="Form__flashcards">
            <div className="Form__flashcards__list">
              {[...editedCards, ...editedCompletedCards].map((card, i) => {
                return (
                  <div key={uuidv4()} className="Form__flashcardContainer">
                    <div className="Form__flashcardContainer__numContainer">
                      <div className="Form__flashcardContainer__numContainer__num">
                        {i}
                      </div>
                    </div>

                    {isDelConfirmId && isDelConfirmId === card.id ? (
                      <div className="Form__flashcardContainer__deleteContainer">
                        <h3 className="Form__flashcardContainer__deleteContainer__question">
                          Are you sure?
                        </h3>
                        <button
                          type="button"
                          onClick={() => deleteCard(card.id)}
                          className="Form__flashcardContainer__deleteContainer__btn --delete"
                        >
                          DELETE
                        </button>
                        <button
                          type="button"
                          onClick={() => setisDelConfirmId(null)}
                          className="Form__flashcardContainer__deleteContainer__btn --back"
                        >
                          BACK
                        </button>
                      </div>
                    ) : (
                      <div className="Form__flashcardContainer__elements">
                        <Flashcard key={uuidv4()} flashcard={card} />
                        <div className="Form__flashcardContainer__elements__btns">
                          <button
                            type="button"
                            className="Form__flashcardContainer__elements__btns__btn --edit"
                          >
                            <img
                              className="Form__flashcardContainer__elements__btns__btn__img"
                              src={IMG__EDIT}
                              alt="EDIT"
                            />
                          </button>

                          <button
                            type="button"
                            onClick={() => setisDelConfirmId(card.id)}
                            className="Form__flashcardContainer__elements__btns__btn --delete"
                          >
                            <img
                              className="Form__flashcardContainer__elements__btns__btn__img"
                              src={IMG__CLOSE}
                              alt="DELETE"
                            />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="Form__flashcardContainer --addBtn">
                <button
                  type="button"
                  className="Form__flashcardContainer__btn --addBtn"
                >
                  <img
                    className="Form__flashcardContainer__btn__addImg"
                    src={IMG__PLUS}
                    alt="ADD"
                  />
                </button>
                <div className="Form__flashcardContainer__addBtnTextContainer">
                  <h6 className="Form__flashcardContainer__addBtnTextContainer__addBtnText">
                    ADD NEW FLASHCARD
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            Add flashcard
          </div> */}

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
  );
};
