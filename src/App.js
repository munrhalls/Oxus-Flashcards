import "./App.css";
import { useState } from "react";
import { Flashcard } from "./Flashcard/Flashcard";
import { AddFcard } from "./Flashcard/AddFCard";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Firebase/Firebase";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4"
  );
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

  async function fileTest(e) {
    debugger;
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
  function onAddFcard(fcard) {
    setFcards([...fcards, fcard]);
    console.log(fcards);
  }

  return (
    <div className="App">
      <header className="Header">Flashcards</header>
      <main className="Main">
        <input type="file" name="file" onChange={fileTest} />
        {/* <img src="" /> */}
        {/* <img src={image} alt="image here" /> */}
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
