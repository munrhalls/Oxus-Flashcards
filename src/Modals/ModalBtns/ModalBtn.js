import React from "react";

export function ModalBtn({ setModalOpen, setactiveDeckId }) {
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
