import React from "react";

export function DeleteFlashcardModal({ deleteCard, delId, setisDelConfirmId }) {
  return (
    <div className="FormFlashcardsList__instanceContainer__deleteContainer">
      <h3 className="FormFlashcardsList__instanceContainer__deleteContainer__question">
        Are you sure?
      </h3>
      <button
        type="button"
        onClick={() => deleteCard(delId)}
        className="FormFlashcardsList__instanceContainer__deleteContainer__btn --delete"
      >
        DELETE
      </button>
      <button
        type="button"
        onClick={() => setisDelConfirmId(null)}
        className="FormFlashcardsList__instanceContainer__deleteContainer__btn --back"
      >
        BACK
      </button>
    </div>
  );
}
