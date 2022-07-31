import React, { useState } from "react";
import cloneDeep from "lodash.clonedeep";
import { Preview } from "./Preview";
import { UnturnedFlashcard } from "./UnturnedFlashcard";
import { TurnedFlashcard } from "./TurnedFlashcard";
import { Flashcards } from "../../Flashcards/Flashcards";
import { uuidv4 } from "@firebase/util";

export const AddFlashcard = ({
  activeDeckId,
  setDecks,
  decks,
  setModalOpen,
}) => {
  const [side, setSide] = useState(false);
  const [turnedImg, setTurnedImg] = useState("");
  const [unturnedImg, setUnturnedImg] = useState("");
  const [flashcard, setFlashcard] = useState({
    unturned: { text: "", image: unturnedImg },
    turned: { text: "", image: turnedImg },
  });
  const deck = decks.filter((deck) => activeDeckId === deck.id)[0];
  function getNumOfLvlHardCards() {
    return (
      deck?.flashcards?.filter((card) => card.difficulty === 3)?.length || 1
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newFlashcard = {
      // id: uuidv4(),
      difficulty: 3,
      orderNum: getNumOfLvlHardCards(deck.flashcards.length),
      unturned: {
        text: flashcard.unturned.text,
        image: flashcard.unturned.image,
      },
      turned: {
        text: flashcard.turned.text,
        image: flashcard.turned.image,
      },
    };
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
    setTurnedImg("");
    setUnturnedImg("");
    setFlashcard({
      unturned: { text: "", image: "" },
      turned: { text: "", image: "" },
    });
  }
  function turnCard(e) {
    e.preventDefault();
    setSide(() => !side);
  }
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
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
            {side ? (
              <TurnedFlashcard
                flashcard={flashcard}
                setTurnedImg={(flashcard) => setTurnedImg(flashcard)}
                getBase64={getBase64}
                setFlashcard={(flashcard) => setFlashcard(flashcard)}
                cloneDeep={cloneDeep}
              />
            ) : (
              <UnturnedFlashcard
                flashcard={flashcard}
                setUnturnedImg={(unturnedImg) => setUnturnedImg(unturnedImg)}
                getBase64={getBase64}
                setFlashcard={(flashcard) => setFlashcard(flashcard)}
                cloneDeep={cloneDeep}
              />
            )}
          </div>
          <div className="FormFlashcard__frame">
            {side ? (
              <>
                <div className="Flascard__formdeck__frameTitle">
                  TURNED PREVIEW
                </div>
                <Preview src={turnedImg} />
              </>
            ) : (
              <>
                <div className="Flascard__formdeck__frameTitle">
                  UNTURNED PREVIEW
                </div>
                <Preview src={unturnedImg} />
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
