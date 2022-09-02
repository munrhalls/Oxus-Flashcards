import React, { useEffect, useState } from "react";
import { useGlobal } from "../../../Contexts/GlobalProvider";
import { Form } from "../Form";
import { Preview } from "./Preview";
import { InputsHandler } from "./InputsHandler";
import { makeNewFlashcard } from "./MakeNewFlashcard";
import Loader from "../../Loader/Loader";

export const SetFlashcard = (props) => {
  const [flashcard, setFlashcard] = useState({
    unturned: { text: "", image: "" },
    turned: { text: "", image: "" },
  });
  const [side, setSide] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  let deck = decks.filter((deck) => activeDeckId === deck.id)[0];
  console.log(activeFlashcardId);

  useEffect(() => {
    handleEditedCard();
  });

  function handleEditedCard() {
    if (activeFlashcardId) {
      const activeFlashcard = deck.flashcards.filter(
        (card) => card.id === activeFlashcardId
      )[0];
      setFlashcard(() => activeFlashcard);
    }
  }
  function editCard() {
    let card = deck.flashcards.find((card) => card.id === activeFlashcardId);
    card = flashcard;
    return [...deck.flashcards];
  }
  function addCard() {
    return [...deck.flashcards, makeNewFlashcard(deck, flashcard)];
  }
  function getUpdate() {
    if (activeFlashcardId) return editCard();
    return addCard();
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    let update = getUpdate();
    decks[decks.indexOf(deck)] = {
      ...deck,
      flashcards: update,
    };
    setDecks(() => [...decks]);
    setIsLoading(false);
    resetForm();
    setModalOpen("EditDeck");

    // try {
    //   await DB__setDeck(currentUser.uid, {
    //     ...deck,
    //     flashcards: update,
    //   });
    //   await getDecksFromDBAndUpdateUI(currentUser);
    //   resetForm();
    //   setIsLoading(false);
    //   setModalOpen("EditDeck");
    // } catch (e) {
    //   console.error(e);
    //   setIsLoading(false);
    // }
  }

  function resetForm() {
    setSide(false);
    setActiveFlashcardId(() => null);
    setFlashcard({
      unturned: { text: "", image: "" },
      turned: { text: "", image: "" },
    });
  }

  return (
    <div className="SetFlashcard">
      <form className="Form" onSubmit={handleSubmit}>
        <Loader active={isLoading}>
          <div className="Form__topBar">
            <div className="Form__topBar__line --first">
              <h2 className="Form__topBar__line__title">SET FLASHCARD</h2>
            </div>
            <div className="Form__topBar__line --second">
              <h1 className="Form__topBar__line__deckName">
                DECK: {deck.name}
              </h1>
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
        </Loader>
      </form>
    </div>
  );
};
