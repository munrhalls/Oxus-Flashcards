let mock = [
  {
    id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
    difficulty: 2,
    orderNum: 1,
    unturned: {
      text: "Question 1",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
    },
    turned: {
      text: "Answer 2",
      image: "",
    },
  },
  {
    id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
    difficulty: 2,
    orderNum: 1,
    unturned: {
      text: "Question 3",
      image: "",
    },
    turned: {
      text: "Answer is 33333333333333. 3..",
      image: "",
    },
  },
  {
    id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
    difficulty: 3,
    orderNum: 1,
    unturned: {
      text: "Question 4",
      image: "",
    },
    turned: {
      text: "That's answer 44444444444444. Four. Actually.",
      image: "",
    },
  },
  {
    id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
    difficulty: 3,
    orderNum: 1,
    unturned: {
      text: "Question",
      image: "",
    },
    turned: {
      text: "555555555555555555555 55 4 5 5 5 5",
      image: "",
    },
  },
  {
    id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
    difficulty: 3,
    orderNum: 1,
    unturned: {
      text: "Question",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
    },
    turned: {
      text: "Six.",
      image: "",
    },
  },
  {
    id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
    difficulty: 3,
    orderNum: 1,
    unturned: {
      text: "Question 7",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
    },
    turned: {
      text: "Seven.Seven. Seven.Seven.Seven.Seven.Seven.Seven.Seven. Seven.",
      image: "",
    },
  },
  {
    id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
    difficulty: 3,
    orderNum: 1,
    unturned: {
      text: "Question 8",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
    },
    turned: {
      text: "That's 8.",
      image: "",
    },
  },
  {
    id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
    difficulty: 3,
    orderNum: 1,
    unturned: {
      text: "Question 9",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
    },
    turned: {
      text: "That's nine. 9..... 9.",
      image: "",
    },
  },
  {
    id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
    difficulty: 3,
    orderNum: 1,
    unturned: {
      text: "Question 10",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
    },
    turned: {
      text: "Ten ten ten.",
      image: "",
    },
  },
  {
    id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
    difficulty: 1,
    orderNum: 1,
    unturned: {
      text: "Question 11",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
    },
    turned: {
      text: "11n.",
      image: "",
    },
  },
  {
    id: "e1750c38-745d-49f2-ae93-6bc94d3c0dc4",
    difficulty: 0,
    orderNum: 1,
    unturned: {
      text: "Question 12",
      image:
        "https://firebasestorage.googleapis.com/v0/b/oxus-9ce02.appspot.com/o/flashcards?alt=media&token=5dcb00f9-6961-432e-aa2e-0fef14c259c4",
    },
    turned: {
      text: "12.",
      image: "",
    },
  },
];

let ordered = mock.sort((a, b) => (a.difficulty > b.difficulty ? -1 : 1));

console.log(ordered);

export { ordered };
