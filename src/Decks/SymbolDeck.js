import React from "react";
import img from "./../Assets/cards.png";
import cloneDeep from "lodash.clonedeep";

export const SymbolDeck = ({ deck, setactiveDeckId }) => {
  return (
    <div className="SymbolDecks__deck" onClick={() => setactiveDeckId(deck.id)}>
      <img className="SymbolDecks__deck__img" src={img} />
      <h3 className="SymbolDecks__deck__title">{deck.name}</h3>
      <button className="SymbolDecks__openDeckBtn">Open deck</button>
    </div>
  );
};
