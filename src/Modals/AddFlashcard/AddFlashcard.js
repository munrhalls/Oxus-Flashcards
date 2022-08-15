import React, { useState } from "react";
import { Preview } from "./Preview";
import { uuidv4 } from "@firebase/util";
import { FormFlashcard } from "./FormFlashcard";

export const AddFlashcard = ({
  activeDeckId,
  setDecks,
  decks,
  setModalOpen,
}) => {
  const [flashcard, setFlashcard] = useState({
    unturned: { text: "", image: "" },
    turned: { text: "", image: "" },
  });
  const [side, setSide] = useState(false);
  const deck = decks.filter((deck) => activeDeckId === deck.id)[0];

  function turnCard(e) {
    e.preventDefault();
    setSide(() => !side);
  }
  function makeNewFlashcard() {
    let newFlashcard = {
      id: uuidv4(),
      difficulty: 3,
      orderNum:
        deck?.flashcards?.filter((card) => card?.difficulty === 3)?.length || 1,
      unturned: {
        text: flashcard.unturned.text,
        image: flashcard.unturned.image,
      },
      turned: {
        text: flashcard.turned.text,
        image: flashcard.turned.image,
      },
    };
    return newFlashcard;
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newFlashcard = makeNewFlashcard();
    setDecks((decks) =>
      decks.map((deck) => {
        return deck.id === activeDeckId
          ? { ...deck, flashcards: [...deck.flashcards, newFlashcard] }
          : { ...deck };
      })
    );
    resetForm();
    setModalOpen("EditDeck");
  }
  function resetForm() {
    setSide(false);
    setFlashcard({
      unturned: { text: "", image: "" },
      turned: { text: "", image: "" },
    });
  }

  function handleExit(e) {
    e.preventDefault();
    setModalOpen("EditDeck");
  }
  return (
    <div className="FormFlashcard">
      <div className="FormFlashcard__titleRibbon">
        <span className="FormFlashcards__title">Add new flashcard.</span>
      </div>
      <form className="FormFlashcard" onSubmit={handleSubmit}>
        <div className="FormFlashcard__elementsContainer">
          <div className="FormFlashcard__elements">
            <FormFlashcard flashcard={flashcard} side={side} />

            {/* {side ? (
              // <TurnedFlashcard
              //   flashcard={flashcard}
              //   getBase64={getBase64}
              //   setFlashcard={(flashcard) => setFlashcard(flashcard)}
              //   cloneDeep={cloneDeep}
              // />
            ) : (
              <UnturnedFlashcard
              setFlashcard={(flashcard) => setFlashcard(flashcard)}
                flashcard={flashcard}
                getBase64={getBase64}
                cloneDeep={cloneDeep}
              />
            )} */}
          </div>
          <div className="FormFlashcard__frame">
            {side ? (
              <>
                <div className="Flascard__formdeck__frameTitle">
                  TURNED PREVIEW
                </div>
                <Preview src={flashcard.turned.image} />
              </>
            ) : (
              <>
                <div className="Flascard__formdeck__frameTitle">
                  UNTURNED PREVIEW
                </div>
                <Preview src={flashcard.unturned.image} />
              </>
            )}
            <div className="Flashcard__turnBtnContainer">
              <button className="Flashcard__turnBtn" onClick={turnCard}>
                Turn.
              </button>
            </div>
          </div>
        </div>
        <div className="FormFlashcard__submitContainer">
          <button
            onClick={(e) => handleExit(e)}
            className="FormFlashcard__close"
          >
            EXIT
          </button>
          <input className="FormFlashcard__submit" type="submit" value="SAVE" />
        </div>
      </form>
    </div>
  );
};
