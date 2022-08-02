import React from "react";
import { AddFlashcard } from "./AddFlashcard";
import { AddDeck } from "./AddDeck";

export const Modals = ({
  updateFlashcards,
  modalOpen,
  closeModal,
  decks,
  setDecks,
}) => {
  return (
    <div className="Modals">
      {modalOpen === "AddFlashcard" ? (
        <AddFlashcard
          closeModal={closeModal}
          updateFlashcards={updateFlashcards}
        />
      ) : (
        ""
      )}
      {modalOpen === "EditFlashcard" ? <div>EDIT MODAL</div> : ""}
      {modalOpen === "DeleteFlashcard" ? <div>DELETE MODAL</div> : ""}
      {modalOpen === "AddDeck" ? (
        <AddDeck decks={decks} setDecks={setDecks} closeModal={closeModal} />
      ) : (
        ""
      )}
    </div>
  );
};
