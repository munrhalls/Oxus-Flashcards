import { uuidv4 } from "@firebase/util";
import img from "./../Assets/right-long-black-arrow.png";
import cloneDeep from "lodash.clonedeep";
import React, { useState, useEffect } from "react";
import { Flashcard } from "./Flashcard";
import DifficultyBtn from "./DifficultyBtn";

export const Flashcards = ({
  flashcards,
  completedFlashcards,
  shuffleDeckFlashcards,
  moveDeckFlashcardToCompleted,
}) => {
  const [difficulty, setDifficulty] = useState(3);
  const levels = ["pass", "easy", "medium", "hard"];

  function shuffleCard(divideDeckBy, rndFrom, rndTo) {
    let shuffleBy = Math.floor(flashcards.length / divideDeckBy);
    if (flashcards.length > 4)
      shuffleBy += randomIntFromInterval(rndFrom, rndTo);
    flashcards.splice(shuffleBy, 0, flashcards.shift());
  }

  function shuffleDeck() {
    if (difficulty === 3) shuffleCard(3, -2, 0);

    if (difficulty === 2) shuffleCard(2, -2, 2);

    if (difficulty === 1) shuffleCard(3, 0, 3);

    if (difficulty === 0 && flashcards.length)
      moveDeckFlashcardToCompleted([
        ...completedFlashcards,
        flashcards.shift(),
      ]);

    shuffleDeckFlashcards(cloneDeep(flashcards));
  }
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      {flashcards.length > 0 ? (
        <div className="Flashcards">
          <div className="Flashcard__container">
            <div className="Flashcard__number">fcards num</div>
            <Flashcard key={uuidv4()} flashcard={flashcards[0]} />
          </div>
          <div className="Flashcards__btns">
            <div className="Flashcards__btns__difficulty">
              {levels.reverse().map((lvlName, index) => {
                return (
                  <DifficultyBtn
                    key={uuidv4()}
                    lvlName={lvlName}
                    difficulty={difficulty}
                    setDifficulty={() => setDifficulty(() => index)}
                    lvlNum={index}
                  />
                );
              })}
            </div>
            <button
              className="Flashcards__btns__next"
              key={uuidv4()}
              onClick={shuffleDeck}
            >
              <span className="Flashcards__btns__next__text">Next</span>{" "}
              <img className="Flashcards__btns__next__image" src={img} />
            </button>
          </div>
        </div>
      ) : (
        <div className="Flashcards__completedMessage">
          <div className="Flashcards__completedMessage__title">
            Deck completed.
          </div>
        </div>
      )}
    </>
  );
};
