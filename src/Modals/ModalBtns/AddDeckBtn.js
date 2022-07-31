import React from "react";
import IMG__PLUS from "./../../Assets/plus.png";
import IMG__CARDS from "./../../Assets/cards.png";

export const AddDeckBtn = ({ setModalOpen }) => {
  return (
    <div className="AddDeckBtn">
      <button
        className="AddDeckBtn__btn"
        onClick={() => setModalOpen("AddDeck")}
      >
        ADD DECK
      </button>
      <img
        className="AddDeckBtn__imgPlus"
        src={IMG__PLUS}
        alt="ADD BUTTON IMAGE."
      />
      <img
        className="AddDeckBtn__imgCards"
        src={IMG__CARDS}
        alt="CARDS IMAGE."
      />
    </div>
  );
};
