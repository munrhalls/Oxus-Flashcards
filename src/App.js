import "./App.css";
import { useEffect, useState } from "react";
import { Modals } from "./Modals/Modals";
import { Flashcards } from "./Flashcards/Flashcards";
import { ModalBtns } from "./Modals/ModalBtns";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Firebase/Firebase";
// import { ordered, filtered } from "./mock";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4"
  );
  const [flashcards, setFlashcards] = useState([
    {
      id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
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
      id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
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
      id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
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
      id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
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
      id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
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
      id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
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
      id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
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
      id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
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
      id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
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
      id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
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
      id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
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
  const [sortedFlashcards, setSortedFlashcards] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const numOfLevels = 4;
  console.log(sortedFlashcards);
  useEffect(() => {
    let sorted = aggregateSortedLevels(flashcards, numOfLevels);
    setSortedFlashcards(sorted);
  }, [flashcards]);
  function sortWithinLevel(arr, difficulty) {
    let sorted = arr
      .filter((instance) => instance.difficulty === difficulty)
      .sort((a, b) => (a.orderNum < b.orderNum ? -1 : 1));

    return sorted;
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
            flashcards={flashcards}
            modalOpen={modalOpen}
            updateFlashcards={(flashcard) => updateFlashcards(flashcard)}
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
