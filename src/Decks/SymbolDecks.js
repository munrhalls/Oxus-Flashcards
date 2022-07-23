import React from "react";
import { SymbolDeck } from "./SymbolDeck";
import { uuidv4 } from "@firebase/util";

export const SymbolDecks = ({ decks, setModalOpen }) => {
  decks = [];
  return (
    <div className="SymbolDecks">
      {decks.length ? (
        decks.map((deck) => {
          return <SymbolDeck key={uuidv4()} deck={deck} />;
        })
      ) : (
        <div className="SymbolDecks__noDecks">
          <div className="SymbolDecks__noDecksMsg">
            <h1 className="SymbolDecks__noDecksMsg">
              Flashcards repository empty.
            </h1>
          </div>
          <button
            className="SymbolDecks__noDecksMsg__addBtn"
            onClick={setModalOpen("AddDeck")}
          >
            ADD NEW DECK
          </button>
        </div>
      )}
    </div>
  );
};
