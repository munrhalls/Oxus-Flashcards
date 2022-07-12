import "./App.css";
import { useState, useEffect } from "react";
import { Flashcard } from "./Flashcard/Flashcard";
import { AddFcard } from "./Flashcard/AddFCard";
import {
  collection,
  db,
  flashcardsCol,
  addDoc,
  setDoc,
  getDocs,
  doc,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Firebase/Firebase";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fcards, setfcards] = useState("");
  const [fcardToDB, setfcardToDB] = useState(null);

  function onAddFcard(fcard) {
    setfcards([...fcards, fcard]);
    setfcardToDB(fcard);
  }
  async function getFlashcards() {
    const flashcardSnapshot = await getDocs(flashcardsCol);
    const flashcardList = flashcardSnapshot.docs.map((doc) => doc.data());
    return flashcardList;
  }
  useEffect(() => {
    if (fcardToDB) {
      addFcardToDb();
    }
    return () => {
      setfcardToDB(null);
    };
  }, [fcardToDB]);
  async function addFcardToDb() {
    // const storage = getStorage();
    // const storageRef = ref(storage, "flashcards");
    // uploadBytes(storageRef, fcardToDB).then((snapshot) => {
    //   console.log("Uploaded a blob or file!");
    // });
    
    const docRef = await addDoc(collection(db, "flashcards"), fcardToDB);
    console.log("Document written with ID: ", docRef.id);
  }

  useEffect(() => {
    getFlashcards()
      .then((res) => {
        setfcards(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="Header">Flashcards</header>
      <main className="Main">
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
