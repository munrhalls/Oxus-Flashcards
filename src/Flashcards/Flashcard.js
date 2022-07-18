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
    <div className="Flashcard" onClick={() => turn()}>
      {turned ? (
        <>
          <div className="Flashcard__turned">
            <span className="Flashcard__text">{flashcard.turned.text}</span>
          </div>
          {turnedImg}
        </>
      ) : (
        <>
          <div className="Flashcard__unturned">
            <span className="Flashcard__text">{flashcard.unturned.text}</span>
          </div>
          {unturnedImg}
        </>
      )}
    </div>
  );
};
