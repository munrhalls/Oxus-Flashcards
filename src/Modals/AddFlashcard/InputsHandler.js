import React from "react";
import cloneDeep from "lodash.clonedeep";

export const InputsHandler = ({ side, flashcard, setFlashcard }) => {
  console.log(flashcard);
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  function updateFlashcardText(e) {
    e.preventDefault();
    setFlashcard((flashcard) => {
      flashcard.unturned.text = e.target.value;
      return { ...flashcard };
    });
  }
  async function updateFlashcardImage(e) {
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
          onChange={updateFlashcardText}
        />
      </div>
      <div className="InputsHandler__inputContainer --image">
        {/* <span className="InputsHandler__inputContainer__inputTitle --image">
          Add image
        </span> */}
        <label
          className="InputsHandler__inputContainer__imageLabel"
          htmlFor="updateFlashcard"
        >
          ADD IMAGE
        </label>
        <input
          className="InputsHandler__inputContainer__imageInput"
          id="updateFlashcard"
          type="file"
          onChange={(e) => updateFlashcardImage(e)}
        />
      </div>
    </div>
  );
};
