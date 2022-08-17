import React, { useEffect, useState } from "react";
import { Flashcards } from "../Flashcards/Flashcards";
import { CompletedFlashcards } from "../Flashcards/CompletedFlashcards";
import IMG__CARDS from "./../Assets/cards.png";

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
  function resetDeck() {
    setDecks(
      decks.map((deck) => {
        if (deck.id !== activeDeckId) return deck;

        return {
          ...activeDeck,
          flashcards: [...activeDeck.completedFlashcards],
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
          <h3 className="Deck__titleContainer__title">{activeDeck.name}.</h3>
        </div>
      </div>
      <div className="Deck__instance">
        <Flashcards
          flashcards={activeDeck.flashcards}
          completedFlashcards={activeDeck.completedFlashcards}
          shuffleDeckFlashcards={shuffleDeckFlashcards}
          moveDeckFlashcardToCompleted={moveDeckFlashcardToCompleted}
          resetDeck={() => resetDeck()}
        />
        <CompletedFlashcards
          completedFlashcards={activeDeck.completedFlashcards}
        />
      </div>
    </div>
  );
};
