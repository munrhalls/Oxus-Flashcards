import React from "react";
import { AddFlashcard } from "./AddFlashcard";

export const EditDeck = ({ closeModal, activeDeck }) => {
  console.log(activeDeck);
  return (
    <div className="EditDeck">
      {activeDeck ? (
        <>
          {/* <AddFlashcard /> */}
          <h1 className="EditDeck__deckName">{activeDeck.name}</h1>

          <button className="EditDeck__btn__close" onClick={() => closeModal()}>CLOSE</button>
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
