import { uuidv4 } from "@firebase/util";

import React from "react";
import { SymbolDeck } from "./SymbolDeck";
import { AddDeckBtn } from "../ModalBtns/AddDeckBtn";

export const SymbolDecks = ({ decks, setModalOpen, setActiveDeckId }) => {
  return (
    <div className="SymbolDecks">
      <AddDeckBtn setModalOpen={setModalOpen} />
      {decks.length ? (
        decks.map((deck) => {
          return (
            <SymbolDeck
              key={uuidv4()}
              deck={deck}
              setActiveDeckId={setActiveDeckId}
            />
          );
        })
      ) : (
        <div className="SymbolDecks__noDecks">
          <div className="SymbolDecks__noDecksMsg">
            <h1 className="SymbolDecks__noDecksMsg">
              Decks repository is empty.
            </h1>
          </div>
          <button
            className="SymbolDecks__noDecksMsg__addBtn"
            onClick={() => setModalOpen("AddDeck")}
          >
            ADD NEW DECK
          </button>
        </div>
      )}
    </div>
  );
};
