import React, { useState } from "react";
import cloneDeep from "lodash.clonedeep";
import { Preview } from "./Preview";

export const AddFlashcard = ({ updateFlashcards, closeModal }) => {
  const [side, setSide] = useState(false);
  const [turnedImg, setTurnedImg] = useState("");
  const [unturnedImg, setUnturnedImg] = useState("");
  const [flashcard, setFlashcard] = useState({
    unturned: { text: "", image: unturnedImg },
    turned: { text: "", image: turnedImg },
  });

  function handleSubmit(e) {
    e.preventDefault();
    updateFlashcards(flashcard);
    resetForm();
  }
  function resetForm() {
    setSide(false);
    setTurnedImg("");
    setUnturnedImg("");
    setFlashcard({
      unturned: { text: "", image: unturnedImg },
      turned: { text: "", image: turnedImg },
    });
  }
  function turnCard(e) {
    e.preventDefault();
    setSide(() => !side);
  }
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
  function changeTurnedText(e) {
    let change = cloneDeep(flashcard);
    change.turned.text = e.target.value;
    setFlashcard(change);
  }
  async function changeTurnedImg(e) {
    e.preventDefault();
    let str = await getBase64(e.target.files[0]);
    setTurnedImg(() => str);
  }
  const getBase64 = (file) => {
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  function handleExit(e) {
    e.preventDefault();
    closeModal();
  }
  return (
    <div className="Flashcards__form__container">
      <div className="Flashcards__form__titleRibbon">
        <span className="Flashcards__form__title">Add new flashcard.</span>
      </div>
      <form className="Flashcard__form" onSubmit={handleSubmit}>
        <div className="Flashcard__form__elementsContainer">
          <div className="Flashcard__form__elements">
            <div className="Flashcard__form__inputs">
              {!side ? (
                <div className="Flashcard_form_cell">
                  <div className="Flashcard_form_label">UNTURNED</div>
                  <div className="Flashcard__form__inputContainer">
                    <span className="Flashcard__form__inputTitle">
                      Add text
                    </span>
                    <textarea
                      className="Flashcard__form__textArea"
                      placeholder="Type..."
                      value={flashcard.unturned.text}
                      onChange={changeUnturnedText}
                    />
                    <span className="Flashcard__form__inputTitle --image">
                      Add image
                    </span>
                    <label
                      className="Flashcard__form__imageInput"
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
              ) : (
                <div className="Flashcard_form_cell">
                  <div className="Flashcard_form_label">TURNED</div>
                  <div className="Flashcard__form__inputContainer">
                    <span className="Flashcard__form__inputTitle">
                      Add text
                    </span>
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
          <div className="Flashcard__form__frame">
            {side ? (
              <>
                <div className="Flascard__form__frameTitle">TURNED PREVIEW</div>
                <Preview src={turnedImg} />
              </>
            ) : (
              <>
                <div className="Flascard__form__frameTitle">
                  UNTURNED PREVIEW
                </div>
                <Preview src={unturnedImg} />
              </>
            )}
            <div className="Flashcard__turnBtnContainer">
              <button className="Flashcard__turnBtn" onClick={turnCard}>
                Turn.
              </button>
            </div>
          </div>
        </div>
        <div className="Flashcard__form__submitContainer">
          <button
            onClick={(e) => handleExit(e)}
            className="Flashcard__form__close"
          >
            EXIT
          </button>
          <input
            className="Flashcard__form__submit"
            type="submit"
            value="SAVE"
            s
          />
        </div>
      </form>
    </div>
  );
};
