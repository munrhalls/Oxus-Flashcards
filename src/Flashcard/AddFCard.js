import React, { useState } from "react";
import cloneDeep from "lodash.clonedeep";

export const AddFcard = ({ onAddFcard }) => {
  const [side, setSide] = useState(false);
  const [fcard, setFcard] = useState({
    unturned: { text: "", image: "" },
    turned: { text: "", image: "" },
  });
  const [turnedImg, setTurnedImg] = useState(null);
  const [unturnedImg, setUnturnedImg] = useState(null);

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
  function changeTurnedText(e) {
    let change = cloneDeep(fcard);
    change.turned.text = e.target.value;
    setFcard(change);
  }
  return (
    <form className="Flashcard__form" onSubmit={handleSubmit}>
      <div className="Flashcard__form__container">
        <div className="Flashcard__turnBtnContainer">
          <button className="Flashcard__turnBtn" onClick={() => setSide(!side)}>
            turn
          </button>
        </div>
        <div className="Flashcard__form__inputs">
          {!side ? (
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
                  onChange={(e) => setUnturnedImg(e.target.file[0])}
                />
              </div>
            </div>
          ) : (
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
                  onChange={(e) => setTurnedImg(e.target.file[0])}
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <input
            className="Flashcard__form__submit"
            type="submit"
            value="Add FLASHCARD"
          />
        </div>
      </div>
      <div className="Frame">
        <img className="Frame__image" src={side ? turnedImg : unturnedImg} />
        <button className="Flashcard__turnBtn">Submit edition</button>
      </div>
    </form>
  );
};
