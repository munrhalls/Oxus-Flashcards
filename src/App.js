import "./App.css";
import { useState } from "react";
import { Flashcard } from "./Flashcard/Flashcard";
import { Modals } from "./Modals/Modals";
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
        text: "Not a fuck you card.",
        image: "src",
      },
    },
  ]);
  const [modalOpen, setModalOpen] = useState(null);

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
    console.log(flashcards);
  }
  function closeModal() {
    setModalOpen(null);
  }

  return (
    <div className="App">
      <header className="Header">Flashcards</header>
      <main className="Main">
        <div className="Centerstage">
          {isLoading ? (
            <div style={{ fontSize: "120px" }}>Loading...</div>
          ) : (
            <div className="Flashcards">
              {flashcards.map((flashcard) => {
                return <Flashcard key={Math.random()} flashcard={flashcard} />;
              })}
            </div>
          )}
        </div>
        <div className="Aside">
          <div className="Modal__containerBtns">
            <button
              className="Modal__btn"
              onClick={() => setModalOpen("AddFlashcard")}
            >
              Add flashcard
            </button>
            <button className="Modal__btn">Edit flashcard</button>
            <button className="Modal__btn">Delete flashcard</button>
            <button className="Modal__btn">Sort flashcards</button>
          </div>
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
