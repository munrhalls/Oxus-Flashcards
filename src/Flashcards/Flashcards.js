import React from "react";
import { Flashcard } from "./Flashcard";

export const Flashcards = ({ flashcards }) => {
  return (
    <div className="Flashcards">
      {flashcards.map((flashcard) => {
        return <Flashcard key={Math.random()} flashcard={flashcard} />;
      })}
    </div>
  );
};
