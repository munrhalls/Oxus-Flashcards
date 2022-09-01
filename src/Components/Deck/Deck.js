import React, { useEffect, useState } from "react";
import { ShufflableFlashcard } from "../Flashcards/ShufflableFlashcard";
import { CompletedFlashcards } from "../Flashcards/CompletedFlashcards";
import IMG__CARDS from "./../../Assets/cards.png";

export const Deck = ({ activeDeckId, setDecks, decks }) => {
  const deck = decks.filter((deck) => deck.id === activeDeckId)[0];

  function shuffleDeckFlashcards(flashcards) {
    setDecks((decks) => {
      return decks.map((deck) => {
        if (deck.id === activeDeckId)
          return { ...deck, flashcards: flashcards };
        return deck;
      });
    });
  }
  function mvToCompleted(card) {
    setDecks((decks) => {
      return decks.map((deck) => {
        return deck.id === activeDeckId
          ? {
              ...deck,
              completedFlashcards: [...deck.completedFlashcards, card],
            }
          : deck;
      });
    });
  }
  function resetDeck() {
    setDecks(
      decks.map((deck) => {
        if (deck.id !== activeDeckId) return deck;
        return {
          ...deck,
          flashcards: [...deck.completedFlashcards],
          completedFlashcards: [],
        };
      })
    );
  }
  return (
    <div className="Deck">
      <div className="Deck__titleContainer">
        <div className="Deck__titleContainer__metaContainer">
          <h2 className="Deck__titleContainer__metaContainer__metaTitle">
            DECK
          </h2>
          <img
            className="Deck__titleContainer__metaContainer__metaIcon"
            src={IMG__CARDS}
            alt="Cards image."
          />
        </div>
        <div className="Deck__titleContainer__titleContainer">
          <h3 className="Deck__titleContainer__title">{deck.name}.</h3>
        </div>
      </div>
      <div className="Deck__instance">
        <ShufflableFlashcard
          deck={deck}
          shuffleDeckFlashcards={shuffleDeckFlashcards}
          mvToCompleted={mvToCompleted}
          resetDeck={() => resetDeck()}
        />
        <CompletedFlashcards deck={deck} />
      </div>
    </div>
  );
};
