import React from "react";
import { AddFlashcard } from "./AddFlashcard/AddFlashcard";
import { EditFlashcard } from "./EditFlashcard/EditFlashcard";

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
  AddFlashcard: function (props) {
    return <AddFlashcard {...props} />;
  },
  EditFlashcard: function (props) {
    return <EditFlashcard {...props} />;
  },
};
