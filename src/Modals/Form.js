import React from "react";
import IMG__CLOSE from "./../Assets/close.png";
import IMG__SAVE from "./../Assets/save.png";

export const Form = {
  SubmitExitBtns: function ({ setModalOpen }) {
    return (
      <div className="Form__exitBtnsContainer">
        <button
          type="button"
          className="Form__exitBtnsContainer__btn"
          onClick={() => setModalOpen()}
        >
          <span className="Form__exitBtnsContainer__btn__text">Close</span>
          <img
            className="Form__exitBtnsContainer__btn__img"
            src={IMG__CLOSE}
            alt="CLOSE"
          />
        </button>
        <button className="Form__exitBtnsContainer__btn" type="submit">
          <span className="Form__exitBtnsContainer__btn__text">Save</span>
          <img
            className="Form__exitBtnsContainer__btn__img"
            src={IMG__SAVE}
            alt="SAVE"
          />
        </button>
      </div>
    );
  },
};
