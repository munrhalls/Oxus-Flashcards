import React from "react";

export const ModalBtns = ({ modalOpen, setModalOpen, setactiveDeckId }) => {
  return (
    <div className="ModalBtns">
      <div className="ModalBtns__container">
        <button
          className="ModalBtns__container__btn"
          onClick={() => {
            setModalOpen(null);
            setactiveDeckId(null);
          }}
        >
          EXIT
        </button>
      </div>

      <div className="ModalBtns__container">
        <button
          className="ModalBtns__container__btn"
          onClick={() => setModalOpen("AddDeck")}
        >
          ADD DECK
        </button>
      </div>

      <div
        className={`ModalBtns__container ${
          modalOpen === "DeleteDeck" ? " --open" : ""
        }`}
      >
        <button
          className={`ModalBtns__container__btn ${
            modalOpen === "DeleteDeck" ? " --open" : ""
          }`}
          onClick={() => setModalOpen("DeleteDeck")}
        >
          DELETE DECK
        </button>
      </div>

      <div
        className={`ModalBtns__container ${
          modalOpen === "EditDeck" ? " --open" : ""
        }`}
        onClick={() => setModalOpen("EditDeck")}
      >
        <button
          className={`ModalBtns__container__btn ${
            modalOpen === "EditDeck" ? " --open" : ""
          }`}
        >
          EDIT DECK
        </button>
      </div>
    </div>
  );
};
