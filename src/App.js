import "./App.css";
import { useEffect, useState } from "react";
import { Modals } from "./Modals/Modals";
import { Flashcards } from "./Flashcards/Flashcards";
import { CompletedFlashcards } from "./Flashcards/CompletedFlashcards";
import { ModalBtns } from "./Modals/ModalBtns";
import { uuidv4 } from "@firebase/util";
import { SymbolDecks } from "./Decks/SymbolDecks";
import { Deck } from "./Decks/Deck.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Firebase/Firebase";
import cloneDeep from "lodash.clonedeep";

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
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4"
  );
  const [decks, setDecks] = useState([]);
  const [activeDeck, setActiveDeck] = useState(false);
  const [completedFlashcards, setCompletedFlashcards] = useState([]);
  const [flashcards, setFlashcards] = useState();
  function MOCK__generateDecks() {
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
  useEffect(() => {
    let decks = MOCK__generateDecks();
    setDecks(decks);
  }, []);

  console.log(decks);
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

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function closeModal() {
    setModalOpen(false);
  }
  function addFlashcard(flashcard) {
    setFlashcards([...flashcards, flashcard]);
  }
  return (
    <div className="App">
      <header className="Header">
        Flashcards
        <h6>&nbsp;&nbsp;&nbsp; /// PROTOTYPE: APP IN CONSTRUCTION.</h6>
      </header>
      <main className="Main">
        <div className="Aside">
          <ModalBtns
            setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
            setActiveDeck={(activeDeck) => setActiveDeck(activeDeck)}
          />
        </div>
        <div className="Centerstage">
          {!activeDeck ? (
            <SymbolDecks
              decks={decks}
              setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
              setActiveDeck={(activeDeck) => setActiveDeck(activeDeck)}
            />
          ) : (
            <Deck
              flashcards={activeDeck.flashcards}
              setFlashcards={(flashcards) => setFlashcards(flashcards)}
              completedFlashcards={completedFlashcards}
              setCompletedFlashcards={(completedFlashcards) =>
                setCompletedFlashcards(completedFlashcards)
              }
            />
          )}
          {modalOpen && (
            <Modals
              activeDeck={activeDeck}
              decks={decks}
              setDecks={(decks) => setDecks(decks)}
              flashcards={flashcards}
              modalOpen={modalOpen}
              addFlashcard={(flashcard) => addFlashcard(flashcard)}
              closeModal={() => closeModal()}
            />
          )}
        </div>
      </main>
      <footer className="Footer">
        <div className="Footer__authorContainer">
          <h6 className="Footer__authorContainer__author">
            App by: Munrhalls. 2022.
          </h6>
          <h6 className="Footer__authorContainer__author">
            Design by: Munrhalls. 2022.
          </h6>
        </div>
        <div className="Footer__attribs">
          <span>Icons: </span>
          <a
            className="Footer__attribs__link"
            href="https://www.flaticon.com/free-icons/arrow"
            title="arrow icons"
          >
            Arrow icons created by Freepik - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/close"
            title="close icons"
          >
            <span> /// </span> Close icons created by ariefstudio - Flaticon
          </a>
          <a
            className="Footer__attribs__link"
            href="https://icon-library.com/icon/cards-icon-23.html.html>Cards Icon # 185438"
          >
            <span> /// </span> Card icons by https://icon-library.com/.
          </a>
          <a
            className="Footer__attribs__link"
            href="https://www.flaticon.com/free-icons/edit"
            title="edit icons"
          >
            <span> /// </span> Edit icons created by Kiranshastry - Flaticon
          </a>
          <a
            className="Footer__attribs__link"
            href="https://www.flaticon.com/free-icons/plus"
            title="plus icons"
          >
            <span> ///</span> Plus icons created by Freepik - Flaticon
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
