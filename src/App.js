// gestalting
import "./App.css";
// data
import { uuidv4 } from "@firebase/util";
import firebase from "./Firebase";
// navigation
import { Routes, Route, Link, Outlet } from "react-router-dom";
// introduction
import { useEffect, useState } from "react";
import { Welcome } from "./Components/Welcome/Welcome";
import { Header } from "./Components/Header/Header";
// cluster 1
import { FormUser } from "./Components/ModalsUser/FormUser";
// cluster 2
import { Modals } from "./Components/Modals/Modals";
import { ModalBtns } from "./Components/ModalBtns/ModalBtns";
// cluster 3
import { SymbolDecks } from "./Components/Deck/SymbolDecks";
// cluster 4
import { Deck } from "./Components/Deck/Deck.js";
// conclusion
import { Footer } from "./Components/Footer/Footer";

import { introExampleDeck } from "./introExampleDeck";

function App() {
  const [decks, setDecks] = useState([]);
  const [activeDeckId, setActiveDeckId] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);

  function getDecks() {
    let decks = [];

    decks.push(introExampleDeck);
    return decks;
  }
  async function fileTest(e) {
    let img = e.target.files[0];
    const storage = firebase.getStorage();
    const imageRef = firebase.ref(storage, img.name);
    firebase
      .uploadBytes(imageRef, img)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
      })
      .then(() => {
        firebase.getDownloadURL(firebase.ref(storage, img.name)).then((url) => {
          console.log(url);
          // setImage(url);
          // hook
        });
      });
  }
  useEffect(() => {
    let decks = getDecks();
    setDecks(decks);
  }, []);

  const modalProps = {
    activeDeckId,
    setActiveDeckId: (activeDeckId) => setActiveDeckId(activeDeckId),
    decks,
    setDecks: (decks) => setDecks(decks),
    modalOpen,
    setModalOpen: (modalOpen) => setModalOpen(modalOpen),
  };

  return (
    <>
      <div className="App">
        {/* <Welcome.Shade /> */}
        <Header>
          <FormUser.LoginBtn
            setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
          />
          <FormUser.RegisterBtn
            setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
          />
        </Header>
        <main className="Main">
          {activeDeckId && (
            <div className="Aside">
              <ModalBtns
                modalOpen={modalOpen}
                setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
                setActiveDeckId={(activeDeckId) =>
                  setActiveDeckId(activeDeckId)
                }
              />
            </div>
          )}
          <div className="Centerstage">
            {/* <Welcome.Message /> */}
            {activeDeckId ? (
              <Deck
                activeDeckId={activeDeckId}
                decks={decks}
                setDecks={(decks) => setDecks(decks)}
              />
            ) : (
              <SymbolDecks
                decks={decks}
                setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
                setActiveDeckId={(activeDeckId) =>
                  setActiveDeckId(activeDeckId)
                }
              />
            )}
            {modalOpen === "AddDeck" && <Modals.AddDeck {...modalProps} />}
            {modalOpen === "EditDeck" && <Modals.EditDeck {...modalProps} />}
            {modalOpen === "DeleteDeck" && (
              <Modals.DeleteDeck {...modalProps} />
            )}
            {modalOpen === "AddFlashcard" && (
              <Modals.AddFlashcard {...modalProps} />
            )}
            {modalOpen === "EditFlashcard" && (
              <Modals.EditFlashcard {...modalProps} />
            )}

            {modalOpen === "Register" && (
              <FormUser.Register
                setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
              />
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
