import React, { useState } from "react";

export const AddFcard = ({ onAddFcard }) => {
  const [fcard, setFcard] = useState({
    turned: { text: "", image: "" },
    unturned: { text: "", image: "" },
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAddFcard(fcard);
    setFcard({
      turned: { text: "", image: "" },
      unturned: { text: "", image: "" },
    });
  }
  function changeUnturned(e) {
    setFcard(() => {
      return {
        unturned: {
          text: e.target.value,
          image: e.target.files[0],
        },
      };
    });
  }
  function changeTurned(e) {
    setFcard(() => {
      return {
        turned: {
          text: e.target.value,
          image: e.target.files[0],
        },
      };
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
              value={fcard.unturned.text}
              onChange={changeUnturned}
            />
            <input
              className="Flashcard__input"
              type="file"
              onChange={changeUnturned}
            />
          </div>
        </div>
        <div className="Flashcard_form_cell">
          <div className="Flashcard_form_label">TURNED</div>
          <div className="Flashcard">
            <input
              className="Flashcard__input"
              placeholder="Type..."
              value={fcard.turned.text}
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
