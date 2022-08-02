import React, { useRef } from "react";
import { Deck } from "../Decks/Deck";
import { Flashcard } from "../Flashcards/Flashcard";
import { AddFlashcard } from "./AddFlashcard";
import { uuidv4 } from "@firebase/util";

export const EditDeck = ({ closeModal, activeDeck }) => {
  return (
    <div className="EditDeck">
      {activeDeck ? (
        <>
          {/* <AddFlashcard /> */}
          <div className="EditDeck__topBar">
            <h1 className="EditDeck__topBar__deckName">{activeDeck.name}</h1>
            <button
              className="EditDeck__topBar__closeBtn"
              onClick={() => closeModal()}
            >
              CLOSE
            </button>
          </div>
          <div className="EditDeck__flashcards">
            <div className="EditDeck__flashcards__list">
              {activeDeck.flashcards.map((card, i) => {
                return (
                  <div key={uuidv4()} className="EditDeck__flashcardContainer">
                    <div className="EditDeck__flashcardContainer__num">{i}</div>
                    <Flashcard key={uuidv4()} flashcard={card} />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            Add flashcard
            <div>{/* <AddFlashcard /> */}</div>
          </div>
        </>
      ) : (
        <div className="EditDeck__noDeckSelectedMsg">
          <h1 className="EditDeck__noDeckSelectedMsg__title">
            SELECT A DECK TO EDIT
          </h1>
          <button className="EditDeck__noDeckSelectedMsg__btn__select">
            SELECT DECK
          </button>
          <button
            className="EditDeck__noDeckSelectedMsg__btn__close"
            onClick={() => closeModal()}
          >
            EXIT
          </button>
        </div>
      )}
    </div>
  );
};
