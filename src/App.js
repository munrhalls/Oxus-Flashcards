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
  const [isWelcome, setIsWelcome] = useState({ shade: true, message: true });
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

  useEffect(() => {
    const timer = setTimeout(() => {
      // add check if 1st time user
      // add option to click-disappears instantly
      setIsWelcome({ shade: false, message: true });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className={`WelcomeShade ${isWelcome.shade ? "" : "--hidden"}`}>
        <h1
          className={`WelcomeShade__title ${isWelcome.shade ? "" : "--hidden"}`}
        >
          OXUS
        </h1>
        <h2
          className={`WelcomeShade__subtitle ${
            isWelcome.shade ? "" : "--hidden"
          }`}
        >
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
          {isWelcome?.message && (
            <div className="WelcomeMessage">
              <h1 className="WelcomeMessage__title">Welcome to flashcards!</h1>
              <h2 className="WelcomeMessage__subtitle">
                This app is an electronic version of the famous, simple and
                effective learning tool, used and loved by many: flashcards.
              </h2>
              <h2 className="WelcomeMessage__subtitle">In this app you can:</h2>
              <ul className="WelcomeMessage__list">
                <li className="WelcomeMessage__list__item">
                  - Create named decks
                </li>
                <li className="WelcomeMessage__list__item">
                  - Make and insert flashcards into a deck you choose
                </li>
                <li className="WelcomeMessage__list__item">
                  - View flashcards in a deck, one by one
                </li>
                <li className="WelcomeMessage__list__item">
                  - View question on one side, answer on another
                </li>
                <li className="WelcomeMessage__list__item">
                  - Mark difficulty level and shuffle each flashcard accordingly
                  - difficult cards go to the beginning of the deck, medium to
                  the middle and easy to the end.
                </li>
                <li className="WelcomeMessage__list__item">
                  - See the deck of completed flashcards.
                </li>
              </ul>
              <h2 className="WelcomeMessage__subtitle">
                You can check the already prepared example deck, to see how a
                deck works.
              </h2>
              <h2 className="WelcomeMessage__subtitle">
                To make your own first deck - simply click the "ADD NEW DECK"
                button.
              </h2>
              <h2 className="WelcomeMessage__subtitle">
                2-3 clicks later, you'll be looking at your first deck.
              </h2>
              <h2 className="WelcomeMessage__subtitle">
                Simple. Practical. No nonsense.
              </h2>
              <div
                onClick={(isWelcome) =>
                  setIsWelcome({ shade: false, message: false })
                }
                className="WelcomeMessage__btnContainer"
              >
                <button className="WelcomeMessage__btnContainer__btn">
                  Click me to close this message.
                </button>
              </div>
            </div>
          )}
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
