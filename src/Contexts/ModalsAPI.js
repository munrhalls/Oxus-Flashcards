import React, { useState } from "react";

export default function ModalsAPI() {
  const [modalOpen, setModalOpen] = useState(null);
  const [activeFlashcardId, setActiveFlashcardId] = useState(null);

  function getModalOpen() {
    return modalOpen;
  }
  // to refactor, getmodal open
  const value = {
    modalOpen,
    getModalOpen,
    setModalOpen,
    activeFlashcardId,
    setActiveFlashcardId,
  };
  return value;
}
