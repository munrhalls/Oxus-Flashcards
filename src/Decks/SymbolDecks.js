import React from "react";
import { SymbolDeck } from "./SymbolDeck";
import { uuidv4 } from "@firebase/util";

export const SymbolDecks = ({ decks }) => {
  return (
    <div className="SymbolDecks">
      {decks.map((deck) => {
        return <SymbolDeck key={uuidv4()} deck={deck} />;
      })}
    </div>
  );
};
