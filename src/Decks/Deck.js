import React, { useEffect, useState } from "react";
import { Flashcards } from "../Flashcards/Flashcards";
import { CompletedFlashcards } from "../Flashcards/CompletedFlashcards";
import cloneDeep from "lodash.clonedeep";

export const Deck = ({ activeDeckId, decks, setDecks }) => {
  const deck = decks.filter((deck) => deck.id === activeDeckId)[0];
  const [flashcards, setFlashcards] = useState(() => deck.flashcards);
  const [completedFlashcards, setCompletedFlashcards] = useState(
    () => deck.completedFlashcards
  );
  deck.flashcards = flashcards;
  deck.completedFlashcards = completedFlashcards;

  return (
    <div className="Deck">
      <h3 className="Deck__title">DECK: {deck.name}.</h3>
      <div className="Deck__decks">
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
    </div>
  );
};
