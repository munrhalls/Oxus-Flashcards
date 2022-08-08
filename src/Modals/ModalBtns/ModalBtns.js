import { ModalBtn } from "./ModalBtn";
import React from "react";
import useMobileCheck from "../../Hooks/useMobileCheck";

export const ModalBtns = ({ modalOpen, setModalOpen, setactiveDeckId }) => {
  const isMobile = useMobileCheck();

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
      />

      <ModalBtn
        name="EDIT DECK"
        open={modalOpen === "EditDeck"}
        setModalOpen={() => setModalOpen("EditDeck")}
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
