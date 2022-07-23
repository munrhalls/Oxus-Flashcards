import React from "react";

export const ModalBtns = ({ setModalOpen }) => {
  return (
    <div className="Modal__containerBtns">
      <div className="Modal__containerBtns__container">
        <button className="Modal__containerBtns__container__btn">
          SHOW ALL DECKS
        </button>
      </div>
      <div className="Modal__containerBtns__container">
        <button
          className="Modal__containerBtns__container__btn"
          onClick={() => setModalOpen("AddDeck")}
        >
          ADD DECK
        </button>
      </div>
      <div className="Modal__containerBtns__container">
        <button className="Modal__containerBtns__container__btn">
          EDIT DECK
        </button>
      </div>
    </div>
  );
};
