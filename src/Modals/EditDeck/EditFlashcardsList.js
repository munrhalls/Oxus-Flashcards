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
    <div className="FormFlashcardslist">
      <div className="FormFlashcardslist__list">
        {flashcards &&
          completedFlashcards &&
          [...flashcards, ...completedFlashcards].map((card, i) => {
            return (
              <div key={uuidv4()} className="FormFlashcardContainer">
                <div className="FormFlashcardContainer__numContainer">
                  <div className="FormFlashcardContainer__numContainer__num">
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
                  <div className="FormFlashcardContainer__elements">
                    <Flashcard key={uuidv4()} flashcard={card} />
                    <div className="FormFlashcardContainer__elements__btns">
                      <button
                        type="button"
                        className="FormFlashcardContainer__elements__btns__btn --edit"
                      >
                        <img
                          className="FormFlashcardContainer__elements__btns__btn__img"
                          src={IMG__EDIT}
                          alt="EDIT"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setisDelConfirmId(card.id);
                        }}
                        className="FormFlashcardContainer__elements__btns__btn --delete"
                      >
                        <img
                          className="FormFlashcardContainer__elements__btns__btn__img"
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
        <div
          onClick={() => setModalOpen("AddFlashcard")}
          className="FormFlashcardContainer --addBtn"
        >
          <button
            type="button"
            className="FormFlashcardContainer__btn --addBtn"
          >
            <img
              className="FormFlashcardContainer__btn__addImg"
              src={IMG__PLUS}
              alt="ADD"
            />
          </button>
          <div className="FormFlashcardContainer__addBtnTextContainer">
            <h6 className="FormFlashcardContainer__addBtnTextContainer__addBtnText">
              ADD NEW FLASHCARD
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
