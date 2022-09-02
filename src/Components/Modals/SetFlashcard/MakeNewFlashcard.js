import { uuidv4 } from "@firebase/util";

export function makeNewFlashcard(deck, flashcard) {
  let newFlashcard = {
    id: uuidv4(),
    difficulty: 3,
    orderNum:
      deck?.flashcards?.filter((card) => card?.difficulty === 3)?.length || 1,
    unturned: {
      text: flashcard.unturned.text,
      image: flashcard.unturned.image,
    },
    turned: {
      text: flashcard.turned.text,
      image: flashcard.turned.image,
    },
  };
  return newFlashcard;
}
