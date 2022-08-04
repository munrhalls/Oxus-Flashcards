import { uuidv4 } from "@firebase/util";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Data/Firebase/Firebase";

import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { Modals } from "./Modals/Modals";
import { ModalBtns } from "./Modals/ModalBtns/ModalBtns";
import { SymbolDecks } from "./Decks/SymbolDecks";
import { Deck } from "./Decks/Deck.js";
import { Footer } from "./Footer/Footer";
import { Welcome } from "./Welcome/Welcome";

function App() {
  let mock = [
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Spanish?',
        image: "",
      },
      turned: {
        text: "Hola!.",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Hey in French?",
        image: "",
      },
      turned: {
        text: "Bonjour!",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Hey in German?!",
        image: "",
      },
      turned: {
        text: "Tschüss!",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Hey in Polish?",
        image: "",
      },
      turned: {
        text: "SIEMA.",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Japanese?',
        image: "",
      },
      turned: {
        text: "Kon'nichiwa",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Korean?',
        image: "",
      },
      turned: {
        text: "Annyeong",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Chinese?',
        image: "",
      },
      turned: {
        text: "Nǐ hǎo",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Turkish?',
        image: "",
      },
      turned: {
        text: "Merhaba",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Turkish?',
        image: "",
      },
      turned: {
        text: "Merhaba",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Serbia?',
        image: "",
      },
      turned: {
        text: "Zdravo",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in South Africa?',
        image: "",
      },
      turned: {
        text: "Heita",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Greenland?',
        image: "",
      },
      turned: {
        text: "Aluu",
        image: "",
      },
    },
  ];
  const [decks, setDecks] = useState([]);
  const [activeDeckId, setactiveDeckId] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);

  function getDecks() {
    let decks = [];
    let deck = {
      id: uuidv4(),
      name: "Learn how to greet someone in over 10 different languages! (Example deck)",
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

  return (
    <div className="App">
      <Welcome.Shade />
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
          <Welcome.Message />
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
