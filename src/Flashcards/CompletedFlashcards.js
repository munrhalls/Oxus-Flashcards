import React, { useState } from "react";

export const CompletedFlashcards = ({ completedFlashcards }) => {
  function makeHeap() {
    return completedFlashcards.map((card, i) => {
      return (
        <>
          <div
            className="CompletedFlashcards__heapFrame"
            style={{ top: `${0 - i * 5.25}px`, right: `${0 - i * 5.5}px` }}
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
            <div className="CompletedFlashcards__frontCard__container">
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
