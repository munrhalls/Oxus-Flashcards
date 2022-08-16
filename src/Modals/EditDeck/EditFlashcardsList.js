import React, { useState } from "react";
import { Flashcard } from "../../Flashcards/Flashcard";
import { DeleteFlashcard } from "./DeleteFlashcard";
import { uuidv4 } from "@firebase/util";
import IMG__CLOSE from "./../../Assets/close.png";
import IMG__PLUS from "./../../Assets/plus.png";
import IMG__EDIT from "./../../Assets/edit.png";

export function EditFlashcardsList({
  editedDeck,
  setEditedDeck,
  setModalOpen,
}) {
  const [isDelConfirmId, setisDelConfirmId] = useState(null);
  let flashcards = editedDeck?.flashcards;
  let completedFlashcards = editedDeck?.completedFlashcards;

  function deleteCard(delId) {
    setEditedDeck({
      ...editedDeck,
      flashcards: flashcards.filter((card) => card.id !== delId),
      completedFlashcards: completedFlashcards.filter(
        (card) => card.id !== delId
      ),
    });
  }

  return (
    <div className="FormFlashcardsList">
      <div className="FormFlashcardsList__list">
        <div
          onClick={() => setModalOpen("AddFlashcard")}
          className="FormFlashcardsList__instanceContainer --addBtn"
        >
          <button
            type="button"
            className="FormFlashcardsList__instanceContainer__btn --addBtn"
          >
            <img
              className="FormFlashcardsList__instanceContainer__btn__addImg"
              src={IMG__PLUS}
              alt="ADD"
            />
          </button>
          <div className="FormFlashcardsList__instanceContainer__addBtnTextContainer">
            <h6 className="FormFlashcardsList__instanceContainer__addBtnTextContainer__addBtnText">
              ADD NEW FLASHCARD
            </h6>
          </div>
        </div>
        {flashcards &&
          completedFlashcards &&
          [...flashcards, ...completedFlashcards].map((card, i) => {
            return (
              <div
                key={uuidv4()}
                className="FormFlashcardsList__instanceContainer"
              >
                <div className="FormFlashcardsList__instanceContainer__numContainer">
                  <div className="FormFlashcardsList__instanceContainer__numContainer__num">
                    {i}
                  </div>
                </div>

                {isDelConfirmId && isDelConfirmId === card.id ? (
                  <DeleteFlashcard
                    deleteCard={deleteCard}
                    setisDelConfirmId={setisDelConfirmId}
                    delId={card.id}
                  />
                ) : (
                  <div className="FormFlashcardsList__instanceContainer__elements">
                    <Flashcard key={uuidv4()} flashcard={card} />
                    <div className="FormFlashcardsList__instanceContainer__elements__btns">
                      <button
                        type="button"
                        className="FormFlashcardsList__instanceContainer__elements__btns__btn --edit"
                      >
                        <img
                          className="FormFlashcardsList__instanceContainer__elements__btns__btn__img"
                          src={IMG__EDIT}
                          alt="EDIT"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setisDelConfirmId(card.id);
                        }}
                        className="FormFlashcardsList__instanceContainer__elements__btns__btn --delete"
                      >
                        <img
                          className="FormFlashcardsList__instanceContainer__elements__btns__btn__img"
                          src={IMG__CLOSE}
                          alt="DELETE"
                        />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
