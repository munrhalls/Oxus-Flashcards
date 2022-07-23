import React from "react";

export const ModalBtns = ({ setModalOpen, setActiveDeck }) => {
  return (
    <div className="Modal__containerBtns">
      <div className="Modal__containerBtns__container">
        <button
          className="Modal__containerBtns__container__btn"
          onClick={() => setActiveDeck(false)}
        >
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
