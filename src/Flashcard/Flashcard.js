import React, { useState } from "react";

export const Flashcard = ({ flashcard }) => {
  const [turned, setTurned] = useState(false);

  function turn() {
    setTurned((turned) => !turned);
  }

  return (
    <div className="Flashcard" onClick={() => turn()}>
      {turned ? (
        <div className="Flashcard__turned">{flashcard.turned.text}</div>
      ) : (
        <div className="Flashcard__unturned">{flashcard.unturned.text}</div>
      )}
    </div>
  );
};
