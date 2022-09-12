import { uuidv4 } from "@firebase/util";
import { useGlobal } from "../../Contexts/GlobalProvider";
import React, { useState, useEffect } from "react";
import { FormUser } from "../FormUser/FormUser";
import Loader from "../Loader/Loader";
import IMG__CARDS from "./../../Assets/cards.png";
import { Menu } from "./../Menu/Menu";
import useMobileCheck from "../../Hooks/useMobileCheck";
import { Utils } from "../Utils/Utils";

export function Header({ setActiveDeckId }) {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useGlobal();

  useEffect(() => {
    setIsLoading(true);
    let timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentUser]);

  return (
    <header className="Header">
      <Menu.OpenCloseBtn />
      <h6 className="Header__loggedStatus">
        <span className="Header__loggedStatus__title">Logged:</span>
        <span className="Header__loggedStatus__displayName">
          {currentUser ? currentUser.displayName : "You're not logged in."}
        </span>
      </h6>

      <h6 className="Header__title">
        <div className="Header__Header__title__decorIconsContainer">
          {Array(16)
            .fill()
            .map((icon, i) => {
              i++;
              return (
                <img
                  style={{
                    bottom: `${-0.25 + i * 1.2}rem`,
                    left: `${-4.5 + 0.25 * i * 4.25 + (1 / i) * 5}rem`,
                    boxShadow: `0 0 15px 5px rgb(${255}, ${255}, ${255})`,
                    borderRadius: `50%`,
                    padding: `0.25rem`,
                    transform: `rotateY(${i * 2.5}deg) scale(${1 - i / 12.5})`,
                  }}
                  key={uuidv4()}
                  className="Header__Header__title__decorIconsContainer__decorIcons"
                  src={IMG__CARDS}
                  alt="CARDS IMAGE."
                />
              );
            })}
        </div>
        <img
          className="Header__title__icon"
          src={IMG__CARDS}
          alt="Flashcards Icon"
        />
        <span className="Header__title__text">FLASHCARDS</span>
      </h6>
    </header>
  );
}
