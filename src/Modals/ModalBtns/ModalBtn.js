import React from "react";

export function ModalBtn({ name, open, setModalOpen, setactiveDeckId }) {
  return (
    <div className={`ModalBtns__container ${open ? " --open" : ""}`}>
      <button
        className={`ModalBtns__container__btn ${open ? " --open" : ""}`}
        onClick={() => {
          setModalOpen();
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
