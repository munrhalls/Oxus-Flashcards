import React, { useState } from "react";

export const AddFcard = ({ onAddFcard }) => {
  const [fcard, setFcard] = useState({ turned: "", unturned: "" });

  function handleSubmit(e) {
    e.preventDefault();
    onAddFcard(fcard);
    setFcard({ turned: "", unturned: "" });
  }
  function changeUnturned(e) {
    setFcard(() => {
      return { turned: fcard.turned, unturned: e.target.value };
    });
  }
  function changeTurned(e) {
    setFcard(() => {
      return { turned: e.target.value, unturned: fcard.unturned };
    });
  }
  return (
    <form className="Flashcard__form" onSubmit={handleSubmit}>
      <div className="Flashcard__form__inputs">
        <div className="Flashcard_form_cell">
          <div className="Flashcard_form_label">UNTURNED</div>
          <div className="Flashcard">
            <input
              className="Flashcard__input"
              placeholder="Type..."
              value={fcard.unturned}
              onChange={changeUnturned}
            />
            <input className="Flashcard__input" type="file" />
          </div>
        </div>
        <div className="Flashcard_form_cell">
          <div className="Flashcard_form_label">TURNED</div>
          <div className="Flashcard">
            <input
              className="Flashcard__input"
              placeholder="Type..."
              value={fcard.turned}
              onChange={changeTurned}
            />
            <input
              className="Flashcard__input"
              placeholder="Type..."
              value={fcard.turned}
              onChange={changeTurned}
            />
          </div>
        </div>
      </div>
      <div>
        <input
          className="Flashcard__form__submit"
          type="submit"
          value="Add FLASHCARD"
        />
      </div>
    </form>
  );
};
