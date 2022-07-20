import { uuidv4 } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { Flashcard } from "./Flashcard";
import img from "./../Assets/right-long-black-arrow.png";
import { dblClick } from "@testing-library/user-event/dist/click";
import cloneDeep from "lodash.clonedeep";

export const Flashcards = ({ sortedFlashcards, updateFlashcard }) => {
  const [difficulty, setDifficulty] = useState(3);
  const [reviewCount, setReviewCount] = useState(0);
  const [waitIds, setWaitIds] = useState([]);
  const levels = ["pass", "easy", "medium", "hard"];
  var displayNthCard__insteadOfFirst = 0;
  useEffect(() => {
    const cardsInLevel = sortedFlashcards.filter(
      (card) => card.difficulty === sortedFlashcards[0].difficulty
    );
    const difficultyLvl__hasOnlyOneCard = cardsInLevel.length === 1;
    if (difficultyLvl__hasOnlyOneCard) {
      handleWaitLobby(cardsInLevel);
      displayNthCard__insteadOfFirst = waitIds[0] ? waitIds[0].turnesWaited : 0;
      console.log(waitIds);
    }
  }, [sortedFlashcards]);

  function handleWaitLobby(cardsInLevel) {
    const id__ofOnlyCardInLvl = cardsInLevel[0].id;
    if (!isInWaitLobby(id__ofOnlyCardInLvl)) {
      addIdToWaitLobby(id__ofOnlyCardInLvl);
    }
    if (isInWaitLobby(id__ofOnlyCardInLvl)) {
      handleTurnsInWaitLobby(id__ofOnlyCardInLvl);
    }
  }

  function addIdToWaitLobby(newWaitId) {
    let rndTurnsWaitNum = randomIntFromInterval(2, 4);
    setWaitIds([...waitIds, { id: newWaitId, turnesWaited: rndTurnsWaitNum }]);
  }
  function handleTurnsInWaitLobby(id__ofOnlyCardInLvl) {
    let idObj = waitIds.find((instance) => instance.id === id__ofOnlyCardInLvl);
    idObj.turnesWaited = idObj.turnesWaited - 1;
    if (idObj.turnesWaited <= 0) {
      const lobbyIds = waitIds.filter(
        (instance) => instance.id !== id__ofOnlyCardInLvl
      );
      const cloneLobbyIds = cloneDeep(lobbyIds);
      setWaitIds(cloneLobbyIds);
    }
  }
  function isInWaitLobby(id) {
    return waitIds.filter((waitingId) => waitingId.id === id).length > 0
      ? true
      : false;
  }

  function putAwayCard() {
    let wasFirst = sortedFlashcards[0];
    wasFirst.difficulty = difficulty;
    const cardsInLevel = sortedFlashcards.filter(
      (card) => card.difficulty === difficulty
    );
    wasFirst.orderNum = cardsInLevel.length;
    let cloneWasFirst = cloneDeep(wasFirst);
    updateFlashcard(cloneWasFirst);
    setReviewCount(() => reviewCount + 1);
  }

  function updateDifficulty(e) {
    setDifficulty(() => levels.indexOf(e.target.value));
  }
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className="Flashcards">
      <div key={uuidv4()}>
        <div className="Flashcard__number">
          {reviewCount} / {sortedFlashcards.length}
        </div>
        <Flashcard
          key={uuidv4()}
          flashcard={sortedFlashcards[0 + displayNthCard__insteadOfFirst]}
        />
      </div>
      <div className="Flashcards__btns">
        <div className="Flashcards__btns__difficulty">
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 3 ? "--rating" : ""
            }`}
            onClick={updateDifficulty}
            value={levels[3]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 2 ? "--rating" : ""
            }`}
            onClick={updateDifficulty}
            value={levels[2]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 1 ? "--rating" : ""
            }`}
            onClick={updateDifficulty}
            value={levels[1]}
          />
          <input
            type="button"
            className={`Flashcards__btns__difficulty__instance ${
              difficulty === 0 ? "--rating" : ""
            }`}
            onClick={updateDifficulty}
            value={levels[0]}
          />
        </div>
        <button
          className="Flashcards__btns__next"
          key={uuidv4()}
          onClick={putAwayCard}
        >
          <span className="Flashcards__btn__next__text">Next</span>{" "}
          <img className="Flashcards__btn__next__image" src={img} />
        </button>
      </div>
    </div>
  );
};
