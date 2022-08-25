import React, { useState } from "react";

export default function ModalsAPI() {
  const [modalOpen, setModalOpen] = useState(null);
  function getModalOpen() {
    return console.log("ModalsAPI");
  }
  const value = { getModalOpen, setModalOpen };
  return value;
}
