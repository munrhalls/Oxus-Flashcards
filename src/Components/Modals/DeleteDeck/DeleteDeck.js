import React, { useState } from "react";
import { Form } from "../Form";
import Loader from "../../Loader/Loader";
import { useGlobal } from "../../../Contexts/GlobalProvider";

export const DeleteDeck = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    DB_deleteDeck,
    getDecksFromDBAndUpdateUI,
    currentUser,
    modalOpen,
    setModalOpen,
    decks,
    setDecks,
  } = useGlobal();

  const { setActiveDeckId, activeDeckId } = props;
  const deck = decks.filter((instance) => instance.id === activeDeckId)[0];

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (!currentUser)
      return (function () {
        setActiveDeckId(null);
        setDecks(() =>
          [...decks].filter((el) => {
            return el.id !== activeDeckId;
          })
        );
        setIsLoading(false);
        setModalOpen(null);
      })();

    try {
      await DB_deleteDeck(currentUser, activeDeckId);
      await getDecksFromDBAndUpdateUI(currentUser);
      setActiveDeckId(null);
      setModalOpen(null);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  }
  return (
    <div>
      <div className="DeleteDeck">
        <Loader active={isLoading}>
          <form className="Form" onSubmit={handleSubmit}>
            <div className="Form__topBar">
              <div className="Form__topBar__line --first">
                <h2 className="Form__topBar__line__title">DELETE DECK</h2>
              </div>
              <div className="Form__topBar__line --second">
                <h1 className="Form__topBar__line__deckName">
                  TITLE: {deck.name}
                </h1>
              </div>
            </div>
            <Form.ConfirmAndDelete id={activeDeckId} />
            <Form.BackBtn />
          </form>
        </Loader>
      </div>
    </div>
  );
};
