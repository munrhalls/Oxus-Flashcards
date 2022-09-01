import React, { useState } from "react";
import { DeleteFlashcard } from "./DeleteFlashcard";
import EditFlashcard from "./EditFlashcard";
import { uuidv4 } from "@firebase/util";
import AddFlashcardBtn from "./../../../Components/ModalBtns/AddFlashcardBtn";
import { Form } from "../Form";

export function EditFlashcardsList({ editedDeck, setEditedDeck }) {
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
        <AddFlashcardBtn />

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
                
                <Form.Toggle
                  toggle={isDelConfirmId && isDelConfirmId === card.id}
                >
                  <DeleteFlashcard
                    deleteCard={deleteCard}
                    setisDelConfirmId={setisDelConfirmId}
                    delId={card.id}
                  />

                  <EditFlashcard
                    card={card}
                    setisDelConfirmId={() => setisDelConfirmId(card.id)}
                  />
                </Form.Toggle>
              </div>
            );
          })}
      </div>
    </div>
  );
}
