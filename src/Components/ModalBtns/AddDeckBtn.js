import React from "react";
import IMG__PLUS from "./../../Assets/plus.png";
import IMG__CARDS from "./../../Assets/cards.png";
import { useGlobal } from "../../Contexts/GlobalProvider";
import { uuidv4 } from "@firebase/util";

export const AddDeckBtn = () => {
  const { setModalOpen } = useGlobal();

  return (
    <div onClick={() => setModalOpen("AddDeck")} className="AddDeckBtn">
      <button className="AddDeckBtn__btn">ADD NEW DECK</button>
      {/* map 9 imgs */}
      {/* begin kind of far left horiz, center vert */}
      {/* on every iteration, place next item diagonally to the top right */}
      {/* enable alteration every 3 iterations */}
      {/* every alteration, transform size to bigger symmetrically & more top-left away from center */}
      {/* on hover, these will be moving /w keyframes */}
      <img
        className="AddDeckBtn__imgPlus"
        src={IMG__PLUS}
        alt="ADD BUTTON IMAGE."
      />

      {Array(6)
        .fill()
        .map((icon, i) => {
          i++;
          return (
            <img
              style={{
                bottom: `${8 + 1 / i / 1 / i}rem`,
                left: `${-5 + 2.25 * i}rem`,
                transform: `rotate(${-30 + i * 15}deg)`,
              }}
              key={uuidv4()}
              className="AddDeckBtn__imgCards"
              src={IMG__CARDS}
              alt="CARDS IMAGE."
            />
          );
        })}
    </div>
  );
};
