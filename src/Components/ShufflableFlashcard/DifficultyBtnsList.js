import img from "./../../Assets/right-long-black-arrow.png";
import React from "react";
import DifficultyBtn from "./DifficultyBtn";
import { uuidv4 } from "@firebase/util";

export default function DifficultyBtnsList({
  children,
  levels,
  difficulty,
  setDifficulty,
}) {
  return (
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
              setDifficulty={() => setDifficulty(lvlNum)}
              lvlNum={lvlNum}
            />
          );
        })}
      </div>
      {/* <div
        className="Flashcards__btns__next"
        key={uuidv4()}
        onClick={shuffleDeck}
      >
        <span className="Flashcards__btns__next__text">Next</span>
        <img className="Flashcards__btns__next__image" src={img} />
      </div> */}
      {children}
    </div>
  );
}
