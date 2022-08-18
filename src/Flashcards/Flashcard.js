import React, { useState } from "react";

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
          <div className="Flashcard__turned">
            <div className="Flashcard__text">{flashcard.turned.text}</div>
          </div>
          {turnedImg}
        </>
      ) : (
        <>
          <div className="Flashcard__unturned">
            <div className="Flashcard__text">{flashcard.unturned.text}</div>
          </div>
          {unturnedImg}
        </>
      )}
    </div>
  );
};
