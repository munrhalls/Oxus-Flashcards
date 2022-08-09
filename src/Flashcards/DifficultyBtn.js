import React from "react";

export default function DifficultyBtn({
  lvlNum,
  lvlName,
  difficulty,
  setDifficulty,
}) {
  return (
    <input
      type="button"
      className={`Flashcards__btns__difficulty__instance ${
        difficulty === lvlNum ? "--rating" : ""
      }`}
      onClick={() => setDifficulty()}
      value={lvlName}
    />
  );
}
