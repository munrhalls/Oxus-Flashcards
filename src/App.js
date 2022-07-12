import "./App.css";
import { useState, useEffect } from "react";
import { Flashcard } from "./Flashcard/Flashcard";
import { AddFcard } from "./Flashcard/AddFCard";
import { flashcardsCol, getDocs, doc } from "./Firebase/Firebase";

function App() {
  const [fcards, setfcards] = useState([
    {
      unturned: "Example fcard",
      turned: "Not a fuck you card",
    },
    {
      unturned: "Example fcard",
      turned: "Not a fuck you card",
    },
    {
      unturned: "Example fcard",
      turned: "Not a fuck you card",
    },
  ]);

  function onAddFcard(fcard) {
    setfcards(() => [...fcards, fcard]);
  }
  async function getFlashcards() {
    const flashcardSnapshot = await getDocs(flashcardsCol);
    const flashcardList = flashcardSnapshot.docs.map((doc) => doc.data());
    return flashcardList;
  }
  useEffect(() => {
    getFlashcards()
      .then((res) => {
        setfcards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="Header">Flashcards</header>
      <main className="Main">
        <div className="Flashcards">
          {fcards.map((fcard) => {
            return <Flashcard key={Math.random()} fcard={fcard} />;
          })}
        </div>
        <div className="Flashcards__form__container">
          <AddFcard onAddFcard={(fcard) => onAddFcard(fcard)} />
        </div>
      </main>
      <footer className="Footer">By Munrhalls. 2022.</footer>
    </div>
  );
}

export default App;
