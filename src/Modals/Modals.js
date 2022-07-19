import React from "react";
import { AddFlashcard } from "./AddFlashcard";

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
      {modalOpen === "SortFlashcards" ? <div>SORT MODAL</div> : ""}
    </div>
  );
};
