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
        {!isMobile && name}
        {icon && <img src={icon} alt={`Icon: ${name}`} />}
      </button>
    </div>
  );
}
