import { useState } from "react";

export default function useModal(modal) {
  const [modalOpen, setModalOpen] = useState(null);
  console.log(modal);
  setModalOpen(() => modal);
  return modalOpen;
}
