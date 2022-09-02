import React from "react";
import { Form } from "../Form";
import { useGlobal } from "../../../Contexts/GlobalProvider";

export const DeleteDeck = (props) => {
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

    if (!currentUser)
      return (function () {
        setActiveDeckId(null);
        setDecks(() =>
          [...decks].filter((el) => {
            return el.id !== activeDeckId;
          })
        );
        setModalOpen(null);
      })();

    try {
      await DB_deleteDeck(currentUser, activeDeckId);
      await getDecksFromDBAndUpdateUI(currentUser);
      setActiveDeckId(null);
      setModalOpen(null);
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <div>
      <div className="DeleteDeck">
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
      </div>
    </div>
  );
};
