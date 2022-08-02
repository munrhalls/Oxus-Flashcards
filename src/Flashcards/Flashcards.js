import { uuidv4 } from "@firebase/util";
import React, { useState } from "react";
import { Flashcard } from "./Flashcard";
import img from "./../Assets/right-long-black-arrow.png";
import { dblClick } from "@testing-library/user-event/dist/click";

export const Flashcards = ({ sortedFlashcards, updateFlashcard }) => {
  const [difficulty, setDifficulty] = useState(3);
  const [reviewCount, setReviewCount] = useState(0);
  const levels = ["pass", "easy", "medium", "hard"];
  function putAwayCard() {
    let wasFirst = sortedFlashcards[0];
    wasFirst.difficulty = difficulty;
    wasFirst.orderNum =
      sortedFlashcards.filter((card) => card.difficulty === difficulty)
        .length || 1;
    updateFlashcard(wasFirst);
    setReviewCount(() => reviewCount + 1);
  }

  function updateDifficulty(e) {
    setDifficulty(() => levels.indexOf(e.target.value));
  }
  return (
    <div className="Flashcards">
      <div key={uuidv4()}>
        <div className="Flashcard__number">
          {reviewCount} / {sortedFlashcards.length}
        </div>
        <Flashcard key={uuidv4()} flashcard={sortedFlashcards[0]} />
      </div>
      <div className="Flashcards__btns">
        <div className="Flashcards__btns__difficulty">
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 3 ? "--rating" : ""
            }`}
            onClick={updateDifficulty}
            value={levels[3]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 2 ? "--rating" : ""
            }`}
            onClick={updateDifficulty}
            value={levels[2]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 1 ? "--rating" : ""
            }`}
            onClick={updateDifficulty}
            value={levels[1]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 0 ? "--rating" : ""
            }`}
            onClick={updateDifficulty}
            value={levels[0]}
          />
        </div>
        <button
          className="Flashcards__btns__next"
          key={uuidv4()}
          onClick={putAwayCard}
        >
          <span className="Flashcards__btn__next__text">Next</span>{" "}
          <img className="Flashcards__btn__next__image" src={img} />
        </button>
      </div>
    </div>
  );
};
