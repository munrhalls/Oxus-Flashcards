import React, { useState } from "react";
import { Deck } from "../Decks/Deck";
import { Flashcard } from "../Flashcards/Flashcard";
import { AddFlashcard } from "./AddFlashcard";
import { uuidv4 } from "@firebase/util";
import IMG__EDIT from "./../Assets/edit.png";
import IMG__CLOSE from "./../Assets/close.png";
import IMG__PLUS from "./../Assets/plus.png";

export const EditDeck = ({ closeModal, activeDeck, decks, setDecks }) => {
  const [isEditDeckName, setIsEditDeckName] = useState(false);
  const [deckName, setDeckName] = useState(activeDeck ? activeDeck.name : "");
  const [isDelConfirmId, setisDelConfirmId] = useState(null);
  const [editedCards, setEditedCards] = useState(activeDeck.flashcards);
  console.log(isDelConfirmId);
  function handleSubmit(e) {
    e.preventDefault();
    setDecks((decks) => []);
  }
  function deleteCard(delId) {
    setEditedCards((editedCards) =>
      editedCards.filter((card) => card.id !== delId)
    );
  }
  return (
    <div className="EditDeck">
      {activeDeck ? (
        <form className="EditDeck__form" onSubmit={handleSubmit}>
          {/* <AddFlashcard /> */}
          <div className="EditDeck__form__topBar">
            <div className="EditDeck__form__topBar__line --first">
              <h2 className="EditDeck__form__topBar__line__title">EDIT DECK</h2>
              <button
                className="EditDeck__form__topBar__line__btn"
                onClick={() => closeModal()}
              >
                <span className="EditDeck__form__topBar__line__btn__text">
                  Close
                </span>
                <img
                  className="EditDeck__form__topBar__line__btn__icon"
                  src={IMG__CLOSE}
                  alt="CLOSE"
                />
              </button>
            </div>
            <div className="EditDeck__form__topBar__line --second">
              {isEditDeckName ? (
                <input
                  className="EditDeck__form__topBar__line__deckName --input"
                  placeholder="type new deck name..."
                  type="text"
                  value={deckName}
                  onChange={(e) => setDeckName(e.target.value)}
                />
              ) : (
                <h1 className="EditDeck__form__topBar__line__deckName">
                  {deckName}
                </h1>
              )}
              {!isEditDeckName ? (
                <button
                  className="EditDeck__form__topBar__line__btn"
                  onClick={() => setIsEditDeckName(!isEditDeckName)}
                >
                  <span className="EditDeck__form__topBar__line__btn__text">
                    Edit
                  </span>
                  <img
                    className="EditDeck__form__topBar__line__btn__icon"
                    src={IMG__EDIT}
                    alt="CLOSE"
                  />
                </button>
              ) : (
                <button
                  className="EditDeck__form__topBar__line__btn"
                  onClick={() => setIsEditDeckName(!isEditDeckName)}
                >
                  <span className="EditDeck__form__topBar__line__btn__text">
                    Close
                  </span>
                  <img
                    className="EditDeck__form__topBar__line__btn__icon"
                    src={IMG__CLOSE}
                    alt="CLOSE"
                  />
                </button>
              )}
            </div>
          </div>
          <div className="EditDeck__form__flashcards">
            <div className="EditDeck__form__flashcards__list">
              {editedCards.map((card, i) => {
                return (
                  <div
                    key={uuidv4()}
                    className="EditDeck__form__flashcardContainer"
                  >
                    <div className="EditDeck__form__flashcardContainer__numContainer">
                      <div className="EditDeck__form__flashcardContainer__numContainer__num">
                        {i}
                      </div>
                    </div>

                    {isDelConfirmId && isDelConfirmId === card.id ? (
                      <div className="EditDeck__form__flashcardContainer__deleteContainer">
                        <h3 className="EditDeck__form__flashcardContainer__deleteContainer__question">
                          Are you sure?
                        </h3>
                        <button
                          onClick={() => deleteCard(card.id)}
                          className="EditDeck__form__flashcardContainer__deleteContainer__btn --delete"
                        >
                          DELETE
                        </button>
                        <button
                          onClick={() => setisDelConfirmId(null)}
                          className="EditDeck__form__flashcardContainer__deleteContainer__btn --back"
                        >
                          BACK
                        </button>
                      </div>
                    ) : (
                      <div className="EditDeck__form__flashcardContainer__elements">
                        <Flashcard key={uuidv4()} flashcard={card} />
                        <div className="EditDeck__form__flashcardContainer__elements__btns">
                          <button className="EditDeck__form__flashcardContainer__elements__btns__btn --edit">
                            <img
                              className="EditDeck__form__flashcardContainer__elements__btns__btn__img"
                              src={IMG__EDIT}
                              alt="EDIT"
                            />
                          </button>

                          <button
                            onClick={() => setisDelConfirmId(card.id)}
                            className="EditDeck__form__flashcardContainer__elements__btns__btn --delete"
                          >
                            <img
                              className="EditDeck__form__flashcardContainer__elements__btns__btn__img"
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
              <div className="EditDeck__form__flashcardContainer --addBtn">
                <button className="EditDeck__form__flashcardContainer__btn --addBtn">
                  <img
                    className="EditDeck__form__flashcardContainer__btn__addImg"
                    src={IMG__PLUS}
                    alt="ADD"
                  />
                </button>
                <div className="EditDeck__form__flashcardContainer__addBtnTextContainer">
                  <h6 className="EditDeck__form__flashcardContainer__addBtnTextContainer__addBtnText">
                    ADD NEW FLASHCARD
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            Add flashcard
          </div> */}
          <div className="EditDeck__form__submitBtnContainer">
            <input
              className="EditDeck__form__submitBtnContainer__submitBtn"
              type="submit"
              value="SUBMIT CHANGES"
            />
          </div>
        </form>
      ) : (
        <div className="EditDeck__form__noDeckSelectedMsg">
          <h1 className="EditDeck__form__noDeckSelectedMsg__title">
            SELECT A DECK TO EDIT
          </h1>
          <button className="EditDeck__form__noDeckSelectedMsg__btn__select">
            SELECT DECK
          </button>
          <button
            className="EditDeck__form__noDeckSelectedMsg__btn__close"
            onClick={() => closeModal()}
          >
            EXIT
          </button>
        </div>
      )}
    </div>
  );
};
