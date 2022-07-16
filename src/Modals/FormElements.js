import React from "react";

export const FormElements = ({side, setFlashcard, setTurnedImg}) => {
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  return (
    <div className="Flashcard__form__elements">
      <div className="Flashcard__form__inputs">
        {!side ? (
          
        ) : (
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
              <span className="Flashcard__form__inputTitle --image">
                Add image
              </span>
              <label
                className="Flashcard__form__imageInput"
                htmlFor="changeTurnedImg"
              >
                UPLOAD IMAGE
                <input
                  id="changeTurnedImg"
                  type="file"
                  onChange={changeTurnedImg}
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
