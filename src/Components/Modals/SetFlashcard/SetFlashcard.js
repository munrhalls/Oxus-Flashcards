import React, { useEffect, useState } from "react";
import { useGlobal } from "../../../Contexts/GlobalProvider";
import { Form } from "../Form";
import { Preview } from "./Preview";
import { InputsHandler } from "./InputsHandler";
import { makeNewFlashcard } from "./MakeNewFlashcard";

export const SetFlashcard = (props) => {
  const [flashcard, setFlashcard] = useState({
    unturned: { text: "", image: "" },
    turned: { text: "", image: "" },
  });
  const [side, setSide] = useState(false);
  const { activeDeckId } = props;
  const {
    setModalOpen,
    getDecksFromDBAndUpdateUI,
    DB__setDeck,
    currentUser,
    decks,
    setDecks,
    activeFlashcardId,
    setActiveFlashcardId,
  } = useGlobal();

  // currentUser true
  // currentUser false
  // add new flashcard
  // edit current flashcard
  // simplest handling?

  // update =
  // activeflashcard true? -> flashcards = accordingly
  // no? -> accordingly
  // variable to handleSubmit
  // must always reset activeFlashcardId
  useEffect(() => {});

  let deck = decks.filter((deck) => activeDeckId === deck.id)[0];
  async function handleSubmit(e) {
    e.preventDefault();

    let update = [...deck.flashcards, makeNewFlashcard(deck, flashcard)];

    if (!currentUser)
      return (function () {
        decks[decks.indexOf(deck)] = {
          ...deck,
          flashcards: update,
        };
        setDecks(() => [...decks]);
        setModalOpen("EditDeck");
      })();

    try {
      await DB__setDeck(currentUser.uid, {
        ...deck,
        flashcards: update,
      });
      await getDecksFromDBAndUpdateUI(currentUser);
    } catch (e) {
      console.error(e);
    }

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

  return (
    <div className="SetFlashcard">
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form__topBar">
          <div className="Form__topBar__line --first">
            <h2 className="Form__topBar__line__title">SET FLASHCARD</h2>
          </div>
          <div className="Form__topBar__line --second">
            <h1 className="Form__topBar__line__deckName">DECK: {deck.name}</h1>
          </div>
        </div>
        <div className="InputsAndPreviewContainer">
          <InputsHandler
            className="InputsHandler"
            setFlashcard={(flashcard) => setFlashcard(flashcard)}
            flashcard={flashcard}
            side={side}
          />
          <Preview
            className="Preview"
            side={side}
            setSide={(side) => setSide(side)}
            flashcard={flashcard}
          />
        </div>

        <Form.ExitBtns toModal="EditDeck" />
      </form>
    </div>
  );
};
