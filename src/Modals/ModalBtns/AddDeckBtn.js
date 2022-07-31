import React from "react";

export const AddDeckBtn = ({ setModalOpen }) => {
  return (
    <div className="ModalBtns__container">
      <button
        className="ModalBtns__container__btn"
        onClick={() => setModalOpen("AddDeck")}
      >
        ADD DECK
      </button>
    </div>
  );
};
