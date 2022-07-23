import React from "react";
import { AddFlashcard } from "./AddFlashcard";
import { AddDeck } from "./AddDeck";
import { EditDeck } from "./EditDeck";

export const Modals = ({
  updateFlashcards,
  modalOpen,
  closeModal,
  decks,
  setDecks,
  activeDeck,
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
      {modalOpen === "EditDeck" ? (
        <EditDeck activeDeck={activeDeck} closeModal={closeModal} />
      ) : (
        ""
      )}
    </div>
  );
};
