import React from "react";

export const Preview = ({ src }) => {
  return src ? (
    <img
      className="Flashcard__form__frameImage"
      src={src}
      alt="Add flashcard image. Edit here."
    />
  ) : (
    <div className="Flashcard__form__frameNoImage">
      <span className="Flashcard__form__frameNoImageTitle">
        Want image in flashcard?
      </span>
      <span className="Flashcard__form__frameNoImageTitle">
        Click "choose file" and select an image from your computer.
      </span>
      <span className="Flashcard__form__frameNoImageTitle">
        You can edit it here.
      </span>
    </div>
  );
};
