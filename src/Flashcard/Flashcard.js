import React, { useState } from "react";

export const Flashcard = ({ fcard }) => {
  const [turned, setTurned] = useState(false);

  function turn() {
    setTurned((turned) => !turned);
  }

  return (
    <div className="Flashcard" onClick={() => turn()}>
      {turned ? (
        <div className="Flashcard__turned">{fcard.turned.text}</div>
      ) : (
        <div className="Flashcard__unturned">{fcard.unturned.text}</div>
      )}
    </div>
  );
};
