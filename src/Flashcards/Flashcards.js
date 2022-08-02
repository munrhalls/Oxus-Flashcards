import { uuidv4 } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { Flashcard } from "./Flashcard";
import img from "./../Assets/right-long-black-arrow.png";
import { dblClick } from "@testing-library/user-event/dist/click";
import cloneDeep from "lodash.clonedeep";
import { CompletedFlashcards } from "./CompletedFlashcards";

export const Flashcards = ({
  flashcards,
  setFlashcards,
  setCompletedFlashcards,
  completedFlashcards,
}) => {
  const [difficulty, setDifficulty] = useState(3);
  const levels = ["pass", "easy", "medium", "hard"];
  console.log(flashcards);
  function shuffleHard(flashcards) {
    const wasFirst = flashcards.shift();
    let moveBy = Math.floor(flashcards.length / 3);
    let randomizer = randomIntFromInterval(-2, 0);
    if (flashcards.length > 4) {
      moveBy += randomizer;
    }
    flashcards.splice(moveBy, 0, wasFirst);
  }
  function shuffleMedium(flashcards) {
    const wasFirst = flashcards.shift();
    let moveBy = Math.floor(flashcards.length / 2);
    let randomizer = randomIntFromInterval(-2, 2);
    if (flashcards.length > 4) {
      moveBy += randomizer;
    }
    flashcards.splice(moveBy, 0, wasFirst);
  }
  function shuffleEasy(flashcards) {
    const wasFirst = flashcards.shift();
    let moveBy = flashcards.length - Math.floor(flashcards.length / 3);
    let randomizer = randomIntFromInterval(0, 3);
    if (flashcards.length > 4) {
      moveBy += randomizer;
    }
    flashcards.splice(moveBy, 0, wasFirst);
  }
  function shuffleCard() {
    if (difficulty === 3) {
      shuffleHard(flashcards);
    }
    if (difficulty === 2) {
      shuffleMedium(flashcards);
    }
    if (difficulty === 1) {
      shuffleEasy(flashcards);
    }
    if (difficulty === 0 && flashcards.length) {
      const passCard = flashcards.shift();
      setCompletedFlashcards([...completedFlashcards, passCard]);
    }
    let updated = cloneDeep(flashcards);
    setFlashcards(updated);
  }
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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
