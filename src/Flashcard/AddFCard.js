import React, { useState } from "react";
import cloneDeep from "lodash.clonedeep";

export const AddFcard = ({ onAddFcard }) => {
  const [side, setSide] = useState(false);
  const [fcard, setFcard] = useState({
    unturned: { text: "", image: "" },
    turned: { text: "", image: "" },
  });
  const [turnedImg, setTurnedImg] = useState("");
  const [unturnedImg, setUnturnedImg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddFcard(fcard);
    setFcard({
      unturned: { text: "", image: "" },
      turned: { text: "", image: "" },
    });
  }
  function changeUnturnedText(e) {
    let change = cloneDeep(fcard);
    change.unturned.text = e.target.value;
    setFcard(change);
  }
  function changeUnturnedImg(e) {
    e.preventDefault();
    let str = getBase64(e.target.files[0]);
    setUnturnedImg(str);
  }
  function changeTurnedText(e) {
    let change = cloneDeep(fcard);
    change.turned.text = e.target.value;
    setFcard(change);
  }
  function changeTurnedImg(e) {
    e.preventDefault();
    let str = getBase64(e.target.files[0]);
    setTurnedImg(str);
  }
  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return reader.result;
    };
    reader.onerror = function (error) {
      return null;
    };
  }
  return (
    <form className="Flashcard__form" onSubmit={handleSubmit}>
      <div className="Flashcard__form__elementsContainer">
        <div className="Flashcard__form__elements">
          <div className="Flashcard__turnBtnContainer">
            <button
              className="Flashcard__turnBtn"
              onClick={() => setSide(!side)}
            >
              turn
            </button>
          </div>
          <div className="Flashcard__form__inputs">
            {!side ? (
              <div className="Flashcard_form_cell">
                <div className="Flashcard_form_label">UNTURNED</div>
                <div className="Flashcard">
                  <input
                    className="Flashcard__input"
                    placeholder="Type..."
                    value={fcard.unturned.text}
                    onChange={changeUnturnedText}
                  />
                  <input
                    className="Flashcard__input"
                    type="file"
                    onChange={changeUnturnedImg}
                  />
                </div>
              </div>
            ) : (
              <div className="Flashcard_form_cell">
                <div className="Flashcard_form_label">TURNED</div>
                <div className="Flashcard">
                  <input
                    className="Flashcard__input"
                    placeholder="Type..."
                    value={fcard.turned.text}
                    onChange={changeTurnedText}
                  />
                  <input
                    className="Flashcard__input"
                    type="file"
                    onChange={changeTurnedImg}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="Flashcard__form__frame">
          {side ? (
            <>
              <div className="Flascard__form__frameTitle">TURNED IMAGE</div>
              <img
                className="Flashcard__form__frameImage"
                src={turnedImg}
                alt="Add flashcard image. Edit here."
              />
            </>
          ) : (
            <>
              <div className="Flascard__form__frameTitle">UNTURNED IMAGE</div>
              <img
                className="Flashcard__form__frameImage"
                src={unturnedImg}
                alt="Add flashcard image. Edit here."
              />
            </>
          )}
          <button className="Flashcard__turnBtn --frame">Submit image</button>
        </div>
      </div>
      <div className="Flashcard__form__submitContainer">
        <input
          className="Flashcard__form__submit"
          type="submit"
          value="Add FLASHCARD"
        />
      </div>
    </form>
  );
};
