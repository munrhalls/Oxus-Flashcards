import { uuidv4 } from "@firebase/util";
import React, { useState } from "react";
import { Flashcard } from "./Flashcard";

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
      <button key={uuidv4()} onClick={showNext}>
        Next
      </button>
    </div>
  );
};
