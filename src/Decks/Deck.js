import React, { useEffect, useState } from "react";
import { Flashcards } from "../Flashcards/Flashcards";
import { CompletedFlashcards } from "../Flashcards/CompletedFlashcards";

export const Deck = ({ activeDeck, decks, setDecks }) => {
  const deck = decks.filter((deck) => deck.id === activeDeck.id)[0];
  const [flashcards, setFlashcards] = useState(deck.flashcards);
  const [completedFlashcards, setCompletedFlashcards] = useState(
    deck.completedFlashcards
  );
  deck.flashcards = flashcards;
  deck.completedFlashcards = completedFlashcards;
  useEffect(
    () => () => {
      return setDecks(
        decks.map((instance) => {
          if (instance.id === deck.id) {
            return deck;
          } else {
            return instance;
          }
        })
      );
    },
    []
  );

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
