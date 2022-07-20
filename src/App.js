import "./App.css";
import { useEffect, useState } from "react";
import { Modals } from "./Modals/Modals";
import { Flashcards } from "./Flashcards/Flashcards";
import { ModalBtns } from "./Modals/ModalBtns";
import { uuidv4 } from "@firebase/util";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Firebase/Firebase";
import cloneDeep from "lodash.clonedeep";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4"
  );
  const [flashcards, setFlashcards] = useState([
    {
      id: uuidv4(),
      difficulty: 3,
      orderNum: 1,
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
      difficulty: 3,
      orderNum: 2,
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
      difficulty: 2,
      orderNum: 3,
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
      difficulty: 0,
      orderNum: 4,
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
      difficulty: 1,
      orderNum: 6,
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
      difficulty: 1,
      orderNum: 7,
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
      difficulty: 1,
      orderNum: 8,
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
      difficulty: 3,
      orderNum: 9,
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
      difficulty: 2,
      orderNum: 1,
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
      difficulty: 3,
      orderNum: 1,
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
      difficulty: 3,
      orderNum: 2,
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
  ]);
  const [sortedFlashcards, setSortedFlashcards] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const numOfLevels = 4;
  useEffect(() => {
    let sorted = aggregateSortedLevels(flashcards, numOfLevels);
    setSortedFlashcards(() => sorted);
    setIsLoading(false);
  }, [flashcards]);

  console.log(sortedFlashcards);
  function smoothOrderNums(cards, difficulty) {
    const range = cards.filter((card) => card.difficulty === difficulty);
    const smoothOrderNums = range.map((card, i) => {
      card.orderNum = i + 1;
      return card;
    });
    return smoothOrderNums;
  }

  function sortWithinLevel(arr, difficulty) {
    let sorted = arr
      .filter((instance) => instance.difficulty === difficulty)
      .sort((a, b) => (a.orderNum < b.orderNum ? -1 : 1));
    let smoothened = smoothOrderNums(sorted, difficulty);
    return smoothened;
  }

  function aggregateSortedLevels(data, numOfLevels) {
    let aggregate = [];
    for (let i = 0; i < numOfLevels; i++) {
      let part = sortWithinLevel(data, i);
      aggregate = [...aggregate, ...part];
    }
    return aggregate;
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
          setImage(url);
        });
      });
  }

  function addFlashcard(flashcard) {
    setFlashcards([...flashcards, flashcard]);
  }
  function updateFlashcard(flashcard) {
    console.log(flashcard);
    let cards = cloneDeep(flashcards);
    let card = cards.find((card) => flashcard.id === card.id);
    card.difficulty = flashcard.difficulty;
    card.orderNum = flashcard.orderNum;
    setFlashcards(() => cards);
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
            <Flashcards
              updateFlashcard={(flashcard) => updateFlashcard(flashcard)}
              sortedFlashcards={sortedFlashcards}
            />
          )}
        </div>
        <div className="Aside">
          <ModalBtns setModalOpen={(modalOpen) => setModalOpen(modalOpen)} />
        </div>
        {modalOpen && (
          <Modals
            sortedFlashcards={sortedFlashcards}
            modalOpen={modalOpen}
            addFlashcard={(flashcard) => addFlashcard(flashcard)}
            closeModal={() => closeModal()}
          />
        )}
      </main>
      <footer className="Footer">
        By Munrhalls. 2022.
        <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">
          Arrow icons created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
