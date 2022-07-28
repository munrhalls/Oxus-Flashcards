import { Header } from "./Header/Header";
import "./App.css";
import { useEffect, useState } from "react";
import { Modals } from "./Modals/Modals";
import { ModalBtns } from "./Modals/ModalBtns";
import { uuidv4 } from "@firebase/util";
import { SymbolDecks } from "./Decks/SymbolDecks";
import { Deck } from "./Decks/Deck.js";
import { Footer } from "./Footer/Footer";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Firebase/Firebase";

function App() {
  let mock = [
    {
      id: uuidv4(),
      unturned: {
        text: "Question 1",
        image:
          "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
      },
      turned: {
        text: "Answer 2",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Question 3",
        image: "",
      },
      turned: {
        text: "Answer is 33333333333333. 3..",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Question 4",
        image: "",
      },
      turned: {
        text: "That's answer 44444444444444. Four. Actually.",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Question",
        image: "",
      },
      turned: {
        text: "555555555555555555555 55 4 5 5 5 5",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Question",
        image:
          "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
      },
      turned: {
        text: "Six.",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Question 7",
        image:
          "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
      },
      turned: {
        text: "Seven.Seven. Seven.Seven.Seven.Seven.Seven.Seven.Seven. Seven.",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Question 8",
        image:
          "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
      },
      turned: {
        text: "That's 8.",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Question 9",
        image:
          "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
      },
      turned: {
        text: "That's nine. 9..... 9.",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Question 10",
        image:
          "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
      },
      turned: {
        text: "Ten ten ten.",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Question 11",
        image:
          "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
      },
      turned: {
        text: "11n.",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Question 12",
        image:
          "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
      },
      turned: {
        text: "12.",
        image: "",
      },
    },
  ];
  const [decks, setDecks] = useState([]);
  const [activeDeckId, setactiveDeckId] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);
  function getDecks() {
    let decks = [];
    for (let i = 0; i < 10; i++) {
      let deck = {
        id: uuidv4(),
        name: i,
        flashcards: mock,
        completedFlashcards: [],
      };
      decks.push(deck);
    }
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
  function closeModal() {
    setModalOpen(false);
  }

  useEffect(() => {
    console.log("overwrite????");
    let decks = getDecks();
    setDecks(decks);
  }, []);
  return (
    <div className="App">
      <Header />
      <main className="Main">
        {activeDeckId && (
          <div className="Aside">
            <ModalBtns
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
              setDecks={setDecks}
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
              decks={decks}
              setDecks={(decks) => setDecks(decks)}
              modalOpen={modalOpen}
              closeModal={() => closeModal()}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
