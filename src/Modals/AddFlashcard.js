import React, { useState } from "react";
import cloneDeep from "lodash.clonedeep";
import { Preview } from "./Preview";
import { UnturnedFlashcard } from "./UnturnedFlashcard";
import { TurnedFlashcard } from "./TurnedFlashcard";
const { v4: uuidv4 } = require("uuid");

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
    updateFlashcards({
      id: uuidv4(),
      unturned: { text: flashcard.unturned.text, image: unturnedImg },
      turned: { text: flashcard.turned.text, image: turnedImg },
    });
    resetForm();
  }
  function resetForm() {
    setSide(false);
    setTurnedImg("");
    setUnturnedImg("");
    setFlashcard({
      unturned: { text: "", image: "" },
      turned: { text: "", image: "" },
    });
  }
  function turnCard(e) {
    e.preventDefault();
    setSide(() => !side);
  }
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
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
            {side ? (
              <TurnedFlashcard
                flashcard={flashcard}
                setTurnedImg={(flashcard) => setTurnedImg(flashcard)}
                getBase64={getBase64}
                setFlashcard={(flashcard) => setFlashcard(flashcard)}
                cloneDeep={cloneDeep}
              />
            ) : (
              <UnturnedFlashcard
                flashcard={flashcard}
                setUnturnedImg={(unturnedImg) => setUnturnedImg(unturnedImg)}
                getBase64={getBase64}
                setFlashcard={(flashcard) => setFlashcard(flashcard)}
                cloneDeep={cloneDeep}
              />
            )}
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
          />
        </div>
      </form>
    </div>
  );
};
