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
            <h2 className="WelcomeMessage__subtitle">
              This app is an electronic version of the famous, simple and
              effective learning tool, used and loved by many: flashcards.
            </h2>
            <h2 className="WelcomeMessage__subtitle">In this app you can:</h2>
            <ul className="WelcomeMessage__list">
              <li className="WelcomeMessage__list__item">
                - Create named decks
              </li>
              <li className="WelcomeMessage__list__item">
                - Make and insert flashcards into a deck you choose
              </li>
              <li className="WelcomeMessage__list__item">
                - View flashcards in a deck, one by one
              </li>
              <li className="WelcomeMessage__list__item">
                - View question on one side, answer on another
              </li>
              <li className="WelcomeMessage__list__item">
                - Mark difficulty level and shuffle each flashcard accordingly -
                difficult cards go to the beginning of the deck, medium to the
                middle and easy to the end.
              </li>
              <li className="WelcomeMessage__list__item">
                - See the deck of completed flashcards.
              </li>
            </ul>
            <h2 className="WelcomeMessage__subtitle">
              You can check the already prepared example deck, to see how a deck
              works.
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              To make your own first deck - simply click the "ADD NEW DECK"
              button.
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              2-3 clicks later, you'll be looking at your first deck.
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              Simple. Practical. No nonsense.
            </h2>
            <div
              onClick={() => setIsMessage((message) => false)}
              className="WelcomeMessage__btnContainer"
            >
              <button className="WelcomeMessage__btnContainer__btn">
                Click me to close this message.
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
