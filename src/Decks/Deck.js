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
      <h3 className="Deck__title">INITIAL DECK TITLE</h3>
      <div className="Deck__decks">
        <Flashcards
          flashcards={flashcards}
          setFlashcards={setFlashcards}
          completedFlashcards={completedFlashcards}
          setCompletedFlashcards={setCompletedFlashcards}
        />
        <CompletedFlashcards completedFlashcards={completedFlashcards} />
      </div>
    </div>
  );
};
