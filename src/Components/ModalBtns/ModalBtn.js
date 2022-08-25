import React from "react";
import useMobileCheck from "./../../Hooks/useMobileCheck";
import { useGlobal } from "../../Contexts/GlobalProvider";

export function ModalBtn({ name, icon, open, setActiveDeckId }) {
  const { setModalOpen } = useGlobal();
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
            setActiveDeckId && setActiveDeckId(null);
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
