import React, { useEffect, useState } from "react";
import { Flashcards } from "../Flashcards/Flashcards";
import { CompletedFlashcards } from "../Flashcards/CompletedFlashcards";

export const Deck = ({ activeDeckId, setDecks, decks }) => {
  const activeDeck = decks.filter((deck) => deck.id === activeDeckId)[0];

  function shuffleDeckFlashcards(flashcards) {
    setDecks((decks) => {
      return decks.map((deck) => {
        return deck.id === activeDeckId
          ? { ...deck, flashcards: flashcards }
          : deck;
      });
    });
  }
  function moveDeckFlashcardToCompleted(completedFlashcards) {
    setDecks((decks) => {
      return decks.map((deck) => {
        return deck.id === activeDeckId
          ? { ...deck, completedFlashcards: completedFlashcards }
          : deck;
      });
    });
  }
  return (
    <div className="Deck">
      <h3 className="Deck__title">DECK: {activeDeck.name}.</h3>
      <div className="Deck__decks">
        <Flashcards
          flashcards={activeDeck.flashcards}
          completedFlashcards={activeDeck.completedFlashcards}
          shuffleDeckFlashcards={shuffleDeckFlashcards}
          moveDeckFlashcardToCompleted={moveDeckFlashcardToCompleted}
        />
        <CompletedFlashcards
          completedFlashcards={activeDeck.completedFlashcards}
        />
      </div>
    </div>
  );
};
