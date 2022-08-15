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
    <div className="Inputs">
      <div className="Flashcard_form_label">UNTURNED</div>
      <div className="FormFlashcard__inputContainer">
        <span className="FormFlashcard__inputTitle">Add text</span>
        <textarea
          className="FormFlashcard__textArea"
          placeholder="Type..."
          value={flashcard.unturned.text}
          onChange={changeUnturnedText}
        />
        <span className="FormFlashcard__inputTitle --image">Add image</span>
        <label
          className="FormFlashcard__imageInput"
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
