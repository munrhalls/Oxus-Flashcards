import { ModalBtn } from "./ModalBtn";
import React from "react";
import IMG_EDIT from "./../../Assets/edit.png";
import IMG_CLOSE from "./../../Assets/close.png";

export const ModalBtns = ({ modalOpen, setModalOpen, setactiveDeckId }) => {
  return (
    <div className="ModalBtns">
      <ModalBtn
        name="EXIT"
        setModalOpen={() => setModalOpen(null)}
        setactiveDeckId={() => setactiveDeckId(null)}
      />
      <ModalBtn
        name="DELETE DECK"
        open={modalOpen === "DeleteDeck"}
        setModalOpen={() => setModalOpen("DeleteDeck")}
        icon={IMG_CLOSE}
      />

      <ModalBtn
        name="EDIT DECK"
        open={modalOpen === "EditDeck"}
        setModalOpen={() => setModalOpen("EditDeck")}
        icon={IMG_EDIT}
      />
    </div>
  );
};

function undefined({ setModalOpen, setactiveDeckId }) {
  return (
    <button
      className="ModalBtns__container__btn"
      onClick={() => {
        setModalOpen(null);
        setactiveDeckId(null);
      }}
    >
      EXIT
    </button>
  );
}
