// cluster 2 - firebase actual database, called firestore
import { firestore } from "../Firebase";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { useState } from "react";

export default function FirestoreAPI() {
  const [decks, setDecks] = useState([]);
  const [DB_CRUD_ERR, setDB_CRUD_ERR] = useState("");

  function DB__getDecks(currentUser) {
    return getDocs(collection(firestore, `DecksForUserID_${currentUser.uid}`));
  }

  function parseDBDecksDocs(docs) {
    let parsedDBDecksDocs = [];
    docs.forEach((doc) => {
      parsedDBDecksDocs.push(doc.data());
    });

    return parsedDBDecksDocs;
  }

  async function getDecksFromDBAndUpdateUI(currentUser) {
    setDB_CRUD_ERR("");
    try {
      const docs = await DB__getDecks(currentUser);
      const parsedDBDecksDocs = parseDBDecksDocs(docs);
      setDecks(parsedDBDecksDocs);
    } catch (e) {
      console.error(e);
      setDB_CRUD_ERR(e);
    }
  }

  function DB__addDeck(userID, newDeck) {
    return addDoc(collection(firestore, `DecksForUserID_${userID}`), newDeck);
  }

  const value = {
    decks,
    setDecks,
    DB__getDecks,
    getDecksFromDBAndUpdateUI,
    DB__addDeck,
    firestore,
    collection,
    addDoc,
    setDoc,
    doc,
    getDocs,
  };
  return value;
}
