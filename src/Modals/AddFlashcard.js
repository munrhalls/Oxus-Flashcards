import React, { useState } from "react";
import cloneDeep from "lodash.clonedeep";
import { Preview } from "./Preview";
import { UnturnedFlashcard } from "./UnturnedFlashcard";
import { TurnedFlashcard } from "./TurnedFlashcard";
import { Flashcards } from "../Flashcards/Flashcards";
const { v4: uuidv4 } = require("uuid");

export const AddFlashcard = ({ flashcards, addFlashcard, closeModal }) => {
  const [side, setSide] = useState(false);
  const [turnedImg, setTurnedImg] = useState("");
  const [unturnedImg, setUnturnedImg] = useState("");
  const [flashcard, setFlashcard] = useState({
    unturned: { text: "", image: unturnedImg },
    turned: { text: "", image: turnedImg },
  });
  console.log(unturnedImg);
  function getNumOfLvlHardCards() {
    return flashcards.filter((card) => card.difficulty === 3).length;
  }
  function handleSubmit(e) {
    e.preventDefault();
    addFlashcard({
      id: uuidv4(),
      difficulty: 3,
      orderNum: getNumOfLvlHardCards() + 1,
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
    <div className="Form__manageflashcard">
      <div className="Form__manageflashcard__titleRibbon">
        <span className="Form__manageflashcards__title">
          Add new flashcard.
        </span>
      </div>
      <form className="Form__manageflashcard" onSubmit={handleSubmit}>
        <div className="Form__manageflashcard__elementsContainer">
          <div className="Form__manageflashcard__elements">
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
          <div className="Form__manageflashcard__frame">
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
        <div className="Form__manageflashcard__submitContainer">
          <button
            onClick={(e) => handleExit(e)}
            className="Form__manageflashcard__close"
          >
            EXIT
          </button>
          <input
            className="Form__manageflashcard__submit"
            type="submit"
            value="SAVE"
          />
        </div>
      </form>
    </div>
  );
};
