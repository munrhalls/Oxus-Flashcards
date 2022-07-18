import { uuidv4 } from "@firebase/util";
import React, { useState } from "react";
import { Flashcard } from "./Flashcard";
import img from "./../Assets/right-long-black-arrow.png";

export const Flashcards = ({ flashcards }) => {
  const [current, setCurrent] = useState(1);
  function showNext() {
    if (flashcards.length > current) {
      setCurrent(() => current + 1);
    } else {
      setCurrent(1);
    }
  }
  return (
    <div className="Flashcards">
      {flashcards.map((flashcard) => {
        return flashcard.order === current ? (
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
          <button className="Flashcards__btns__difficulty__instance">
            HARD
          </button>
          <button className="Flashcards__btns__difficulty__instance">
            MEDIUM
          </button>
          <button className="Flashcards__btns__difficulty__instance">
            EASY
          </button>
          <button className="Flashcards__btns__difficulty__instance">
            GOT IT
          </button>
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
