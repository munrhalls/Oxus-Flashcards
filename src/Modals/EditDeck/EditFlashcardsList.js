import { EditFlashcardsList } from "./EditFlashcardsList";
import React from "react";
export function EditFlashcardsList({
  card,
  i,
  uuidv4,
  isDelConfirmId,
  deleteCard,
  setisDelConfirmId,
  IMG__EDIT,
  IMG__CLOSE,
  IMG__PLUS,
}) {
  <EditFlashcardsList
    card={card}
    i={i}
    uuidv4={uuidv4}
    isDelConfirmId={isDelConfirmId}
    deleteCard={deleteCard}
    setisDelConfirmId={setisDelConfirmId}
    IMG__EDIT={IMG__EDIT}
    IMG__CLOSE={IMG__CLOSE}
    IMG__PLUS={IMG__PLUS}
  />;
  return (
    <div className="Form__manageflashcards">
      <div className="Form__manageflashcards__list">
        {[...editedCards, ...editedCompletedCards].map((card, i) => {
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
                      onClick={() => setisDelConfirmId(card.id)}
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
