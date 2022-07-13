import "./App.css";
import { useState } from "react";
import { Flashcard } from "./Flashcard/Flashcard";
import { AddFcard } from "./Flashcard/AddFCard";
import { getStorage, ref, uploadBytes } from "./Firebase/Firebase";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [fcards, setFcards] = useState([
    {
      unturned: {
        text: "Example flash card.",
        image: "src",
      },
      turned: {
        text: "Not a fuck you card.",
        image: "src",
      },
    },
  ]);
  function fileTest(e) {
    console.log(e.target.files[0]);
    const storage = getStorage();
    const imageRef = ref(storage, e.target.files[0].name);
    uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  }
  function onAddFcard(fcard) {}

  return (
    <div className="App">
      <header className="Header">Flashcards</header>
      <main className="Main">
        <input type="file" onChange={fileTest} />
        {isLoading ? (
          <div style={{ fontSize: "120px" }}>Loading...</div>
        ) : (
          <div className="Flashcards">
            {fcards.map((fcard) => {
              return <Flashcard key={Math.random()} fcard={fcard} />;
            })}
          </div>
        )}

        <div className="Flashcards__form__container">
          <AddFcard onAddFcard={(fcard) => onAddFcard(fcard)} />
        </div>
      </main>
      <footer className="Footer">By Munrhalls. 2022.</footer>
    </div>
  );
}

export default App;
