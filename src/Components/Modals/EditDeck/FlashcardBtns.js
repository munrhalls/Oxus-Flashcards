import React from "react";
import { Flashcard } from "./../../../Components/ShufflableFlashcard/Flashcard";
import { uuidv4 } from "@firebase/util";
import IMG__CLOSE from "./../../../Assets/close.png";
import IMG__EDIT from "./../../../Assets/edit.png";
import { useGlobal } from "../../../Contexts/GlobalProvider";

export default function FlashcardBtns({ card, setisDelConfirmId }) {
  const { setModalOpen, setActiveFlashcardId } = useGlobal();

  return (
    <div className="FormFlashcardsList__instanceContainer__elements">
      <Flashcard key={uuidv4()} flashcard={card} />
      <div className="FormFlashcardsList__instanceContainer__elements__btns">
        <button
          type="button"
          className="FormFlashcardsList__instanceContainer__elements__btns__btn --edit"
          onClick={() => {
            setActiveFlashcardId(() => card.id);
            setModalOpen("SetFlashcard");
          }}
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
