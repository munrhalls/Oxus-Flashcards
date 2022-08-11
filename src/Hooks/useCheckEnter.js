import React, { useState, useEffect } from "react";

export default function useCheckEnter() {
  let isEnterKeypress = "let var";
  useEffect(
    () => {
      console.log("useEffect, keypress, on render");
    },
    () => () => {
      console.log("unmount, keypress hook");
    }
  );
  return isEnterKeypress;
}
  