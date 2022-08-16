import React from "react";
import cloneDeep from "lodash.clonedeep";

export const InputsHandler = ({ flashcard, setFlashcard }) => {
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  function changeUnturnedText(e) {
    let change = cloneDeep(flashcard);
    change.unturned.text = e.target.value;
    setFlashcard(change);
  }
  async function changeUnturnedImg(e) {
    e.preventDefault();
    let str = await getBase64(e.target.files[0]);
    setFlashcard((flashcard) => {
      flashcard.unturned.image = str;
      return flashcard;
    });
  }
  return (
    <div className="InputsHandler">
      <div className="InputsHandler_label">UNTURNED</div>
      <div className="InputsHandler__inputContainer">
        <span className="InputsHandler__inputContainer__inputTitle">
          Add text
        </span>
        <textarea
          className="InputsHandler__inputContainer__textArea"
          placeholder="Type..."
          value={flashcard.unturned.text}
          onChange={changeUnturnedText}
        />
        <span className="InputsHandler__inputContainer__inputTitle --image">
          Add image
        </span>
        <label
          className="InputsHandler__inputContainer__imageLabel"
          htmlFor="changeUnturnedImg"
        >
          UPLOAD IMAGE
          <input
            className="InputsHandler__inputContainer__imageLabel__input"
            id="changeUnturnedImg"
            type="file"
            onChange={changeUnturnedImg}
          />
        </label>
      </div>
    </div>
  );
};
