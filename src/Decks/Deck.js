import React from "react";
import { Flashcards } from "../Flashcards/Flashcards";
import { CompletedFlashcards } from "../Flashcards/CompletedFlashcards";

export const Deck = ({
  flashcards,
  setFlashcards,
  completedFlashcards,
  setCompletedFlashcards,
}) => {
  return (
    <div className="Deck">
      <Flashcards
        flashcards={flashcards}
        setFlashcards={(flashcards) => setFlashcards(flashcards)}
        completedFlashcards={completedFlashcards}
        setCompletedFlashcards={(completedFlashcards) =>
          setCompletedFlashcards(completedFlashcards)
        }
      />
      <CompletedFlashcards completedFlashcards={completedFlashcards} />
    </div>
  );
};
