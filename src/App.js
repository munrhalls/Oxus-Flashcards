import "./App.css";
import { useState } from "react";
import { Flashcard } from "./Flashcard/Flashcard";
import { AddFcard } from "./Flashcard/AddFCard";

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
    console.log(fcard);
    setfcards(() => [...fcards, fcard]);
  }

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
