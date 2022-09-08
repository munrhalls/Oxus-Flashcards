import React, { useState, useEffect } from "react";
import IMG__MENU from "./../../Assets/menu.png";
import useMobileCheck from "../../Hooks/useMobileCheck";
import IMG__CLOSE from "./../../Assets/close.png";
import { useGlobal } from "../../Contexts/GlobalProvider";
import Loader from "../Loader/Loader";
import { FormUser } from "../FormUser/FormUser";

import { Utils } from "../Utils/Utils";

export const Menu = {
  Btn: function () {
    const { setMenuOpen, menuOpen } = useGlobal();

    return (
      <>
        <Utils.Toggle toggle={menuOpen === "MenuMobile"}>
          <button
            className="Header__menuBtn"
            onClick={() => setMenuOpen(() => null)}
          >
            <span className="Header__menuBtn__text">Close</span>
            <img
              className="Header__menuBtn__img"
              src={IMG__CLOSE}
              alt="Menu icon"
            />
          </button>

          <button
            className="Header__menuBtn"
            onClick={() => setMenuOpen(() => "MenuMobile")}
          >
            <span className="Header__menuBtn__text">Menu</span>
            <img
              className="Header__menuBtn__img"
              src={IMG__MENU}
              alt="Menu icon"
            />
          </button>
        </Utils.Toggle>
      </>
    );
  },
  Modal: function ({ setActiveDeckId }) {
    const { currentUser } = useGlobal();

    return (
      <div className="Menu__Mobile">
        <Utils.Toggle toggle={currentUser}>
          <div className="Menu__Mobile__btnsContainer">
            <FormUser.EditProfileBtn />
            <FormUser.LogOutBtn setActiveDeckId={() => setActiveDeckId(null)} />
            <button className="Menu__Mobile__modalBtn">TUTORIAL</button>
            <button className="Menu__Mobile__modalBtn">ABOUT</button>
          </div>

          <div className="Menu__Mobile__btnsContainer">
            <FormUser.LoginBtn />
            <FormUser.RegisterBtn />
            <button className="Menu__Mobile__modalBtn">TUTORIAL</button>
            <button className="Menu__Mobile__modalBtn">ABOUT</button>
          </div>
        </Utils.Toggle>
      </div>
    );
  },
};
