import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";

export const CompletedFlashcards = ({ completedFlashcards }) => {
  function makeHeap() {
    return completedFlashcards.map((card, i) => {
      const multiplier = completedFlashcards.length > 10 ? 2.5 : 5.25;
      return (
        <>
          <div
            key={uuidv4()}
            className="CompletedFlashcards__heapFrame"
            style={{
              top: `${0 - i * multiplier}px`,
              right: `${0 - i * multiplier}px`,
            }}
          ></div>
        </>
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
        COMPLETED CARDS:{" "}
        <span className="CompletedFlashcards__title__number">
          {completedFlashcards.length}
        </span>
      </h3>
    </div>
  );
};
