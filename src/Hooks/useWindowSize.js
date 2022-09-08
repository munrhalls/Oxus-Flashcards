import React, { useState, useEffect } from "react";

export default function useWindowSize() {
  const [vh, setVh] = useState(0);

  const checkSize = () => {
    console.log("bla");

    var height =
      window?.innerHeight ||
      document?.documentElement?.clientHeight ||
      document?.body?.clientHeight;
    setVh(height);
  };

  useEffect(() => {
    checkSize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  console.log(vh);

  return vh;
}
