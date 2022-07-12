import "./App.css";
import { useState, useEffect } from "react";
import { Flashcard } from "./Flashcard/Flashcard";
import { AddFcard } from "./Flashcard/AddFCard";
import cloneDeep from "lodash.clonedeep";

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
  const [fcards, setFcards] = useState("");
  const [fcardToDB, setFcardToDB] = useState(null);
  const [imagesToDB, setimagesToDB] = useState({
    unturned: "",
    turned: "",
  });

  function onAddFcard(fcard) {
    setFcardToDB(fcard);
  }
  async function getFlashcards() {
    const flashcardSnapshot = await getDocs(flashcardsCol);
    const flashcardList = flashcardSnapshot.docs.map((doc) => doc.data());
    return flashcardList;
  }

  async function handleImages() {
    const storage = getStorage();
    const storageRef = ref(storage, "flashcards");
    let imagesToDB = cloneDeep(imagesToDB);
    const unturnedImg = fcardToDB.unturned.image;
    const turnedImg = fcardToDB.turned.image;
    if (unturnedImg) {
      uploadBytes(storageRef, unturnedImg)
        .then((snapshot) => {
          getDownloadURL(storageRef)
            .then((url) => {
              imagesToDB.unturned = url;
            })
            .catch((error) => {
              switch (error.code) {
                case "storage/object-not-found":
                  break;
                case "storage/unauthorized":
                  break;
                case "storage/canceled":
                  break;
                case "storage/unknown":
                  break;
              }
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (turnedImg) {
      uploadBytes(storageRef, turnedImg)
        .then((snapshot) => {
          getDownloadURL(storageRef)
            .then((url) => {
              imagesToDB.turned = url;
            })
            .catch((error) => {
              switch (error.code) {
                case "storage/object-not-found":
                  break;
                case "storage/unauthorized":
                  break;
                case "storage/canceled":
                  break;
                case "storage/unknown":
                  break;
              }
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setimagesToDB(imagesToDB);
  }
  async function handleCard() {
    const newFcard = cloneDeep(fcardToDB);
    newFcard.unturned.image = imagesToDB.unturned;
    newFcard.turned.image = imagesToDB.turned;
    const docRef = addDoc(collection(db, "flashcards"), newFcard);
    console.log("Document written with ID: ", docRef.id);
  }

  useEffect(() => {
    if (fcardToDB) {
      handleCard();
    }
  }, [imagesToDB]);

  useEffect(() => {
    if (fcardToDB) {
      handleImages();
      handleCard();
    }
  }, [fcardToDB]);

  useEffect(() => {
    getFlashcards()
      .then((res) => {
        setFcards(res);
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
