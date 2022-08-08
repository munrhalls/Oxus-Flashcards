import React from "react";
import useMobileCheck from "../../Hooks/useMobileCheck";

export function ModalBtn({ name, icon, open, setModalOpen, setactiveDeckId }) {
  const isMobile = useMobileCheck();
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
        {!isMobile && (
          <span className="ModalBtns__container__btn__text">{name}</span>
        )}
        {icon && (
          <img
            src={icon}
            className="ModalBtns__container__btn__icon"
            alt={`Icon: ${name}`}
          />
        )}
      </button>
    </div>
  );
}
