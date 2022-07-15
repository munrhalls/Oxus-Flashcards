import React, { useState } from "react";
import cloneDeep from "lodash.clonedeep";
import { Preview } from "./Preview";

export const AddFlashcard = ({ onAddFlashcard }) => {
  const [side, setSide] = useState(false);
  const [fcard, setFcard] = useState({
    unturned: { text: "", image: "" },
    turned: { text: "", image: "" },
  });
  const [turnedImg, setTurnedImg] = useState("");
  const [unturnedImg, setUnturnedImg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setFcard({
      unturned: { text: "", image: unturnedImg },
      turned: { text: "", image: turnedImg },
    });
    onAddFlashcard(fcard);
  }
  function turnCard(e) {
    e.preventDefault();
    setSide(() => !side);
  }
  function changeUnturnedText(e) {
    let change = cloneDeep(fcard);
    change.unturned.text = e.target.value;
    setFcard(change);
  }
  async function changeUnturnedImg(e) {
    e.preventDefault();
    let str = await getBase64(e.target.files[0]);
    setUnturnedImg(str);
  }
  function changeTurnedText(e) {
    let change = cloneDeep(fcard);
    change.turned.text = e.target.value;
    setFcard(change);
  }
  async function changeTurnedImg(e) {
    e.preventDefault();
    let str = await getBase64(e.target.files[0]);
    setTurnedImg(() => str);
  }
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
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
                  <div className="Flashcard --form">
                    <input
                      className="Flashcard__input"
                      placeholder="Type..."
                      value={fcard.unturned.text}
                      onChange={changeUnturnedText}
                    />
                    <input
                      className="Flashcard__input"
                      type="file"
                      onChange={changeUnturnedImg}
                    />
                  </div>
                </div>
              ) : (
                <div className="Flashcard_form_cell">
                  <div className="Flashcard_form_label">TURNED</div>
                  <div className="Flashcard__form__inputContainer">
                    <span className="Flashcard__form__textAreaTitle">
                      Add text
                    </span>
                    <textarea
                      className="Flashcard__form__textArea"
                      placeholder="Type..."
                      value={fcard.turned.text}
                      onChange={changeTurnedText}
                    />
                    <input
                      className="Flashcard__input"
                      type="file"
                      onChange={changeTurnedImg}
                    />
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
          <input
            className="Flashcard__form__submit"
            type="submit"
            value="Add FLASHCARD"
          />
        </div>
      </form>
    </div>
  );
};
