import React, { useEffect, useState } from "react";

export const Welcome = {
  Shade: function Shade(props) {
    const [isShade, setIsShade] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        // add check if 1st time user
        // add option to click-disappears instantly
        setIsShade(false);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
    return (
      <div className={`WelcomeShade ${isShade ? "" : "--hidden"}`}>
        <h1 className={`WelcomeShade__title ${isShade ? "" : "--hidden"}`}>
          OXUS
        </h1>
        <h2 className={`WelcomeShade__subtitle ${isShade ? "" : "--hidden"}`}>
          Simple, no-nonsense flashcards.
        </h2>
      </div>
    );
  },
  Message: function Message(props) {
    const [message, setIsMessage] = useState(true);

    return (
      <>
        {message ? (
          <div className="WelcomeMessage">
            <h1 className="WelcomeMessage__title">Welcome to flashcards!</h1>
            <h2 className="WelcomeMessage__subtitle --link">
              <a href="https://en.wikipedia.org/wiki/Flashcard" target="_blank">
                What are flashcards?&nbsp;
              </a>
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              Flashcards are a great tool for learning. This app lets you easily
              create and review decks of flashcards.
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              Flashcards work like this: you write question on one side, and
              answer on the other side. You make at least a few such cards, like
              a deck of cards.
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              Then you flip through them, one by one. Each time, you try to
              answer the question on your own. Then you check it with the answer
              you've written on the other side.
            </h2>

            <h2 className="WelcomeMessage__subtitle">
              If the card was hard, you put it at the start of the deck. If
              medium, in the middle. If easy, at the end of the deck. If you've
              repeated a given card so many times you think you've completely
              gotten it, you put that card away.
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              You continue like this, until you've completed (learned) all
              flashcards. Each flashcard represents a small portion of
              information that it gets you to{" "}
              <span className="--italic">
                easily learn by providing automated{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Spaced_repetition"
                  target="_blank"
                >
                  spaced-repetition
                </a>
                .
              </span>
            </h2>

            <h2 className="WelcomeMessage__subtitle">
              It's an electronic version of the well-known, popular,{" "}
              <span className="--italic">
                simple and highly effective learning tool
              </span>
              : flashcards.
            </h2>
            <h2 className="WelcomeMessage__subtitle --link">
              <div>
                <a
                  href="https://en.wikipedia.org/wiki/Flashcard"
                  target="_blank"
                >
                  Click to read Wikipedia article.
                </a>
              </div>
            </h2>
            {/* <ul className="WelcomeMessage__list">
              <li className="WelcomeMessage__list__item">
                To start, first click the "ADD NEW DECK" button.
              </li>
              <li className="WelcomeMessage__list__item">
                Type deck name, press "SAVE".
              </li>
              <li className="WelcomeMessage__list__item">
                This'll open deck edition menu. Click "ADD FLASHCARD". Fill
                question and answer on the flashcard, click "SAVE".
              </li>
              <li className="WelcomeMessage__list__item">
                To start, first click the "ADD NEW DECK" button. Type deck name,
                press "SAVE", you'll be taken to deck edition window, where you
                can add and edit deck's flashcards.
              </li>
              <li className="WelcomeMessage__list__item">
                To start, first click the "ADD NEW DECK" button. Type deck name,
                press "SAVE", you'll be taken to deck edition window, where you
                can add and edit deck's flashcards.
              </li>
            </ul> */}
            {/* <h2 className="WelcomeMessage__subtitle">
              Add as many flashcards as you want to a deck. You can also create
              as many different decks with different flashcards as you want.
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              To turn a flashcard, click it. To go to the next flashcard, mark
              how hard the flashcard was, and click "NEXT".
            </h2> */}
            <h2 className="WelcomeMessage__subtitle">
              This app is designed to offer simple, practical, no-nonsense
              solution for making and using electronic flashcards.
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              You can easily add pure text or{" "}
              <span className="--bold --italic">images</span>, or both{" "}
              <span className="--bold --italic">text and images</span>, in your
              flashcards.
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              For mobile phone users, you can easily{" "}
              <span className="--bold --italic">
                take a picture with phone camera and upload it to your flashcard
                in 1 step!
              </span>
            </h2>
            <h2 className="WelcomeMessage__subtitle">Enjoy Oxus Flashcards!</h2>
            <div
              onClick={() => setIsMessage((message) => false)}
              className="WelcomeMessage__btnContainer"
            >
              <button className="WelcomeMessage__btnContainer__btn">
                Close this message
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  },
};
