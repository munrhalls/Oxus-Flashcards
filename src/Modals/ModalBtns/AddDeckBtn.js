import React from "react";

export const AddDeckBtn = ({ setModalOpen }) => {
  return (
    <div className="ModalBtns__container">
      <button
        className="ModalBtns__container__btn"
        onClick={() => setModalOpen("EditDeck")}
      >
        ADD DECK
      </button>
    </div>
  );
};
