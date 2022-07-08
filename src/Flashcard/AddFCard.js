import React, { useState } from "react";

export const AddFcard = () => {
  const [fcard, setFcard] = useState([{ turned: "", unturned: "" }]);

  function changeTurned() {}
  function changeUnturned() {}

  return (
    <form>
      <div className="Flashcard">
        <div className="Flashcard__turned">
          <input value={fcard.turned} onChange={changeTurned} />
        </div>
        <div className="Flashcard__unturned">
          <input value={fcard.unturned} onChange={changeUnturned} />
        </div>
      </div>
      <input type="submit" value="Submit"></input>
    </form>
  );
};
