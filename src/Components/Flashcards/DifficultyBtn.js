import React from "react";

export default function DifficultyBtn({
  lvlNum,
  lvlName,
  difficulty,
  setDifficulty,
}) {
  return (
    <div
      onClick={() => setDifficulty()}
      className={`Flashcards__btns__difficulty__container ${
        difficulty === lvlNum ? "--rating" : ""
      }`}
    >
      <input
        type="button"
        className={`Flashcards__btns__difficulty__container__instance ${
          difficulty === lvlNum ? "--rating" : ""
        }`}
        value={lvlName}
      />
    </div>
  );
}
