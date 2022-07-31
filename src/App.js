import { useEffect, useState } from "react";
import { uuidv4 } from "@firebase/util";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Data/Firebase/Firebase";

import "./App.css";
import { Header } from "./Header/Header";
import { Modals } from "./Modals/Modals";
import { ModalBtns } from "./Modals/ModalBtns/ModalBtns";
import { SymbolDecks } from "./Decks/SymbolDecks";
import { Deck } from "./Decks/Deck.js";
import { Footer } from "./Footer/Footer";

function App() {
  let mock = [
    {
      id: uuidv4(),
      unturned: {
        text: "Example flashcard. 2 + 2 = ?",
        image: "",
      },
      turned: {
        text: "9000.",
        image: "",
      },
    },
  ];
  const [isWelcome, setIsWelcome] = useState(true);
  const [decks, setDecks] = useState([]);
  const [activeDeckId, setactiveDeckId] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);

  function getDecks() {
    let decks = [];
    let deck = {
      id: uuidv4(),
      name: "Example deck.",
      flashcards: mock,
      completedFlashcards: [],
    };
    decks.push(deck);
    return decks;
  }
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
          // setImage(url);
          // hook
        });
      });
  }
  useEffect(() => {
    let decks = getDecks();
    setDecks(decks);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // add check if 1st time user
      // add option to click-disappears instantly
      setIsWelcome(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className={`WelcomeShade ${isWelcome ? "" : "--hidden"}`}>
        <h1 className={`WelcomeShade__title ${isWelcome ? "" : "--hidden"}`}>
          OXUS
        </h1>
        <h2 className={`WelcomeShade__subtitle ${isWelcome ? "" : "--hidden"}`}>
          Simple, no-nonsense flashcards.
        </h2>
      </div>
      <Header />
      <main className="Main">
        {activeDeckId && (
          <div className="Aside">
            <ModalBtns
              modalOpen={modalOpen}
              setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
              setactiveDeckId={(activeDeckId) => setactiveDeckId(activeDeckId)}
            />
          </div>
        )}
        <div className="Centerstage">
          {activeDeckId ? (
            <Deck
              activeDeckId={activeDeckId}
              decks={decks}
              setDecks={(decks) => setDecks(decks)}
            />
          ) : (
            <SymbolDecks
              decks={decks}
              setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
              setactiveDeckId={(activeDeckId) => setactiveDeckId(activeDeckId)}
            />
          )}
          {modalOpen && (
            <Modals
              activeDeckId={activeDeckId}
              setactiveDeckId={(activeDeckId) => setactiveDeckId(activeDeckId)}
              decks={decks}
              setDecks={(decks) => setDecks(decks)}
              modalOpen={modalOpen}
              setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
