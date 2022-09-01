import React, { useState } from "react";
import { Preview } from "./Preview";
import { uuidv4 } from "@firebase/util";
import { InputsHandler } from "./InputsHandler";
import IMG__EDIT from "./../../../Assets/edit.png";
import IMG__CLOSE from "./../../../Assets/close.png";
import IMG__SAVE from "./../../../Assets/save.png";
import { Form } from "../Form";
import { useGlobal } from "../../../Contexts/GlobalProvider";

export const AddFlashcard = (props) => {
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
  } = useGlobal();
  let deck = decks.filter((deck) => activeDeckId === deck.id)[0];

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
  async function handleSubmit(e) {
    e.preventDefault();

    if (!currentUser)
      return (function () {
        decks[decks.indexOf(deck)] = {
          ...deck,
          flashcards: [...deck.flashcards, makeNewFlashcard()],
        };
        setDecks(() => [...decks]);
        setModalOpen("EditDeck");
      })();

    try {
      await DB__setDeck(currentUser.uid, {
        ...deck,
        flashcards: [...deck.flashcards, makeNewFlashcard()],
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
    <div className="AddFlashcard">
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form__topBar">
          <div className="Form__topBar__line --first">
            <h2 className="Form__topBar__line__title">ADD FLASHCARD</h2>
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
