import React from "react";
import { AddFlashcard } from "./AddFlashcard/AddFlashcard";
import { AddDeck } from "./AddDeck/AddDeck";
import { EditDeck } from "./EditDeck/EditDeck";
import { DeleteDeck } from "./DeleteDeck/DeleteDeck";

export const Modals = ({
  updateFlashcards,
  modalOpen,
  setModalOpen,
  decks,
  setDecks,
  activeDeckId,
}) => {
  return (
    <div className="Modals">
      {modalOpen === "AddFlashcard" ? (
        <AddFlashcard
          setModalOpen={setModalOpen}
          updateFlashcards={updateFlashcards}
        />
      ) : (
        ""
      )}
      {modalOpen === "EditFlashcard" ? <div>EDIT MODAL</div> : ""}
      {modalOpen === "DeleteDeck" ? (
        <DeleteDeck
          modalOpen={modalOpen}
          activeDeckId={activeDeckId}
          setModalOpen={setModalOpen}
          decks={decks}
          setDecks={setDecks}
        />
      ) : (
        ""
      )}

      {modalOpen === "AddDeck" ? (
        <AddDeck
          decks={decks}
          setDecks={setDecks}
          setModalOpen={setModalOpen}
        />
      ) : (
        ""
      )}

      {modalOpen === "EditDeck" ? (
        <EditDeck
          modalOpen={modalOpen}
          activeDeckId={activeDeckId}
          setModalOpen={setModalOpen}
          decks={decks}
          setDecks={setDecks}
        />
      ) : (
        ""
      )}
    </div>
  );
};
