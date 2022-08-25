import React from "react";
import { useGlobal } from "../../Contexts/GlobalProvider";
import IMG__PLUS from "./../../Assets/plus.png";

export default function AddFlashcard() {
  const { setModalOpen } = useGlobal();

  return (
    <div
      onClick={() => setModalOpen("AddFlashcard")}
      className="FormFlashcardsList__instanceContainer --addBtn"
    >
      <button
        type="button"
        className="FormFlashcardsList__instanceContainer__btn --addBtn"
      >
        <img
          className="FormFlashcardsList__instanceContainer__btn__addImg"
          src={IMG__PLUS}
          alt="ADD"
        />
      </button>
      <div className="FormFlashcardsList__instanceContainer__addBtnTextContainer">
        <h6 className="FormFlashcardsList__instanceContainer__addBtnTextContainer__addBtnText">
          ADD NEW FLASHCARD
        </h6>
      </div>
    </div>
  );
}
