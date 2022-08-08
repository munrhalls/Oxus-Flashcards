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
        setModalOpen={setModalOpen}
        setactiveDeckId={null}
      />

      {/* <div
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
      </div> */}

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
