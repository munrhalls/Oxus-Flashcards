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
              This app is an electronic version of the well-known, popular,
              simple and highly effective learning tool: flashcards.
            </h2>
            <h2 className="WelcomeMessage__subtitle --link">
              <a href="https://en.wikipedia.org/wiki/Flashcard" target="_blank">
                What are flashcards?&nbsp;
              </a>
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
            <ul className="WelcomeMessage__list">
              <li className="WelcomeMessage__list__item">
                To start, first click the "ADD NEW DECK" button.
              </li>
              <li className="WelcomeMessage__list__item">
                In the add deck window, type deck name.
              </li>
              <li className="WelcomeMessage__list__item">
                Next, you'll be taken to deck edition window. There, you can add
                flashcards. You can also delete and edit flashcards in this
                window.
              </li>
              <li className="WelcomeMessage__list__item">
                To add a flashcard, click the "ADD FLASHCARD" button in the edit
                deck window. To delete, click "X". To edit, click the edition
                icon.
              </li>
            </ul>
            <h2 className="WelcomeMessage__subtitle">
              Add as many flashcards as you want to a deck. You can also create
              as many different decks with different flashcards as you want.
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              To turn a flashcard, click it. To go to the next flashcard, mark
              how hard the flashcard was, and click "NEXT".
            </h2>
            <h2 className="WelcomeMessage__subtitle">
              Simple, practical, no-nonsense.
            </h2>
            <h2 className="WelcomeMessage__subtitle">Enjoy Oxus Flashcards!</h2>
            <div
              onClick={() => setIsMessage((message) => false)}
              className="WelcomeMessage__btnContainer"
            >
              <button className="WelcomeMessage__btnContainer__btn">
                Close this message.
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
