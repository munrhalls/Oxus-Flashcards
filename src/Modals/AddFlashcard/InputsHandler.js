import React from "react";
import cloneDeep from "lodash.clonedeep";

export const InputsHandler = ({ side, flashcard, setFlashcard }) => {
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
      return { ...flashcard, unturned: { image: str } };
    });
  }
  return (
    <div className="InputsHandler">
      <div className="InputsHandler_label">QUESTION</div>
      <div className="InputsHandler__inputContainer --text">
        <span className="InputsHandler__inputContainer__inputTitle">
          Type below...
        </span>
        <textarea
          className="InputsHandler__inputContainer__textArea"
          placeholder="Type..."
          value={flashcard.unturned.text}
          onChange={() => changeUnturnedText()}
        />
      </div>
      <div className="InputsHandler__inputContainer --image">
        {/* <span className="InputsHandler__inputContainer__inputTitle --image">
          Add image
        </span> */}
        <label
          className="InputsHandler__inputContainer__imageLabel"
          htmlFor="changeUnturnedImg"
        >
          ADD IMAGE
        </label>
        <input
          className="InputsHandler__inputContainer__imageInput"
          id="changeUnturnedImg"
          type="file"
          onChange={changeUnturnedImg}
        />
      </div>
    </div>
  );
};
