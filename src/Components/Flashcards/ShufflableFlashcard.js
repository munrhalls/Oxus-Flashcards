import { uuidv4 } from "@firebase/util";
import img from "./../../Assets/right-long-black-arrow.png";
import cloneDeep from "lodash.clonedeep";
import React, { useState, useEffect } from "react";
import { Flashcard } from "./Flashcard";
import ResetDeckBtn from "../Deck/ResetDeckBtn";
import DifficultyBtn from "./DifficultyBtn";
import DifficultyBtnsList from "./DifficultyBtnsList";

export const ShufflableFlashcard = ({
  deck,
  shuffleDeckFlashcards,
  mvToCompleted,
  resetDeck,
}) => {
  const [difficulty, setDifficulty] = useState(3);
  const levels = ["hard", "medium", "easy", "pass"];
  let flashcards = deck.flashcards;

  function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function getStartRangeNum() {
    let num = Math.floor(flashcards.length / 5) + 1;
    if (num > 5) return 3 + rndInt(0, 2);
    return num;
  }
  function getMidRangeNum() {
    let num = Math.floor(flashcards.length / 2) + 1;
    if (num > 7) return 6 + rndInt(0, 4);
    return num;
  }
  function getEndRangeNum() {
    let num = Math.floor(flashcards.length - flashcards.length / 3);
    return num;
  }
  function getShuffledNum() {
    if (difficulty === 3) return getStartRangeNum();
    if (difficulty === 2) return getMidRangeNum();
    if (difficulty === 1) return getEndRangeNum();
  }
  function shuffle() {
    if (difficulty === 0) return mvToCompleted(flashcards.shift());
    flashcards.splice(getShuffledNum(), 0, flashcards.shift());
    shuffleDeckFlashcards([...flashcards]);
  }

  return (
    <>
      {flashcards.length > 0 ? (
        <div className="Flashcards">
          <div className="Flashcard__container">
            <h3 className="Flashcard__number">{flashcards.length} cards</h3>
            <Flashcard key={uuidv4()} flashcard={flashcards[0]} />
          </div>

          <div className="Flashcards__btns">
            <h3 className="Flashcards__btns__difficulty__title">DIFFICULTY</h3>
            <div className="Flashcards__btns__difficulty">
              {levels.map((lvlName, index) => {
                let lvlNum = levels.length - 1 - index;
                return (
                  <DifficultyBtn
                    key={uuidv4()}
                    lvlName={lvlName}
                    difficulty={difficulty}
                    setDifficulty={() => setDifficulty(() => lvlNum)}
                    lvlNum={lvlNum}
                  />
                );
              })}
            </div>
            <div
              className="Flashcards__btns__next"
              key={uuidv4()}
              onClick={shuffle}
            >
              <span className="Flashcards__btns__next__text">Next</span>
              <img className="Flashcards__btns__next__image" src={img} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="Flashcards__completedMessage">
            <div className="Flashcards__completedMessage__title">
              Deck completed.
            </div>
          </div>
          <ResetDeckBtn resetDeck={() => resetDeck()} />
        </>
      )}
    </>
  );
};
