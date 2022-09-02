// import { uuidv4 } from "@firebase/util";
// import React, { useEffect, useState } from "react";
// import { useGlobal } from "../../../Contexts/GlobalProvider";
// import { InputsHandler } from "../SetFlashcard/InputsHandler";
// import { Preview } from "../SetFlashcard/Preview";
// import { Form } from "../Form";

// export const EditFlashcard = (props) => {
//   const [flashcard, setFlashcard] = useState(null);
//   const [side, setSide] = useState(false);

//   const {
//     setModalOpen,
//     getDecksFromDBAndUpdateUI,
//     DB__setDeck,
//     currentUser,
//     decks,
//     setDecks,
//     setActiveFlashcardId,
//     activeFlashcardId,
//   } = useGlobal();

//   const { activeDeckId } = props;
//   const deck = decks.filter((deck) => activeDeckId === deck.id)[0];

//   useEffect(() => {
//     const activeFlashcard = deck.flashcards.filter(
//       (flashcard) => flashcard.id === activeFlashcardId
//     )[0];
//     console.log(activeFlashcard);
//     setFlashcard(activeFlashcard);
//   }, []);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     try {
//       await DB__setDeck(currentUser.uid, {
//         ...deck,
//         flashcards: [...deck.flashcards],
//       });
//       await getDecksFromDBAndUpdateUI(currentUser);
//     } catch (e) {
//       console.error(e);
//     }

//     resetForm();
//     setModalOpen("EditDeck");
//   }
//   function resetForm() {
//     setSide(false);
//   }

//   return (
//     <div className="SetFlashcard">
//       <form className="Form" onSubmit={handleSubmit}>
//         <div className="Form__topBar">
//           <div className="Form__topBar__line --first">
//             <h2 className="Form__topBar__line__title">EDIT FLASHCARD</h2>
//           </div>
//           <div className="Form__topBar__line --second">
//             <h1 className="Form__topBar__line__deckName">DECK: {deck.name}</h1>
//           </div>
//         </div>
//         <div className="InputsAndPreviewContainer">
//           <InputsHandler
//             className="InputsHandler"
//             setFlashcard={(flashcard) => setFlashcard(flashcard)}
//             flashcard={flashcard}
//             side={side}
//           />
//           <Preview
//             className="Preview"
//             side={side}
//             setSide={(side) => setSide(side)}
//             flashcard={flashcard}
//           />
//         </div>

//         <Form.ExitBtns toModal="EditDeck" />
//       </form>
//     </div>
//   );
// };
