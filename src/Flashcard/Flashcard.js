import React, { useState } from "react";

export const Flashcard = () => {
  const [turned, setTurned] = useState(false);

  function turn() {
    console.log(turned);
    setTurned((turned) => !turned);
  }

  return (
    <div className="Flashcard" onClick={() => turn()}>
      {turned ? (
        <div className="Flashcard__turned">TURNED</div>
      ) : (
        <div className="Flashcard__unturned">UNTURNED</div>
      )}
    </div>
  );
};
