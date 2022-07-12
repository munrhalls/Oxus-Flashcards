import React, { useState } from "react";
import cloneDeep from "lodash.clonedeep";

export const AddFcard = ({ onAddFcard }) => {
  const [fcard, setFcard] = useState({
    unturned: { text: "", image: "" },
    turned: { text: "", image: "" },
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAddFcard(fcard);
    setFcard({
      unturned: { text: "", image: "" },
      turned: { text: "", image: "" },
    });
  }
  function changeUnturnedText(e) {
    let change = cloneDeep(fcard);
    change.unturned.text = e.target.value;
    setFcard(change);
  }
  function changeUnturnedImage(e) {
    e.preventDefault();
    let change = cloneDeep(fcard);
    change.unturned.image = e.target.files[0];
    setFcard(change);
  }
  function changeTurnedText(e) {
    let change = cloneDeep(fcard);
    change.turned.text = e.target.value;
    setFcard(change);
  }
  function changeTurnedImage(e) {
    e.preventDefault();
    let change = cloneDeep(fcard);
    change.turned.image = e.target.files[0];
    setFcard(change);
  }
  function changeUnturned(e) {
    e.preventDefault();
    debugger;
    setFcard(() => {
      return {
        unturned: {
          text: e.target.value ? e.target.value : fcard.turned.text,
          image: e.target.files[0],
        },
      };
    });
  }
  function changeTurned(e) {
    e.preventDefault();

    setFcard(() => {
      return {
        turned: {
          text: e.target.value ? e.target.value : fcard.turned.text,
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
              onChange={changeUnturnedText}
            />
            <input
              className="Flashcard__input"
              type="file"
              onChange={changeUnturnedImage}
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
              onChange={changeTurnedText}
            />
            <input
              className="Flashcard__input"
              type="file"
              onChange={changeTurnedImage}
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
