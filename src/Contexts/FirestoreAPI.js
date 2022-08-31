// cluster 2 - firebase actual database, called firestore
import { firestore } from "../Firebase";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { useState } from "react";

export default function FirestoreAPI() {
  const [decks, setDecks] = useState([]);
  const [ErrorDbCRUD, setErrorDbCRUD] = useState("");

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
    setErrorDbCRUD("");
    try {
      const docs = await DB__getDecks(currentUser);
      const parsedDBDecksDocs = parseDBDecksDocs(docs);
      setDecks(parsedDBDecksDocs);
    } catch (e) {
      console.error(e);
      setErrorDbCRUD(e);
    }
  }

  function DB__setDeck(userID, newDeck) {
    return setDoc(
      doc(firestore, `DecksForUserID_${userID}`, newDeck.id),
      newDeck
    );
  }

  const value = {
    decks,
    setDecks,
    DB__getDecks,
    getDecksFromDBAndUpdateUI,
    DB__setDeck,
    firestore,
    collection,
    addDoc,
    setDoc,
    doc,
    getDocs,
  };
  return value;
}
