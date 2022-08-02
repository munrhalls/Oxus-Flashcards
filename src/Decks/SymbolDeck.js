import React from "react";
import img from "./../Assets/cards.png";

export const SymbolDeck = ({ deck, setActiveDeck }) => {
  return (
    <div
      className="SymbolDecks__deck"
      onClick={() => setActiveDeck(() => deck)}
    >
      <img className="SymbolDecks__deck__img" src={img} />
      <h3 className="SymbolDecks__deck__title">{deck.name}</h3>
      <button className="SymbolDecks__openDeckBtn">Open deck</button>
    </div>
  );
};
