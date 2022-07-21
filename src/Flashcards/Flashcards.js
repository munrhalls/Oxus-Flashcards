import { uuidv4 } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { Flashcard } from "./Flashcard";
import img from "./../Assets/right-long-black-arrow.png";
import { dblClick } from "@testing-library/user-event/dist/click";
import cloneDeep from "lodash.clonedeep";

export const Flashcards = ({ flashcards, setFlashcards }) => {
  const [difficulty, setDifficulty] = useState(3);
  const levels = ["pass", "easy", "medium", "hard"];
  console.log(flashcards);
  function shuffleCard() {
    if (difficulty === 3) {
      // index 0 -> index 3
      const wasFirst = flashcards.shift();
      // index 1 2 3 4 are all - 1
      flashcards.splice(3, 0, wasFirst);
      // in effect 0 is new 4, 4-1 are 0-3
      let updated = cloneDeep(flashcards);
      setFlashcards(updated);
    }
  }
  return (
    <div className="Flashcards">
      <div key={uuidv4()}>
        <div className="Flashcard__number">fcards num</div>
        <Flashcard key={uuidv4()} flashcard={flashcards[0]} />
      </div>
      <div className="Flashcards__btns">
        <div className="Flashcards__btns__difficulty">
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 3 ? "--rating" : ""
            }`}
            onClick={() => setDifficulty(3)}
            value={levels[3]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 2 ? "--rating" : ""
            }`}
            onClick={() => setDifficulty(2)}
            value={levels[2]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 1 ? "--rating" : ""
            }`}
            onClick={() => setDifficulty(1)}
            value={levels[1]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 0 ? "--rating" : ""
            }`}
            onClick={() => setDifficulty(0)}
            value={levels[0]}
          />
        </div>
        <button
          className="Flashcards__btns__next"
          key={uuidv4()}
          onClick={shuffleCard}
        >
          <span className="Flashcards__btn__next__text">Next</span>{" "}
          <img className="Flashcards__btn__next__image" src={img} />
        </button>
      </div>
    </div>
  );
};
