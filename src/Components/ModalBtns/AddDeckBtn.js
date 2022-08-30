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

      {Array(16)
        .fill()
        .map((icon, i) => {
          i++;
          return (
            <img
              style={{
                bottom: `${0.5 + i * 1.2}rem`,
                left: `${-6.25 + 0.25 * i * 4.25 + (1 / i) * 5}rem`,
                boxShadow: `0 0 45px 15px rgb(${255}, ${255}, ${255})`,
                borderRadius: `50%`,
                padding: `0.25rem`,
                transform: `rotateY(${i * 2.5}deg) scale(${1 - i / 12.5})`,
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
