import React from "react";
import { Form } from "../Form";
import { useGlobal } from "../../../Contexts/GlobalProvider";

export const DeleteDeck = (props) => {
  const { modalOpen, setModalOpen, decks, setDecks } = useGlobal();

  const { setActiveDeckId, activeDeckId } = props;
  const deck = decks.filter((instance) => instance.id === activeDeckId)[0];

  function handleSubmit(e) {
    e.preventDefault();
    setModalOpen(null);
    setActiveDeckId(null);
    setDecks(() =>
      [...decks].filter((el) => {
        return el.id !== activeDeckId;
      })
    );
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
