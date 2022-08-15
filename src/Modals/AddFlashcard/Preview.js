import React from "react";

export const Preview = ({ flashcard, setSide, side }) => {
  function turnCard(e) {
    e.preventDefault();
    setSide((side) => !side);
  }

  return (
    <div className="AddFlashcard__preview">
      {/* <img className="Flashcard__form__frameImage" src={}/> */}

      <div className="Flashcard__turnBtnContainer">
        <button
          className="Flashcard__turnBtn"
          onClick={(side) => turnCard(side)}
        >
          Turn.
        </button>
      </div>
    </div>
  );
};
