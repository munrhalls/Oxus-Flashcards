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
          <button className="Menu__btn" onClick={() => setMenuOpen(() => null)}>
            <span className="Menu__btn__text">Close</span>
            <img className="Menu__btn__img" src={IMG__CLOSE} alt="Menu icon" />
          </button>

          <button
            className="Menu__btn"
            onClick={() => setMenuOpen(() => "MenuMobile")}
          >
            <span className="Menu__btn__text">Menu</span>
            <img className="Menu__btn__img" src={IMG__MENU} alt="Menu icon" />
          </button>
        </Utils.Toggle>
      </>
    );
  },
  Modal: function ({ setActiveDeckId }) {
    const { currentUser } = useGlobal();

    return (
      <div className="Menu__">
        <Utils.Toggle toggle={currentUser}>
          <div className="Menu__btnsContainer">
            <FormUser.EditProfileBtn />
            <FormUser.LogOutBtn setActiveDeckId={() => setActiveDeckId(null)} />
            <button className="Menu__modalBtn">TUTORIAL</button>
            <button className="Menu__modalBtn">ABOUT</button>
          </div>

          <div className="Menu__btnsContainer">
            <FormUser.LoginBtn />
            <FormUser.RegisterBtn />
            <button className="Menu__modalBtn">TUTORIAL</button>
            <button className="Menu__modalBtn">ABOUT</button>
          </div>
        </Utils.Toggle>
      </div>
    );
  },
};
