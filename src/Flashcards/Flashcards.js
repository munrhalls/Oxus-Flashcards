import { uuidv4 } from "@firebase/util";
import React, { useState } from "react";
import { Flashcard } from "./Flashcard";
import img from "./../Assets/right-long-black-arrow.png";
import { dblClick } from "@testing-library/user-event/dist/click";

export const Flashcards = ({ sortedFlashcards }) => {
  const [orderNum, setOrderNum] = useState(1);
  const [difficulty, setDifficulty] = useState(3);
  const [rating, setRating] = useState(3);
  const levels = ["pass", "easy", "medium", "hard"];

  function showNext() {}
  function updateRating(e) {
    setRating(() => levels.indexOf(e.target.value));
  }
  return (
    <div className="Flashcards">
      {sortedFlashcards.map((flashcard) => {
        return flashcard.difficulty === difficulty &&
          flashcard.orderNum === orderNum ? (
          <div key={uuidv4()}>
            <div className="Flashcard__number">{flashcard.order}</div>
            <Flashcard key={uuidv4()} flashcard={flashcard} />
          </div>
        ) : (
          ""
        );
      })}
      <div className="Flashcards__btns">
        <div className="Flashcards__btns__difficulty">
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              rating === 3 ? "--rating" : ""
            }`}
            onClick={updateRating}
            value={levels[3]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              rating === 2 ? "--rating" : ""
            }`}
            onClick={updateRating}
            value={levels[2]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              rating === 1 ? "--rating" : ""
            }`}
            onClick={updateRating}
            value={levels[1]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              rating === 0 ? "--rating" : ""
            }`}
            onClick={updateRating}
            value={levels[0]}
          />
        </div>
        <button
          className="Flashcards__btns__next"
          key={uuidv4()}
          onClick={showNext}
        >
          <span className="Flashcards__btn__next__text">Next</span>{" "}
          <img className="Flashcards__btn__next__image" src={img} />
        </button>
      </div>
    </div>
  );
};
