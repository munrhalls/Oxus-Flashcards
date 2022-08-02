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
      <header className="App-header">header</header>
      <main>
        {fcards.map((fcard) => {
          return <Flashcard key={Math.random()} fcard={fcard} />;
        })}
        <AddFcard onAddFcard={(fcard) => onAddFcard(fcard)} />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
