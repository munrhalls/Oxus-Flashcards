import { ModalBtn } from "./ModalBtn";
import React from "react";
import IMG__EDIT from "./../../Assets/edit.png";
import IMG__CLOSE from "./../../Assets/close.png";
import IMG__DOOR from "./../../Assets/opened-door-aperture.png";
import { useGlobal } from "../../Contexts/GlobalProvider";

export const ModalBtns = ({ setActiveDeckId }) => {
  const { modalOpen, menuOpen } = useGlobal();
  return (
    <div className="ModalBtns">
      <ModalBtn
        name="EXIT"
        deck={null}
        setActiveDeckId={() => setActiveDeckId(null)}
        icon={IMG__DOOR}
        disabled={menuOpen}
      />

      <ModalBtn
        name="EDIT"
        open={modalOpen === "EditDeck"}
        deck="EditDeck"
        icon={IMG__EDIT}
        disabled={menuOpen}
      />
      <ModalBtn
        name="DELETE"
        open={modalOpen === "DeleteDeck"}
        deck="DeleteDeck"
        icon={IMG__CLOSE}
        disabled={menuOpen}
      />
    </div>
  );
};

function undefined({ setModalOpen, setActiveDeckId }) {
  return (
    <button
      className="ModalBtns__container__btn"
      onClick={() => {
        setModalOpen(null);
        setActiveDeckId(null);
      }}
    >
      EXIT
    </button>
  );
}
