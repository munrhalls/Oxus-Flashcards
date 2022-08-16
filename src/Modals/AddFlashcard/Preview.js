import React from "react";

export const Preview = ({ flashcard, setSide, side }) => {
  function turnCard(e) {
    e.preventDefault();
    setSide((side) => !side);
  }

  return (
    <div className="Preview">
      <div className="Preview__flashcard">
        <p className="Preview__flashcard__text"></p>
        <img className="Preview__flashcard__image" />
      </div>

      <div className="Preview__turnBtnContainer">
        <button
          className="Preview__turnBtnContainer__turnBtn"
          onClick={(side) => turnCard(side)}
        >
          TURN
        </button>
      </div>
    </div>
  );
};
