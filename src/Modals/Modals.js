import React from "react";
import { AddFlashcard } from "./AddFlashcard";

export const Modals = ({ setFlashcards, modalOpen }) => {
  return (
    <div className="Modals">
      {modalOpen === "AddFlashcard" ? (
        <AddFlashcard setFlashcards={setFlashcards} />
      ) : (
        ""
      )}
      {modalOpen === "EditFlashcard" ? <div>EDIT MODAL</div> : ""}
      {modalOpen === "DeleteFlashcard" ? <div>DELETE MODAL</div> : ""}
      {modalOpen === "SortFlashcards" ? <div>SORT MODAL</div> : ""}
    </div>
  );
};
