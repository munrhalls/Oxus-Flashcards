import { uuidv4 } from "@firebase/util";
import IMG__LIST from "./../../Assets/to-do-list.png";
import React from "react";
import { SymbolDeck } from "./SymbolDeck";
import { AddDeckBtn } from "../ModalBtns/AddDeckBtn";
import { useGlobal } from "../../Contexts/GlobalProvider";

export const SymbolDecks = ({ decks, setActiveDeckId }) => {
  const { setModalOpen } = useGlobal();

  return (
    <>
      <div className="SymbolDecks__title">
        <img
          className="SymbolDecks__title__icon"
          src={IMG__LIST}
          alt="List icon."
        />
        <h1 className="SymbolDecks__title__text">List of decks</h1>
      </div>

      <div className="SymbolDecks">
        <AddDeckBtn />
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
          </div>
        )}
      </div>
    </>
  );
};
