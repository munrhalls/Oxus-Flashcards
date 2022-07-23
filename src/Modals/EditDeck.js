import React from "react";
import { Deck } from "../Decks/Deck";
import { Flashcard } from "../Flashcards/Flashcard";
import { AddFlashcard } from "./AddFlashcard";
import { uuidv4 } from "@firebase/util";

export const EditDeck = ({ closeModal, activeDeck }) => {
  console.log(activeDeck);
  return (
    <div className="EditDeck">
      {activeDeck ? (
        <>
          {/* <AddFlashcard /> */}
          <h1 className="EditDeck__deckName">{activeDeck.name}</h1>
          {activeDeck.flashcards.map((card) => {
            return <Flashcard key={uuidv4()} flashcard={card} />;
          })}
          <button className="EditDeck__btn__close" onClick={() => closeModal()}>
            CLOSE
          </button>
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
