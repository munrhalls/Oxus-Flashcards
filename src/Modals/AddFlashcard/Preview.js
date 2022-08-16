import React from "react";

export const Preview = ({ flashcard, setSide, side }) => {
  function turnCard(e) {
    e.preventDefault();
    setSide((side) => !side);
  }

  return (
    <div className="Preview">
      {/* <img className="Flashcard__form__frameImage" src={}/> */}

      <div className="Preview__turnBtnContainer">
        <button className="Preview__turnBtn" onClick={(side) => turnCard(side)}>
          Turn.
        </button>
      </div>
    </div>
  );
};
