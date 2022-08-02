import React from "react";
import { AddFlashcard } from "./AddFlashcard";

export const Modals = ({
  flashcards,
  updateFlashcards,
  modalOpen,
  closeModal,
}) => {
  return (
    <div className="Modals">
      {modalOpen === "AddFlashcard" ? (
        <AddFlashcard
          flashcards={flashcards}
          closeModal={closeModal}
          updateFlashcards={updateFlashcards}
        />
      ) : (
        ""
      )}
      {modalOpen === "EditFlashcard" ? <div>EDIT MODAL</div> : ""}
      {modalOpen === "DeleteFlashcard" ? <div>DELETE MODAL</div> : ""}
      {modalOpen === "SortFlashcards" ? <div>SORT MODAL</div> : ""}
    </div>
  );
};
