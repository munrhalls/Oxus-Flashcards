import React from "react";
import IMG__PLUS from "./../../Assets/plus.png";
import IMG__CARDS from "./../../Assets/cards.png";
import { useGlobal } from "../../Contexts/GlobalProvider";

export const AddDeckBtn = () => {
  const { setModalOpen } = useGlobal();
  
  return (
    <div onClick={() => setModalOpen("AddDeck")} className="AddDeckBtn">
      <button className="AddDeckBtn__btn">ADD NEW DECK</button>
      <img
        className="AddDeckBtn__imgPlus"
        src={IMG__PLUS}
        alt="ADD BUTTON IMAGE."
      />
      <img
        className="AddDeckBtn__imgCards"
        src={IMG__CARDS}
        alt="CARDS IMAGE."
      />
    </div>
  );
};
