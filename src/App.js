import { uuidv4 } from "@firebase/util";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "./Data/Firebase/Firebase";

import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { FormUser } from "./ModalsUser/FormUser";
import { Modals } from "./Modals/Modals";
import { ModalBtns } from "./ModalBtns/ModalBtns";
import { ModalsUser } from "./ModalsUser/ModalsUser";
import { SymbolDecks } from "./Deck/SymbolDecks";
import { Deck } from "./Deck/Deck.js";
import { Footer } from "./Footer/Footer";
import { Welcome } from "./Welcome/Welcome";

function App() {
  let mock = [
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Portugese ?',
        image: "",
      },
      turned: {
        text: "Olá",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in English, Australia?',
        image: "",
      },
      turned: {
        text: "G’day",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Greek?',
        image: "",
      },
      turned: {
        text: "Geia (γεια)",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Serbia?',
        image: "",
      },
      turned: {
        text: "Zdravo",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Croatian?',
        image: "",
      },
      turned: {
        text: "Zdravo",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Mandarin?',
        image: "",
      },
      turned: {
        text: "Nǐ hǎo",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Cantonese?',
        image: "",
      },
      turned: {
        text: "Nǐ hǎo. Mandarin and Cantonese are very different.",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Hindi?',
        image: "",
      },
      turned: {
        text: "Namaste",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Cyprus?',
        image: "",
      },
      turned: {
        text: "Merhaba",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Slovakia?',
        image: "",
      },
      turned: {
        text: "Ahoj",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Dutch?',
        image: "",
      },
      turned: {
        text: "Hallo",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Thai?',
        image: "",
      },
      turned: {
        text: "S̄wạs̄dī",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Hungarian?',
        image: "",
      },
      turned: {
        text: "Szia",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Czech?',
        image: "",
      },
      turned: {
        text: "Ahoj",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Bengali?',
        image: "",
      },
      turned: {
        text: "Hyālō",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Urdu (Pakistan)?',
        image: "",
      },
      turned: {
        text: "Assalam u Alaikum",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Persian?',
        image: "",
      },
      turned: {
        text: "Salām",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Swedish?',
        image: "",
      },
      turned: {
        text: "Hallå",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Afrikaans?',
        image: "",
      },
      turned: {
        text: "Hallo",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Romanian?',
        image: "",
      },
      turned: {
        text: "Bunâ",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Hebrew?',
        image: "",
      },
      turned: {
        text: "Shalom",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Armenian?',
        image: "",
      },
      turned: {
        text: "Barev",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Arabic?',
        image: "",
      },
      turned: {
        text: "Marhabaan",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s  \n"Hey\n" in Punjabi (spoken in India)?',
        image: "",
      },
      turned: {
        text: "Sata Srī Akāla",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Hey in French?",
        image: "",
      },
      turned: {
        text: "Bonjour!",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Hey in German?!",
        image: "",
      },
      turned: {
        text: "Tschüss!",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: "Hey in Polish?",
        image: "",
      },
      turned: {
        text: "SIEMA.",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Japanese?',
        image: "",
      },
      turned: {
        text: "Kon'nichiwa",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Korean?',
        image: "",
      },
      turned: {
        text: "Annyeong",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Chinese?',
        image: "",
      },
      turned: {
        text: "Nǐ hǎo",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Turkish?',
        image: "",
      },
      turned: {
        text: "Merhaba",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Turkish?',
        image: "",
      },
      turned: {
        text: "Merhaba",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Serbia?',
        image: "",
      },
      turned: {
        text: "Zdravo",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in South Africa?',
        image: "",
      },
      turned: {
        text: "Heita",
        image: "",
      },
    },
    {
      id: uuidv4(),
      unturned: {
        text: 'How\'s \n"Hey\n" in Greenland?',
        image: "",
      },
      turned: {
        text: "Aluu",
        image: "",
      },
    },
  ];
  const [decks, setDecks] = useState([]);
  const [activeDeckId, setactiveDeckId] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);
  const [modalUser, setModalUser] = useState(null);

  function getDecks() {
    let decks = [];
    let deck = {
      id: uuidv4(),
      name: "Learn how to greet someone in over 10 different languages! (Example deck)",
      flashcards: mock,
      completedFlashcards: [],
    };
    decks.push(deck);
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
  console.log(modalUser);
  return (
    <div className="App">
      {/* <Welcome.Shade /> */}
      <Header>
        <FormUser.LoginBtn
          setModalUser={(modalUser) => setModalUser(modalUser)}
        />
        <FormUser.RegisterBtn
          setModalUser={(modalUser) => setModalUser(modalUser)}
        />
      </Header>
      <main className="Main">
        {activeDeckId && (
          <div className="Aside">
            <ModalBtns
              modalOpen={modalOpen}
              setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
              setactiveDeckId={(activeDeckId) => setactiveDeckId(activeDeckId)}
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
              setactiveDeckId={(activeDeckId) => setactiveDeckId(activeDeckId)}
            />
          )}
          {modalOpen && (
            <Modals
              activeDeckId={activeDeckId}
              setactiveDeckId={(activeDeckId) => setactiveDeckId(activeDeckId)}
              decks={decks}
              setDecks={(decks) => setDecks(decks)}
              modalOpen={modalOpen}
              setModalOpen={(modalOpen) => setModalOpen(modalOpen)}
            />
          )}
          {modalUser && <ModalsUser modalUser={modalUser} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
