import React, { useEffect, useState } from "react";
import { Flashcards } from "../Flashcards/Flashcards";
import { CompletedFlashcards } from "../Flashcards/CompletedFlashcards";
import cloneDeep from "lodash.clonedeep";

export const Deck = ({ activeDeck, decks, updateDeckFlashcards }) => {
  return (
    <div className="Deck">
      <h3 className="Deck__title">DECK: {activeDeck.name}.</h3>
      <div className="Deck__decks">
        <Flashcards
          flashcards={activeDeck.flashcards}
          updateDeckFlashcards={updateDeckFlashcards}
        />
        <CompletedFlashcards
          completedFlashcards={activeDeck.completedFlashcards}
        />
      </div>
    </div>
  );
};
