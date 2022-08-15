import React, { useState } from "react";
import { Preview } from "./Preview";
import { uuidv4 } from "@firebase/util";
import { InputsHandler } from "./InputsHandler";

export const AddFlashcard = ({
  activeDeckId,
  setDecks,
  decks,
  setModalOpen,
}) => {
  const [flashcard, setFlashcard] = useState({
    unturned: { text: "", image: "" },
    turned: { text: "", image: "" },
  });
  const [side, setSide] = useState(false);
  const deck = decks.filter((deck) => activeDeckId === deck.id)[0];

  function makeNewFlashcard() {
    let newFlashcard = {
      id: uuidv4(),
      difficulty: 3,
      orderNum:
        deck?.flashcards?.filter((card) => card?.difficulty === 3)?.length || 1,
      unturned: {
        text: flashcard.unturned.text,
        image: flashcard.unturned.image,
      },
      turned: {
        text: flashcard.turned.text,
        image: flashcard.turned.image,
      },
    };
    return newFlashcard;
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newFlashcard = makeNewFlashcard();
    setDecks((decks) =>
      decks.map((deck) => {
        return deck.id === activeDeckId
          ? { ...deck, flashcards: [...deck.flashcards, newFlashcard] }
          : { ...deck };
      })
    );
    resetForm();
    setModalOpen("EditDeck");
  }
  function resetForm() {
    setSide(false);
    setFlashcard({
      unturned: { text: "", image: "" },
      turned: { text: "", image: "" },
    });
  }

  function handleExit(e) {
    e.preventDefault();
    setModalOpen("EditDeck");
  }
  return (
    <div className="AddFlashcard">
      <form className="Form" onSubmit={handleSubmit}>
        <div className="FormDeck__topBar">
          <div className="FormDeck__topBar__line --first">
            <h2 className="FormDeck__topBar__line__title">ADD FLASHCARD</h2>
          </div>
          <div className="FormDeck__topBar__line --second">
            <h1 className="FormDeck__topBar__line__deckName">
              DECK: {deck.name}
            </h1>
          </div>
        </div>
        <div className="FormDeck__">
          <InputsHandler flashcard={flashcard} side={side} />
          <Preview
            side={side}
            setSide={(side) => setSide(side)}
            flashcard={flashcard}
          />
        </div>

        <div className="FormFlashcard__submitContainer">
          <button
            onClick={(e) => handleExit(e)}
            className="FormFlashcard__close"
          >
            EXIT
          </button>
          <input className="FormFlashcard__submit" type="submit" value="SAVE" />
        </div>
      </form>
    </div>
  );
};
