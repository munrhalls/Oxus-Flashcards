import React from "react";
import { AddFlashcard } from "./AddFlashcard";

export const EditDeck = ({ closeModal, activeDeck }) => {
  console.log(activeDeck);
  return (
    <div className="EditDeck">
      <AddFlashcard />
      <button onClick={() => closeModal()}>CLOSE</button>
    </div>
  );
};
