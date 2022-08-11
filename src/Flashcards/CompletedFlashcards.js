import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";
// import { useMobileCheck } from "./../Hooks/useMobileCheck";

export const CompletedFlashcards = ({ completedFlashcards }) => {
  function makeHeap() {
    return completedFlashcards.map((card, i) => {
      const multiplier = 5.25;
      const nextHeap = i % 14 === 0 ? 0 - i * multiplier : 0;
      return (
        <div
          key={uuidv4()}
          className="CompletedFlashcards__heapFrame"
          style={{
            top: `${0 - i * multiplier * 1.25}px`,
            right: `${0 - (i * multiplier) / 3 + nextHeap}px`,
          }}
        ></div>
      );
    });
  }
  const heapEffect = makeHeap();
  return (
    <div className="CompletedFlashcards">
      <div className="CompletedFlashcards__frontCard">
        {completedFlashcards.map((card) => {
          return (
            <div
              key={uuidv4()}
              className="CompletedFlashcards__frontCard__container"
            >
              <span className="CompletedFlashcards__frontCard__container__text">
                {card.unturned.text}
              </span>
              <div className="CompletedFlashcards__CSScheckMark"></div>
            </div>
          );
        })}
        {heapEffect}
      </div>
      <h3 className="CompletedFlashcards__title">
        COMPLETED CARDS:
        <span className="CompletedFlashcards__title__number">
          {completedFlashcards.length}
        </span>
      </h3>
    </div>
  );
};
