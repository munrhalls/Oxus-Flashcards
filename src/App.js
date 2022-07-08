import "./App.css";
import { useState } from "react";
import { Flashcard } from "./Flashcard/Flashcard";

function App() {
  const [fcards, setfcards] = useState([
    {
      unturned: "Example fcard",
      turned: "Not a fuck you card",
    },
  ]);

  function addFcard() {
    // setfcards(...fcards, fcard);
  }

  return (
    <div className="App">
      <header className="App-header">header</header>
      <main>
        {fcards.map((fcard) => {
          return <Flashcard fcard={fcard} />;
        })}
        <form onSubmit={() => addFcard}>
          <input type="submit" value="Add flashcard" />
        </form>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
