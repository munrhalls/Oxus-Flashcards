import "./App.css";
import { useState } from "react";
import { Modals } from "./Modals/Modals";
import { Flashcards } from "./Flashcards/Flashcards";
import { ModalBtns } from "./Modals/ModalBtns";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Firebase/Firebase";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4"
  );
  const [flashcards, setFlashcards] = useState([
    {
      unturned: {
        text: "Example flash card.",
        image: "src",
      },
      turned: {
        text: "Not an f u card.",
        image: "src",
      },
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  async function fileTest(e) {
    let img = e.target.files[0];
    const storage = getStorage();
    const imageRef = ref(storage, img.name);
    uploadBytes(imageRef, img)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
      })
      .then(() => {
        getDownloadURL(ref(storage, img.name)).then((url) => {
          console.log(url);
          setImage(url);
        });
      });
  }
  function updateFlashcards(flashcard) {
    setFlashcards([...flashcards, flashcard]);
  }
  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="App">
      <header className="Header">Flashcards</header>
      <main className="Main">
        <div className="Centerstage">
          {isLoading ? (
            <div style={{ fontSize: "120px" }}>Loading...</div>
          ) : (
            <Flashcards flashcards={flashcards} />
          )}
        </div>
        <div className="Aside">
          <ModalBtns setModalOpen={(modalOpen) => setModalOpen(modalOpen)} />
        </div>
        {modalOpen && (
          <Modals
            modalOpen={modalOpen}
            updateFlashcards={(flashcard) => updateFlashcards(flashcard)}
            closeModal={() => closeModal()}
          />
        )}
      </main>
      <footer className="Footer">By Munrhalls. 2022.</footer>
    </div>
  );
}

export default App;
