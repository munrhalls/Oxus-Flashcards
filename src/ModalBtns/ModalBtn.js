import React from "react";
import useMobileCheck from "../Hooks/useMobileCheck";

export function ModalBtn({ name, icon, open, setModalOpen, setactiveDeckId }) {
  const isMobile = useMobileCheck();
  return (
    <div className={`ModalBtns__container --${name} ${open ? " --open" : ""}`}>
      <button
        className={`ModalBtns__container__btn --${name} ${
          open ? " --open" : ""
        }`}
        onClick={() => {
          setModalOpen();
          {
            setactiveDeckId && setactiveDeckId(null);
          }
        }}
      >
        {!isMobile && (
          <span className={`ModalBtns__container__btn__text --${name}`}>
            {name}
          </span>
        )}
        {icon && (
          <img
            src={icon}
            className={`ModalBtns__container__btn__icon --${name}`}
            alt={`Icon: ${name}`}
          />
        )}
      </button>
    </div>
  );
}
