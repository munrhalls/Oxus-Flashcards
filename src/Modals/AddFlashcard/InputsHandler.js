import React from "react";
import cloneDeep from "lodash.clonedeep";

export const InputsHandler = ({ side, flashcard, setFlashcard }) => {
  const flashcardSide = side ? flashcard.turned : flashcard.unturned;
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
    console.log({ ...flashcard });
    setFlashcard((flashcard) => {
      flashcardSide.text = e.target.value;
      return { ...flashcard, ...flashcardSide };
    });
  }
  async function updateFlashcardImage(e) {
    e.preventDefault();
    let str = await getBase64(e.target.files[0]);
    setFlashcard((flashcard) => {
      flashcardSide.image = str;
      return { ...flashcard, ...flashcardSide };
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
          value={flashcardSide.text}
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
