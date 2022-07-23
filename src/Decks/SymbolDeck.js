import React from "react";
import img from "./../Assets/cards.png";

export const SymbolDeck = ({ deck }) => {
  return (
    <div className="SymbolDecks__deck">
      <img className="SymbolDecks__deck__img" src={img} />
      <h3 className="SymbolDecks__deck__title">{deck.name}</h3>
    </div>
  );
};
