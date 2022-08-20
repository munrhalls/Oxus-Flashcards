// gestalting
import "./App.css";
// data
import { uuidv4 } from "@firebase/util";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Data/Firebase/Firebase";
// introduction
import { useEffect, useState } from "react";
import { Welcome } from "./Welcome/Welcome";
import { Header } from "./Header/Header";
// cluster 1
import { ModalsUser } from "./ModalsUser/ModalsUser";
import { FormUser } from "./ModalsUser/FormUser";
// cluster 2
import { Modals } from "./Modals/Modals";
import { ModalBtns } from "./ModalBtns/ModalBtns";
// cluster 3
import { SymbolDecks } from "./Deck/SymbolDecks";
// cluster 4
import { Deck } from "./Deck/Deck.js";
// conclusion
import { Footer } from "./Footer/Footer";

import { introExampleDeck } from "./introExampleDeck";

function App() {
  const [decks, setDecks] = useState([]);
  const [activeDeckId, setActiveDeckId] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);

  const modalProps = {
    activeDeckId,
    setActiveDeckId: (activeDeckId) => setActiveDeckId(activeDeckId),
    decks,
    setDecks: (decks) => setDecks(decks),
    modalOpen,
    setModalOpen: (modalOpen) => setModalOpen(modalOpen),
  };

  function getDecks() {
    let decks = [];

    decks.push(introExampleDeck);
    return decks;
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
          // setImage(url);
          // hook
        });
      });
  }
  useEffect(() => {
    let decks = getDecks();
    setDecks(decks);
  }, []);

  return (
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
              setActiveDeckId={(activeDeckId) => setActiveDeckId(activeDeckId)}
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
              setActiveDeckId={(activeDeckId) => setActiveDeckId(activeDeckId)}
            />
          )}
          {modalOpen === "AddDeck" && <Modals.AddDeck {...modalProps} />}
          {modalOpen === "EditDeck" && <Modals.EditDeck {...modalProps} />}
          {modalOpen === "DeleteDeck" && <Modals.DeleteDeck {...modalProps} />}
          {modalOpen === "AddFlashcard" && (
            <Modals.AddFlashcard {...modalProps} />
          )}
          {modalOpen === "EditFlashcard" && (
            <Modals.EditFlashcard {...modalProps} />
          )}

          {/* {modalOpen && <ModalsUser modalOpen={modalOpen} />} */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
