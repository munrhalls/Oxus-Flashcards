import React from "react";
import { AddFlashcard } from "./AddFlashcard";
import { AddDeck } from "./AddDeck";

export const Modals = ({
  sortedFlashcards,
  updateFlashcards,
  modalOpen,
  closeModal,
}) => {
  return (
    <div className="Modals">
      {modalOpen === "AddFlashcard" ? (
        <AddFlashcard
          sortedFlashcards={sortedFlashcards}
          closeModal={closeModal}
          updateFlashcards={updateFlashcards}
        />
      ) : (
        ""
      )}
      {modalOpen === "EditFlashcard" ? <div>EDIT MODAL</div> : ""}
      {modalOpen === "DeleteFlashcard" ? <div>DELETE MODAL</div> : ""}
      {modalOpen === "AddDeck" ? <AddDeck /> : ""}
    </div>
  );
};
