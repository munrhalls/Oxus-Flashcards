import React, { useState, useRef, useEffect } from "react";
// comment for commit
export const Flashcard = ({ flashcard }) => {
  const [turned, setTurned] = useState(false);

  function turn() {
    setTurned((turned) => !turned);
  }
  let unturnedImg = flashcard.unturned.image ? (
    <img className="Flashcard__image" src={flashcard.unturned.image} />
  ) : (
    ""
  );
  let turnedImg = flashcard.turned.image ? (
    <img className="Flashcard__image" src={flashcard.turned.image} />
  ) : (
    ""
  );
  return (
    <div
      className={`Flashcard ${turned ? "--turned" : "--unturned"}`}
      onClick={() => turn()}
    >
      {turned ? (
        <>
          <h3 className="Flashcard__metaTitle">Flashcard</h3>
          <div className="Flashcard__turned">
            <div className="Flashcard__text">{flashcard.turned.text}</div>
          </div>
          {turnedImg}
        </>
      ) : (
        <>
          <h3 className="Flashcard__metaTitle">Flashcard</h3>
          <div className="Flashcard__unturned">
            <div className="Flashcard__text">{flashcard.unturned.text}</div>
          </div>
          {unturnedImg}
        </>
      )}
    </div>
  );
};
