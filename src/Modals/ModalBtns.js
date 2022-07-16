import React from "react";

export const ModalBtns = ({ setModalOpen }) => {
  return (
    <div className="Modal__containerBtns">
      <button
        className="Modal__btn"
        onClick={() => setModalOpen("AddFlashcard")}
      >
        Add flashcard
      </button>
      <button className="Modal__btn">Edit flashcard</button>
      <button className="Modal__btn">Delete flashcard</button>
      <button className="Modal__btn">Sort flashcards</button>
    </div>
  );
};
