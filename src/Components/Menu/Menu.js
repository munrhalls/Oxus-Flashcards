import React from "react";
import IMG__MENU from "./../../Assets/menu.png";
import useMobileCheck from "../../Hooks/useMobileCheck";
import { useGlobal } from "../../Contexts/GlobalProvider";

export const Menu = {
  MobileBtn: function () {
    const { setModalOpen } = useGlobal();
    return (
      <>
        {useMobileCheck() && (
          <button
            className="Header__mobileMenuBtn"
            onClick={setModalOpen("MenuMobile")}
          >
            <span className="Header__mobileMenuBtn__text">Menu</span>
            <img
              className="Header__mobileMenuBtn__img"
              src={IMG__MENU}
              alt="Menu icon"
            />
          </button>
        )}
      </>
    );
  },

  Mobile: function () {
    return <div className="Menu__Mobile">Mobile Menu</div>;
  },
};
