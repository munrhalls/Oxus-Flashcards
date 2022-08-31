import React, { useState } from "react";

export default function ModalsAPI() {
  const [modalOpen, setModalOpen] = useState(null);
  function getModalOpen() {
    return modalOpen;
  }
  // to refactor, getmodal open
  const value = { modalOpen, getModalOpen, setModalOpen };
  return value;
}
