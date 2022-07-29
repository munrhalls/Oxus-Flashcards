import React from "react";
import IMG__EDIT from "./../Assets/edit.png";
import IMG__CLOSE from "./../Assets/close.png";
import IMG__PLUS from "./../Assets/plus.png";

export const ModalBtns = ({ modalOpen, setModalOpen, setactiveDeckId }) => {
  return (
    <div className="Modal__containerBtns">
      <div className="Modal__containerBtns__container">
        <button
          className="Modal__containerBtns__container__btn"
          onClick={() => setactiveDeckId(null)}
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
      <div className="Modal__containerBtns__container">
        <button
          className="Modal__containerBtns__container__btn"
          onClick={() => setModalOpen("DeleteDeck")}
        >
          DELETE DECK
        </button>
      </div>
      <div
        className={`Modal__containerBtns__container ${
          modalOpen === "EditDeck" && " --open"
        }`}
      >
        <button
          className={`Modal__containerBtns__container__btn ${
            modalOpen === "EditDeck" && " --open"
          }`}
          onClick={() => setModalOpen("EditDeck")}
        >
          EDIT DECK
        </button>
      </div>
    </div>
  );
};
