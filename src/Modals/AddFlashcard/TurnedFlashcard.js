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
      <div className="FormFlashcard__inputContainer">
        <span className="FormFlashcard__inputTitle">Add text</span>
        <textarea
          className="FormFlashcard__textArea"
          placeholder="Type..."
          value={flashcard.turned.text}
          onChange={changeTurnedText}
        />
        <span className="FormFlashcard__inputTitle --image">Add image</span>
        <label className="FormFlashcard__imageInput" htmlFor="changeTurnedImg">
          UPLOAD IMAGE
          <input id="changeTurnedImg" type="file" onChange={changeTurnedImg} />
        </label>
      </div>
    </div>
  );
};
