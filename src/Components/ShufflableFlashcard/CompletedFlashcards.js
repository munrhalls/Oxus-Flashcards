import React, { useState } from "react";
import { uuidv4 } from "@firebase/util";
import { countBy, max } from "lodash";
// import { useMobileCheck } from "./../../Hooks/useMobileCheck";

export const CompletedFlashcards = ({ deck }) => {
  const completedFlashcards = deck?.completedFlashcards;
  let count = 0;
  let max = 10;
  let heapToTheRight = 0;
  let marginLeft = 0.25;

  function getNextNum() {
    count++;
    if (count % max === 0) {
      count = 0;
      max -= 1;
      heapToTheRight += 4;
    }
    return count;
  }

  function makeHeap() {
    const multiplier = 1.1 / 2;
    return completedFlashcards.map((card, i) => {
      let nextNum = getNextNum();

      return (
        <div
          key={uuidv4()}
          className="CompletedFlashcards__heapFrame"
          style={{
            top: `${0 - ((nextNum * max) / 10) * multiplier * 1.25}rem`,
            left: `${
              marginLeft + (10 * heapToTheRight + nextNum * multiplier) / 20
            }rem`,
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
        <span className="CompletedFlashcards__title__text">
          COMPLETED CARDS:
        </span>
        <span className="CompletedFlashcards__title__number">
          {completedFlashcards.length}
        </span>
      </h3>
    </div>
  );
};
