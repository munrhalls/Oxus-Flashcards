import React, { useState } from "react";
import { FlashcardsList } from "./FlashcardsList";
import { Form } from "./../Form";
import Loader from "../../Loader/Loader";
import { useGlobal } from "../../../Contexts/GlobalProvider";

export const EditDeck = (props) => {
  const {
    DB__setDeck,
    getDecksFromDBAndUpdateUI,
    currentUser,
    setModalOpen,
    decks,
    setDecks,
  } = useGlobal();
  const { activeDeckId } = props;
  const deck = decks?.filter((instance) => instance?.id === activeDeckId)?.[0];
  const [editedDeck, setEditedDeck] = useState(deck);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (!currentUser)
      return (function () {
        setDecks(() =>
          decks.map((el) => {
            return el.id === deck.id ? { ...editedDeck } : el;
          })
        );
        setIsLoading(false);
        setModalOpen(null);
      })();

    try {
      await DB__setDeck(currentUser.uid, { ...editedDeck });
      await getDecksFromDBAndUpdateUI(currentUser);
      setIsLoading(false);
      setModalOpen(null);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  }

  const edit = {
    editedDeck,
    setEditedDeck: (editedDeck) => setEditedDeck(editedDeck),
  };

  return (
    <div className="EditDeck">
      <Loader active={isLoading}>
        <form className="Form" onSubmit={handleSubmit}>
          <div className="Form__topBar">
            <div className="Form__topBar__line --first">
              <h2 className="Form__topBar__line__title">EDIT DECK</h2>
            </div>
            <div className="Form__topBar__line --second">
              <Form.EditDeckName {...edit} />
            </div>
          </div>
          <FlashcardsList {...edit} />
          <Form.ExitBtns />
        </form>
      </Loader>
    </div>
  );
};
