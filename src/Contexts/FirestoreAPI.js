// cluster 2 - firebase actual database, called firestore
import { firestore } from "../Firebase";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { useState } from "react";

export default function FirestoreAPI() {
  const [decks, setDecks] = useState([]);

  function DB__getDecks(currentUser) {
    return getDocs(collection(firestore, `DecksForUserID_${currentUser.uid}`));
  }

  async function getDatabaseDecks(currentUser) {
    try {
      const docs = await DB__getDecks(currentUser);
      let decks = [];
      docs.forEach((doc) => {
        decks.push(doc.data());
      });
      return decks;
    } catch (e) {
      console.error(e);
    }
  }

  function DB__addDeck(userID, newDeck) {
    return addDoc(collection(firestore, `DecksForUserID_${userID}`), newDeck);
  }

  const value = {
    decks,
    setDecks,
    DB__getDecks,
    getDatabaseDecks,
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
