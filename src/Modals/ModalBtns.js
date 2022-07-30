import React from "react";

export const ModalBtns = ({ modalOpen, setModalOpen, setactiveDeckId }) => {
  return (
    <div className="Modal__containerBtns">
      <div className="Modal__containerBtns__container">
        <button
          className="Modal__containerBtns__container__btn"
          onClick={() => {
            setModalOpen(null);
            setactiveDeckId(null);
          }}
        >
          EXIT
        </button>
      </div>

      <div className="Modal__containerBtns__container">
        <button
          className="Modal__containerBtns__container__btn"
          onClick={() => setModalOpen("AddDeck")}
        >
          ADD DECK
        </button>
      </div>

      <div
        className={`Modal__containerBtns__container ${
          modalOpen === "DeleteDeck" ? " --open" : ""
        }`}
      >
        <button
          className={`Modal__containerBtns__container__btn ${
            modalOpen === "DeleteDeck" ? " --open" : ""
          }`}
          onClick={() => setModalOpen("DeleteDeck")}
        >
          DELETE DECK
        </button>
      </div>

      <div
        className={`Modal__containerBtns__container ${
          modalOpen === "EditDeck" ? " --open" : ""
        }`}
        onClick={() => setModalOpen("EditDeck")}
      >
        <button
          className={`Modal__containerBtns__container__btn ${
            modalOpen === "EditDeck" ? " --open" : ""
          }`}
        >
          EDIT DECK
        </button>
      </div>
    </div>
  );
};
