import React from "react";

export const TurnedFlashcard = ({
  flashcard,
  setFlashcard,
  changeTurnedText,
  setTurnedImg,
  cloneDeep,
  getBase64,
}) => {
  function changeTurnedText(e) {
    let change = cloneDeep(flashcard);
    change.turned.text = e.target.value;
    setFlashcard(change);
  }
  async function changeTurnedImg(e) {
    e.preventDefault();
    let str = await getBase64(e.target.files[0]);
    setTurnedImg(str);
  }
  return (
    <div className="Flashcard_form_cell">
      <div className="Flashcard_form_label">TURNED</div>
      <div className="Flashcard__form__inputContainer">
        <span className="Flashcard__form__inputTitle">Add text</span>
        <textarea
          className="Flashcard__form__textArea"
          placeholder="Type..."
          value={flashcard.turned.text}
          onChange={changeTurnedText}
        />
        <span className="Flashcard__form__inputTitle --image">Add image</span>
        <label
          className="Flashcard__form__imageInput"
          htmlFor="changeTurnedImg"
        >
          UPLOAD IMAGE
          <input id="changeTurnedImg" type="file" onChange={changeTurnedImg} />
        </label>
      </div>
    </div>
  );
};
