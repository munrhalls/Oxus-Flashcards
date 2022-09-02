import React from "react";
import { SetFlashcard } from "./SetFlashcard/SetFlashcard";
import { AddDeck } from "./AddDeck/AddDeck";
import { EditDeck } from "./EditDeck/EditDeck";
import { DeleteDeck } from "./DeleteDeck/DeleteDeck";

export const Modals = {
  AddDeck: function (props) {
    return <AddDeck {...props} />;
  },
  EditDeck: function (props) {
    return <EditDeck {...props} />;
  },
  DeleteDeck: function (props) {
    return <DeleteDeck {...props} />;
  },
  SetFlashcard: function (props) {
    return <SetFlashcard {...props} />;
  },
};
