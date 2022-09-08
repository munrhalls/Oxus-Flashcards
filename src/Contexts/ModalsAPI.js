import React, { useState } from "react";

export default function ModalsAPI() {
  const [modalOpen, setModalOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
  const [activeFlashcardId, setActiveFlashcardId] = useState(null);

  function getModalOpen() {
    return modalOpen;
  }
  // to refactor, getmodal open
  const value = {
    modalOpen,
    getModalOpen,
    setModalOpen,
    menuOpen,
    setMenuOpen,
    activeFlashcardId,
    setActiveFlashcardId,
  };
  return value;
}
