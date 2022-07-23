import React from "react";

export const AddDeck = ({ decks }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="AddDeck">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="AddDeck__submit" type="submit" />
      </form>
    </div>
  );
};
