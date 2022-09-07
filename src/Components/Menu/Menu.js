import React from "react";
import IMG__MENU from "./../../Assets/menu.png";
import useMobileCheck from "../../Hooks/useMobileCheck";
import IMG__CLOSE from "./../../Assets/close.png";
import { useGlobal } from "../../Contexts/GlobalProvider";
import { Utils } from "../Utils/Utils";

export const Menu = {
  MobileBtn: function () {
    const { setModalOpen, modalOpen } = useGlobal();

    return (
      <>
        {useMobileCheck() && (
          <Utils.Toggle toggle={modalOpen === "MenuMobile"}>
            <button
              className="Header__mobileMenuBtn"
              onClick={() => setModalOpen(() => null)}
            >
              <span className="Header__mobileMenuBtn__text">Close</span>
              <img
                className="Header__mobileMenuBtn__img"
                src={IMG__CLOSE}
                alt="Menu icon"
              />
            </button>

            <button
              className="Header__mobileMenuBtn"
              onClick={() => setModalOpen(() => "MenuMobile")}
            >
              <span className="Header__mobileMenuBtn__text">Menu</span>
              <img
                className="Header__mobileMenuBtn__img"
                src={IMG__MENU}
                alt="Menu icon"
              />
            </button>
          </Utils.Toggle>
        )}
      </>
    );
  },

  Mobile: function () {
    return <div className="Menu__Mobile">Mobile Menu</div>;
  },
};
