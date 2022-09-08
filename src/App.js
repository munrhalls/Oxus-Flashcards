// gestalting
import "./App.css";
// data
import { uuidv4 } from "@firebase/util";
// navigation
import { Routes, Route, Link, Outlet } from "react-router-dom";
// introduction materials
import { introExampleDeck } from "./introExampleDeck";
// introduction
import { useEffect, useState } from "react";
import { Welcome } from "./Components/Welcome/Welcome";
import { Menu } from "./Components/Menu/Menu";
import { Header } from "./Components/Header/Header";
// cluster 1
import { FormUser } from "./Components/FormUser/FormUser";
// cluster 2
import { Modals } from "./Components/Modals/Modals";
import { ModalBtns } from "./Components/ModalBtns/ModalBtns";
// cluster 3
import { SymbolDecks } from "./Components/Deck/SymbolDecks";
// cluster 4
import { Deck } from "./Components/Deck/Deck.js";
// conclusion
import { Footer } from "./Components/Footer/Footer";
import { useGlobal } from "./Contexts/GlobalProvider";

function App() {
  const [activeDeckId, setActiveDeckId] = useState(null);
  const {
    currentUser,
    setModalOpen,
    modalOpen,
    getDecksFromDBAndUpdateUI,
    decks,
    setDecks,
  } = useGlobal();

  useEffect(() => {
    if (!currentUser)
      return (function () {
        setDecks([introExampleDeck]);
      })();
    getDecksFromDBAndUpdateUI(currentUser);
  }, [currentUser]);

  const modalProps = {
    activeDeckId,
    setActiveDeckId: (activeDeckId) => setActiveDeckId(activeDeckId),
  };

  return (
    <>
      <div className="App">
        {/* <Welcome.Shade /> */}
        <Header
          setActiveDeckId={(activeDeckId) => setActiveDeckId(activeDeckId)}
        />
        {!currentUser && <Welcome.Message />}
        
        <main className="Main">
          {activeDeckId && (
            <div className="Aside">
              <ModalBtns
                setActiveDeckId={(activeDeckId) =>
                  setActiveDeckId(activeDeckId)
                }
              />
            </div>
          )}
          <div className="Centerstage">
            {activeDeckId ? (
              <Deck
                activeDeckId={activeDeckId}
                decks={decks}
                setDecks={(decks) => setDecks(decks)}
              />
            ) : (
              <SymbolDecks
                decks={decks}
                setActiveDeckId={(activeDeckId) =>
                  setActiveDeckId(activeDeckId)
                }
              />
            )}
            {modalOpen === "MenuMobile" && <Menu.Mobile {...modalProps} />}
            {modalOpen === "AddDeck" && <Modals.AddDeck {...modalProps} />}
            {modalOpen === "EditDeck" && <Modals.EditDeck {...modalProps} />}
            {modalOpen === "DeleteDeck" && (
              <Modals.DeleteDeck {...modalProps} />
            )}
            {modalOpen === "SetFlashcard" && (
              <Modals.SetFlashcard {...modalProps} />
            )}

            {modalOpen === "Register" && <FormUser.Register />}
            {modalOpen === "SetProfile" && <FormUser.SetProfile />}
            {modalOpen === "Login" && <FormUser.Login />}
            {modalOpen === "ResetPassword" && <FormUser.ResetPassword />}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
// async function fileTest(e) {
//   let img = e.target.files[0];
//   const storage = firebase.getStorage();
//   const imageRef = firebase.ref(storage, img.name);
//   firebase
//     .uploadBytes(imageRef, img)
//     .then((snapshot) => {
//       console.log("Uploaded a blob or file!");
//     })
//     .then(() => {
//       firebase.getDownloadURL(firebase.ref(storage, img.name)).then((url) => {
//         console.log(url);
//         // setImage(url);
//         // hook
//       });
//     });
// }
