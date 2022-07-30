import React from "react";

export const UnturnedFlashcard = ({
  flashcard,
  setFlashcard,
  setUnturnedImg,
  changeUnturnedText,
  getBase64,
  cloneDeep,
}) => {
  function changeUnturnedText(e) {
    let change = cloneDeep(flashcard);
    change.unturned.text = e.target.value;
    setFlashcard(change);
  }
  async function changeUnturnedImg(e) {
    e.preventDefault();
    let str = await getBase64(e.target.files[0]);
    setUnturnedImg(str);
  }
  return (
    <div className="Flashcard_form_cell">
      <div className="Flashcard_form_label">UNTURNED</div>
      <div className="Form__flashcard__inputContainer">
        <span className="Form__flashcard__inputTitle">Add text</span>
        <textarea
          className="Form__flashcard__textArea"
          placeholder="Type..."
          value={flashcard.unturned.text}
          onChange={changeUnturnedText}
        />
        <span className="Form__flashcard__inputTitle --image">Add image</span>
        <label
          className="Form__flashcard__imageInput"
          htmlFor="changeUnturnedImg"
        >
          UPLOAD IMAGE
          <input
            id="changeUnturnedImg"
            type="file"
            onChange={changeUnturnedImg}
          />
        </label>
      </div>
    </div>
  );
};
