import React from "react";
import { Flashcard } from "../../Flashcards/Flashcard";
import { uuidv4 } from "@firebase/util";
import IMG__CLOSE from "./../../Assets/close.png";
import IMG__EDIT from "./../../Assets/edit.png";

export default function EditFlashcard({ card, setisDelConfirmId }) {
  return (
    <div className="FormFlashcardsList__instanceContainer__elements">
      <Flashcard key={uuidv4()} flashcard={card} />
      <div className="FormFlashcardsList__instanceContainer__elements__btns">
        <button
          type="button"
          className="FormFlashcardsList__instanceContainer__elements__btns__btn --edit"
        >
          <img
            className="FormFlashcardsList__instanceContainer__elements__btns__btn__img"
            src={IMG__EDIT}
            alt="EDIT"
          />
        </button>

        <button
          type="button"
          onClick={() => {
            setisDelConfirmId(card.id);
          }}
          className="FormFlashcardsList__instanceContainer__elements__btns__btn --delete"
        >
          <img
            className="FormFlashcardsList__instanceContainer__elements__btns__btn__img"
            src={IMG__CLOSE}
            alt="DELETE"
          />
        </button>
      </div>
    </div>
  );
}
