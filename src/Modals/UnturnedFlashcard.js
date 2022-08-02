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
      <div className="Form__manageflashcard__inputContainer">
        <span className="Form__manageflashcard__inputTitle">Add text</span>
        <textarea
          className="Form__manageflashcard__textArea"
          placeholder="Type..."
          value={flashcard.unturned.text}
          onChange={changeUnturnedText}
        />
        <span className="Form__manageflashcard__inputTitle --image">
          Add image
        </span>
        <label
          className="Form__manageflashcard__imageInput"
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
