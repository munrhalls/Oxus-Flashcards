import React from "react";

export function ModalBtn({ name, open, setModalOpen, setactiveDeckId }) {
  return (
    <div className="ModalBtns__container">
      <button
        className="ModalBtns__container__btn"
        onClick={() => {
          setModalOpen("DeleteDeck");
          {
            setactiveDeckId && setactiveDeckId(null);
          }
        }}
      >
        {name}
      </button>
    </div>
  );
}
