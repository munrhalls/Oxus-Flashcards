import React from "react";
import { AddFlashcard } from "./AddFlashcard";

export const EditDeck = ({ closeModal, activeDeck }) => {
  console.log(activeDeck);
  return (
    <div className="EditDeck">
      {activeDeck ? (
        <>
          <AddFlashcard />
          <button onClick={() => closeModal()}>CLOSE</button>
        </>
      ) : (
        <div className="EditDeck__noDeckSelectedMsg">
          <h1 className="EditDeck__noDeckSelectedMsg__title">
            SELECT A DECK TO EDIT
          </h1>
          <button className="EditDeck__noDeckSelectedMsg__btn">
            SELECT DECK
          </button>
        </div>
      )}
    </div>
  );
};
