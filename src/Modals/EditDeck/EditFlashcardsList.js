import React, { useState } from "react";
import { Flashcard } from "../../Flashcards/Flashcard";
import { uuidv4 } from "@firebase/util";
import IMG__CLOSE from "./../../Assets/close.png";
import IMG__PLUS from "./../../Assets/plus.png";
import IMG__EDIT from "./../../Assets/edit.png";

export function EditFlashcardsList({ editedDeck, setEditedDeck }) {
  const [isDelConfirmId, setisDelConfirmId] = useState(null);
  let flashcards = editedDeck.flashcards;
  let completedFlashcards = editedDeck.completedFlashcards;

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
    <div className="Form__manageflashcardslist">
      <div className="Form__manageflashcardslist__list">
        {[...flashcards, ...completedFlashcards].map((card, i) => {
          return (
            <div key={uuidv4()} className="Form__manageflashcardContainer">
              <div className="Form__manageflashcardContainer__numContainer">
                <div className="Form__manageflashcardContainer__numContainer__num">
                  {i}
                </div>
              </div>

              {isDelConfirmId && isDelConfirmId === card.id ? (
                <div className="Form__manageflashcardContainer__deleteContainer">
                  <h3 className="Form__manageflashcardContainer__deleteContainer__question">
                    Are you sure?
                  </h3>
                  <button
                    type="button"
                    onClick={() => deleteCard(card.id)}
                    className="Form__manageflashcardContainer__deleteContainer__btn --delete"
                  >
                    DELETE
                  </button>
                  <button
                    type="button"
                    onClick={() => setisDelConfirmId(null)}
                    className="Form__manageflashcardContainer__deleteContainer__btn --back"
                  >
                    BACK
                  </button>
                </div>
              ) : (
                <div className="Form__manageflashcardContainer__elements">
                  <Flashcard key={uuidv4()} flashcard={card} />
                  <div className="Form__manageflashcardContainer__elements__btns">
                    <button
                      type="button"
                      className="Form__manageflashcardContainer__elements__btns__btn --edit"
                    >
                      <img
                        className="Form__manageflashcardContainer__elements__btns__btn__img"
                        src={IMG__EDIT}
                        alt="EDIT"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setisDelConfirmId(card.id);
                      }}
                      className="Form__manageflashcardContainer__elements__btns__btn --delete"
                    >
                      <img
                        className="Form__manageflashcardContainer__elements__btns__btn__img"
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
        <div className="Form__manageflashcardContainer --addBtn">
          <button
            type="button"
            className="Form__manageflashcardContainer__btn --addBtn"
          >
            <img
              className="Form__manageflashcardContainer__btn__addImg"
              src={IMG__PLUS}
              alt="ADD"
            />
          </button>
          <div className="Form__manageflashcardContainer__addBtnTextContainer">
            <h6 className="Form__manageflashcardContainer__addBtnTextContainer__addBtnText">
              ADD NEW FLASHCARD
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
