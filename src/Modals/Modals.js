import React from "react";
import { AddFlashcard } from "./AddFlashcard/AddFlashcard";
import { AddDeck } from "./AddDeck/AddDeck";
import { EditDeck } from "./EditDeck/EditDeck";
import { DeleteDeck } from "./DeleteDeck/DeleteDeck";

export const Modals = ({
  modalOpen,
  setModalOpen,
  decks,
  setDecks,
  activeDeckId,
  setactiveDeckId,
}) => {
  return (
    <div className="Modals">
      {modalOpen === "AddFlashcard" && (
        <AddFlashcard
          setModalOpen={setModalOpen}
          activeDeckId={activeDeckId}
          decks={decks}
          setDecks={setDecks}
        />
      )}

      {modalOpen === "EditFlashcard" && <div>EDIT FLASHCARDMODAL</div>}

      {modalOpen === "DeleteDeck" && (
        <DeleteDeck
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setactiveDeckId={setactiveDeckId}
          activeDeckId={activeDeckId}
          decks={decks}
          setDecks={setDecks}
        />
      )}

      {modalOpen === "AddDeck" && (
        <AddDeck
          decks={decks}
          setDecks={setDecks}
          setModalOpen={setModalOpen}
          setactiveDeckId={setactiveDeckId}
        />
      )}

      {modalOpen === "EditDeck" && (
        <EditDeck
          setModalOpen={setModalOpen}
          activeDeckId={activeDeckId}
          decks={decks}
          setDecks={setDecks}
        />
      )}
    </div>
  );
};
