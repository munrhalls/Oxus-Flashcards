import React from "react";

export function DeleteFlashcard({ deleteCard, delId, setisDelConfirmId }) {
  return (
    <div className="FormFlashcardContainer__deleteContainer">
      <h3 className="FormFlashcardContainer__deleteContainer__question">
        Are you sure?
      </h3>
      <button
        type="button"
        onClick={() => deleteCard(delId)}
        className="FormFlashcardContainer__deleteContainer__btn --delete"
      >
        DELETE
      </button>
      <button
        type="button"
        onClick={() => setisDelConfirmId(null)}
        className="FormFlashcardContainer__deleteContainer__btn --back"
      >
        BACK
      </button>
    </div>
  );
}
