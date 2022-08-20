import { ModalBtn } from "./ModalBtn";
import React from "react";
import IMG__EDIT from "./../Assets/edit.png";
import IMG__CLOSE from "./../Assets/close.png";
import IMG__DOOR from "./../Assets/opened-door-aperture.png";

export const ModalBtns = ({ modalOpen, setModalOpen, setActiveDeckId }) => {
  return (
    <div className="ModalBtns">
      <ModalBtn
        name="EXIT"
        setModalOpen={() => setModalOpen(null)}
        setActiveDeckId={() => setActiveDeckId(null)}
        icon={IMG__DOOR}
      />
      <ModalBtn
        name="EDIT"
        open={modalOpen === "EditDeck"}
        setModalOpen={() => setModalOpen("EditDeck")}
        icon={IMG__EDIT}
      />
      <ModalBtn
        name="DELETE"
        open={modalOpen === "DeleteDeck"}
        setModalOpen={() => setModalOpen("DeleteDeck")}
        icon={IMG__CLOSE}
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
